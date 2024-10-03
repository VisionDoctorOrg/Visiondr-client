import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SubmitButton from "./SubmitButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/components/hooks/use-toast";
import Success from "../components/Success";
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa";

const AddMedicationReminder = ({ children, dataContext }) => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    medicationName: "",
    medicationType: "",
    dosage: "",
    duration: "",
    reminderTimes: [{ id: 0, reminderTime: "00:00", completed: false }],
  });

  function convertToISO(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number); // Split and convert the time to numbers
    const now = new Date(); // Get the current date

    // Set the hours and minutes
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(0); // Optional: Set seconds to 0 for precision

    // Convert the date to ISO format
    return now.toISOString();
  }

  const updateFormData = (property, value) => {
    setFormData((prevData) => {
      if (property === "reminderTimes") {
        const { time, id } = value;

        // Check if the reminder with the given id already exists
        const reminderExists = prevData.reminderTimes.some(
          (reminder) => reminder.id === id
        );

        if (reminderExists) {
          // If reminder exists, update its time
          return {
            ...prevData,
            reminderTimes: prevData.reminderTimes.map((reminder) =>
              reminder.id === id
                ? { ...reminder, reminderTime: time} // Update the reminderTime
                : reminder
            ),
          };
        } else {
          // Add a new reminder time object to the reminderTimes array
          return {
            ...prevData,
            reminderTimes: [
              ...prevData.reminderTimes,
              { id, reminderTime: time, completed: false },
            ],
          };
        }
      } else {
        // Update other properties
        return {
          ...prevData,
          [property]: value,
        };
      }
    });
  };

  const { medicationName, medicationType, dosage, duration, reminderTimes } =
    formData;

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // check if there is an empty field
  const hasEmptyValue = (data) => {
    // Check if any of the main properties are empty
    if (!data.medicationName || !data.medicationType || !data.dosage || !data.duration) {
      return true;
    }
  
    // Check if any object in the reminderTimes array has an empty 'time' value
    for (const reminder of data.reminderTimes) {
      if (!reminder.reminderTime) {
        return true;
      }
    }
  
    // If no empty values are found
    return false;
  };

  const [timeInputs, setTimeInputs] = useState([{ id: 0, time: "00:00" }]);

  const addNewTimeInput = () => {
    setTimeInputs((prevInputs) => [
      ...prevInputs,
      { id: prevInputs.length, time: "00:00" } // Add new object with incremented id and provided time
    ]);
  };

  const convertTo12HourFormat = (time) => {
    // Split the time into hours and minutes
    let [hours, minutes] = time.split(':');
  
    // Convert hours to a number for calculation
    hours = parseInt(hours, 10);
  
    // Determine if it's AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert the hours to 12-hour format
    hours = hours % 12 || 12; // If hours is 0 or 12, display as 12
  
    // Return the formatted time
    return `${hours}:${minutes}${ampm}`;
  };

  const transformData = (formData) => {
    const { medicationName, medicationType, dosage, duration, reminderTimes } = formData;

    // Mapping reminderTimes to get only the reminderTime values
    const times = reminderTimes.map((timeObj) => convertTo12HourFormat(timeObj.reminderTime));
  
    // Creating the new format object
    const newDataFormat = {
      medicationName,
      medicationType,
      dosage,
      times,
      duration,
    };
  
    return newDataFormat;
  };

  const requestBackend = async (formData) => {
    const data = JSON.stringify({ ...formData });
    console.log(data);
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}notification/medication-reminder/`,
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
      setIsLoading(false);
    }
  };

  // Integrating with useMutation
  const { mutateAsync: submitFormMutation } = useMutation({
    mutationFn: requestBackend,
    onSuccess: () => {
      openDialog();
      dataContext.getMedicationData();
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
    if (hasEmptyValue(formData)) {
      toast({
        title: "Please fill in all fields before submitting.",
        description: "All fields are required.",
        variant: "destructive",
      });
    } else {
      try {
        await submitFormMutation(transformData(formData));
      } catch (e) {
        console.log(e);
      }
    }
    console.log(formData);
  };
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="md:absolute md:left-[86%] md:w-[350px]">
        <DialogHeader>
          <DialogTitle>Input medication details</DialogTitle>
          <div className="flex flex-col gap-2">
            <div class=" h-[33px] py-2 border border-[#d2dbfe] justify-start items-center gap-3 inline-flex">
              <div class="pl-2 justify-center items-center flex">
                <div class="text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px] tracking-tight w-[120px]">
                  Medication name:
                </div>
                <input
                  type="text"
                  className="focus:outline-none"
                  value={medicationName}
                  onChange={(e) =>
                    updateFormData("medicationName", e.target.value)
                  }
                />
              </div>
            </div>
            <div class=" h-[33px] py-2 border border-[#d2dbfe] justify-start items-center gap-3 inline-flex">
              <div class="pl-2 justify-center items-center flex">
                <div class="text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px] tracking-tight">
                  Medication type:
                </div>
                <input
                  type="text"
                  className="focus:outline-none pl-2"
                  value={medicationType}
                  onChange={(e) =>
                    updateFormData("medicationType", e.target.value)
                  }
                />
              </div>
            </div>
            <div class=" h-[33px] py-2 border border-[#d2dbfe] justify-start items-center gap-3 inline-flex">
              <div class="pl-2 justify-center items-center flex">
                <div class="text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px] tracking-tight">
                  Dosage:
                </div>
                <input
                  type="text"
                  className="focus:outline-none pl-2"
                  value={dosage}
                  onChange={(e) => updateFormData("dosage", e.target.value)}
                />
              </div>
            </div>
            {timeInputs.map(({ id, time }) => (
              <div
                class=" h-[33px] py-2 border border-[#d2dbfe] justify-start items-center gap-3 inline-flex"
                key={id}
              >
                <div class="px-2 justify-between items-center flex w-full">
                  <div className="flex gap-3 items-center">
                    <div class="text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px] tracking-tight">
                      Time:
                    </div>
                    <input
                      type="time"
                      placeholder="00:00"
                      className="focus:outline-none px-2 text-sm"
                      value={reminderTimes[id]?.reminderTime}
                      onChange={(e) =>
                        updateFormData("reminderTimes", {
                          id,
                          time: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button className={`${id == 0? "": "hidden"}`} onClick={addNewTimeInput}>
                    <FaPlus className="text-primary" />
                  </button>
                </div>
              </div>
            ))}
            <div class=" h-[33px] py-2 border border-[#d2dbfe] justify-start items-center gap-3 inline-flex">
              <div class="pl-2 justify-center items-center flex">
                <div class="text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px] tracking-tight">
                  Duration:
                </div>
                <input
                  type="number"
                  className="focus:outline-none pl-2"
                  value={duration}
                  onChange={(e) => updateFormData("duration", e.target.value)}
                />
              </div>
            </div>
          </div>
          <SubmitButton
            label={isLoading? "loading" :"Set reminder"}
            className="w-fit mx-auto"
            onClick={handleSubmit}
          />
        </DialogHeader>
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
              subtitle="You've successfully added a medication reminder"
              action="Go to dashboard"
              actionPath="/app/dashboard"
            />
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
};

export default AddMedicationReminder;
