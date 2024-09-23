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
import MedicationItemWithDelete from "./MedicationItemWithDelete";

const DeleteMedicationItem = ({ children, dataContext }) => {
  const [isLoading, setIsLoading] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="md:absolute md:left-[88%] md:w-[300px] px-0">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <section className="flex flex-col gap-2 justify-between leading-tight w-full">
          {dataContext.medData.medications.map((medicationData) =>
            medicationData.reminderTimes.map((time, index) => (
              <MedicationItemWithDelete data={medicationData} time={time} key={index} dataContext={dataContext}/>
            ))
          )}
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteMedicationItem;
