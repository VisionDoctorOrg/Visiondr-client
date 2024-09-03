import React, { useContext } from "react";
import PersonalInformation from "../components/PersonalInformation";
import { StepContext } from "./StepContext";
import MedicalHistory from "./MedicalHistory";
import NavigationComponent from "./../NavigationComponet/NavigationComponent";
import VisionSymptoms from "./VisionSymptoms";
import CurrentVisionCorrection from "./CurrentVisionCorrection";
import LifestyleAndVisualDemands from "../components/LifestyleAndVisualDemands";
import AdditionalInformation from "../components/AdditionalInformation";
import { DataContext } from "./DataContext";
import Preview from "./Preview";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/components/hooks/use-toast";

const Forms = () => {
  const { step, setStep } = useContext(StepContext);
  const dataContext = useContext(DataContext);
  const { toast } = useToast();

  // transform data to suite backend
  const transformData = (data) => {
    // Function to extract 'question' and 'answer' from objects
    const transformArray = (arr) => {
      return arr.map(({ question, answer }) => ({ question, answer }));
    };

    // Create a new object with the same keys but transformed arrays
    const newData = {
      personalInformation: transformArray(data.personalInformation),
      medicalHistory: transformArray(data.medicalHistory),
      visionSymptoms: transformArray(data.visionSymptoms),
      currentVisionCorrection: transformArray(data.currentVisionCorrection),
      lifestyleVisualDemands: transformArray(data.lifestyleVisualDemands),
      additionalInformation: transformArray(data.additionalInformation),
    };

    return newData;
  };

  // check if there is an empty field
  const hasEmptyAnswer = (data) => {
    // Function to check for empty answers in an array
    const containsEmptyAnswer = (arr) => {
      return arr.some(({ answer }) => answer.trim() === "");
    };

    // Check each property of the data object
    return Object.values(data).some(containsEmptyAnswer);
  };

  const requestBackend = async (responses) => {
    const data = JSON.stringify({ responses });
    console.log(data);
    console.log(localStorage.getItem("access"));
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}refractiveErrorCheck/questionnaire/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
            // Add any other headers your API requires
          },
        }
      );

      console.log({ responsedata: response.data });

      return response.data; // Assuming the response contains data you want to return
    } catch (error) {
      console.error("There was a problem with the axios request:", error);
      throw error; // Re-throw the error to be caught by the caller
    }
  };

  // Integrating with useMutation
  const { mutateAsync: submitFormMutation } = useMutation({
    mutationFn: requestBackend,
    onSuccess: () => {
      console.log("Success");
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  // Handle form submission
  const handleSubmit = async () => {
    if (hasEmptyAnswer(dataContext.data)) {
      toast({
        title: "Please fill in all fields before submitting.",
        description: "All fields are required.",
      });
    } else {
      try {
        await submitFormMutation(transformData(dataContext.data));
      } catch (e) {
        console.log(e);
      }
    }
  };
  const componets = () => {
    switch (step) {
      case 1:
        return <PersonalInformation dataContext={dataContext} />;
      case 2:
        return <MedicalHistory dataContext={dataContext} />;
      case 3:
        return <VisionSymptoms dataContext={dataContext} />;
      case 4:
        return <CurrentVisionCorrection dataContext={dataContext} />;
      case 5:
        return <LifestyleAndVisualDemands dataContext={dataContext} />;
      case 6:
        return <AdditionalInformation dataContext={dataContext} />;
      case 7:
        return <Preview dataContext={dataContext} />;
    }
  };
  return (
    <div className="w-full">
      {componets()}
      <NavigationComponent
        className="mt-12 mb-6"
        context={useContext(StepContext)}
        successActionPath="/app/refractive-error/refractiveErrorReport"
        maxStep={7}
        submitCallback={handleSubmit}
      />
    </div>
  );
};

export default Forms;
