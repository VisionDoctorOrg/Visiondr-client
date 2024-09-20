import React, { useState } from "react";
import InfoField from "../components/InfoField";
import SubmitButton from "../components/SubmitButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/components/hooks/use-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Success from "../components/Success";
import { cn } from "@/lib/utils";

const Profile = ({ dataContext }) => {
  const personalInfo = dataContext.data["personalInformation"];
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // transform data to suite backend
  const transformData = (data) => {
    const formData = new FormData();
    if (data["uploadedFile"]) {
      formData.append("file", data["uploadedFile"]);
    }
    formData.append("fullName", personalInfo[0].answer);
    formData.append("DOB", personalInfo[1].answer);
    formData.append("gender", personalInfo[2].answer);
    formData.append("phoneNumber", personalInfo[4].answer);
    formData.append("occupation", personalInfo[5].answer);
    formData.append("hobbies", personalInfo[6].answer);

    // const transformArray = (arr) => {
    //   return arr.map(({ question, answer }) => ({ question, answer }));
    // };
    // // Create a new object with the same keys but transformed arrays
    // const newData = {
    //   caseFile: transformArray(data.caseFile),
    // };

    return formData;
  };

  // check if there is an empty field
  const hasEmptyAnswer = (data) => {
    return false;
  };

  const requestBackend = async (formData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}users/update-user-profile/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "multipart/form-data",
            // Add any other headers your API requires
          },
        }
      );

      return response.data; // Assuming the response contains data you want to return
    } catch (error) {
      throw error; // Re-throw the error to be caught by the caller
    } finally {
      setIsLoading(false);
    }
  };

  // Integrating with useMutation
  const { mutateAsync: submitFormMutation } = useMutation({
    mutationFn: requestBackend,
    onSuccess: () => {
      openDialog();
    },
    onError: (error) => {
      console.error("Error:", error);
      toast({
        title: error.response.data.message,
        variant: "destructive",
      });
    },
  });

  // Handle form submission
  const handleSubmit = async () => {
    if (hasEmptyAnswer(dataContext.data)) {
      toast({
        title: "Please upload user profile",
        description: "All fields are required.",
        variant: "destructive",
      });
    } else {
      try {
        await submitFormMutation(transformData(dataContext.data));
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <section className="flex flex-col p-6 rounded-lg border border-violet-200 border-solid w-full text-gray-950 max-md:px-5">
      <header className="flex flex-col w-full max-md:max-w-full">
        <h2 className="text-base font-semibold tracking-tight max-md:max-w-full">
          Profile
        </h2>
      </header>
      <div className="flex flex-col mt-5 w-full text-base font-medium max-w-[812px] max-md:max-w-full">
        {personalInfo.map((info, index) => (
          <InfoField
            key={index}
            label={info.question}
            value={info.answer}
            editable={info.editable}
            id={info.id}
            dataContext={dataContext}
            tag="personalInformation"
          />
        ))}
        <SubmitButton
          label={isLoading ? "loading" : "Update Profile"}
          className="w-[200px] mt-10 "
          onClick={handleSubmit}
        />
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger />
        <DialogContent
          className={cn("md:max-w-fit p-0 bg-transparent border-0")}
        >
          <DialogClose className="absolute top-4 right-4">
            <svg
              className={` flex-shrink-0 size-6 text-white`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </DialogClose>
          <Success
            title="Hurray!!!"
            subtitle="You've successfully updated your profile"
            action="Go to dashboard"
            actionPath="/app/dashboard"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Profile;
