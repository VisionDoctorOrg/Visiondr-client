import React, { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import FormCard from "../components/FormCard";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
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

const AdditionalInformation = ({ dataContext }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const hasEmptyAnswer = (data) => {
    if (
      data["additionalInformation"][0].answer === "" ||
      data["additionalInformation"][1].answer === ""
    ) {
      return true;
    }

    return false;
  };

  const requestBackend = async () => {
    setIsLoading(true);
    let currentVision = dataContext.data["additionalInformation"][0].answer;
    let lifeStyle = dataContext.data["additionalInformation"][1].answer;
    const data = JSON.stringify({ currentVision, lifeStyle });
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}users/additional-info/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
            // Add any other headers your API requires
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hasEmptyAnswer(dataContext.data)) {
      toast({
        title: "Please enter all fields",
        description: "All fields are required.",
        variant: "destructive",
      });
    } else {
      await submitFormMutation();
    }
  };
  return (
    <FormCard
      title="Additional Information"
      questions={dataContext.data["additionalInformation"]}
      dataContext={dataContext}
      tag="additionalInformation"
    >
      <SubmitButton
        label={isLoading ? "loading" : "Save changes"}
        className="w-[200px] mt-10 "
        onClick={handleSubmit}
      />
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
            subtitle="You've successfully updated your additional information"
            action="Go to dashboard"
            actionPath="/app/dashboard"
          />
        </DialogContent>
      </Dialog>
    </FormCard>
  );
};

export default AdditionalInformation;
