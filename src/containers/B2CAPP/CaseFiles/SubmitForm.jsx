import React, { useContext, useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { DataContext } from "./DataContext";
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

const SubmitForm = () => {
  const dataContext = useContext(DataContext);
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // transform data to suite backend
  const transformData = (data) => {
    // Function to extract 'question' and 'answer' from objects
    const transformArray = (arr) => {
      return arr.map(({ question, answer }) => ({ question, answer }));
    };
    // Create a new object with the same keys but transformed arrays
    const newData = {
      caseFile: transformArray(data.caseFile),
    };

    return newData;
  };

  // check if there is an empty field
  const hasEmptyAnswer = (data) => {
    // Function to check for empty answers in an array
    const containsEmptyAnswer = (arr) => {
      if (arr) {
        return arr.some(({ answer }) => answer.trim() === "");
      }
      return false;
    };

    // Check each property of the data object
    return Object.values(data).some(containsEmptyAnswer);
  };

  const requestBackend = async (responses) => {
    const data = JSON.stringify({ responses });
    dataContext.setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}casefile/questionnaire/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
            // Add any other headers your API requires
          },
        }
      );

      return response.data; // Assuming the response contains data you want to return
    } catch (error) {
      throw error; // Re-throw the error to be caught by the caller
    } finally {
      dataContext.setIsLoading(false);
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
        title: "Please fill in all fields before submitting.",
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
    <>
      <SubmitButton
        className="w-[140px] mt-10"
        label={dataContext.isLoading ? "Loading" : "Submit"}
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
            subtitle="You've completed the questionnaire, you will get a response shortly with your result  and recommendations"
            action="Get Report"
            actionPath="/app/recommendation"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubmitForm;
