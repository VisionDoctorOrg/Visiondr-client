import React, { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import { useToast } from "@/components/hooks/use-toast";
import axios from "axios";
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
import { useMutation } from "@tanstack/react-query";

const CurrentPlan = ({ dataContext }) => {
  const billing = dataContext.billing;
  const date = new Date(billing.nextPaymentDate);
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const readableDate =
    date.toDateString() + " " + date.toTimeString().split(" ")[0];

  const requestBackend = async () => {
    setIsLoading(true);
    const subscriptionId = billing.subscriptionId;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}subscription/cancel/${subscriptionId}/`,
        {},
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
      console.log(`Bearer ${localStorage.getItem("access")}`);
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
  const handleCancelSubscription = async () => {
    try {
      await submitFormMutation();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="w-full px-6 py-5 bg-white rounded-lg border border-[#d2dbfe] justify-start items-start gap-10 inline-flex">
        <div className="w-full flex-col justify-start items-start gap-10 inline-flex">
          <div className="text-gray-950 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
            Current Plan
          </div>
          <div className={`flex-col justify-start items-start gap-4 flex`}>
            <div className="justify-start items-center gap-10 inline-flex">
              <div className="text-center text-[#1749fc] text-[22px] font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
                {billing.type}
              </div>
              <div className="text-center text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                ₦ 2,000 / month
              </div>
            </div>
            <div className="md:w-[632px] text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
              Access to ask VisionDR sessions, Casefiles for 1, System Checker
              for 1, all personalized eye health resources and community.
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-start gap-6 inline-flex">
              <div className="text-[#404453] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                Status:
              </div>
              <div className="justify-center items-start gap-2 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z"
                        fill="#27BE69"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-[#404453] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  {billing.status}
                </div>
              </div>
            </div>
            <div>
              <span className="text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                Renew subscription by{" "}
              </span>
              <span className="text-gray-950 text-sm font-medium font-['Plus Jakarta Sans'] leading-[16.80px]">
                {readableDate}
              </span>
            </div>
          </div>
          <div className="w-full h-[0px] border border-[#8c8f98]/20"></div>
          {/* <PaymentMethod>
            <div className="text-[#1749fc] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              Change Payment Method
            </div>
          </PaymentMethod> */}
        </div>
      </div>
      <div className="mt-10 flex gap-5">
        <button className="md:w-[238px] h-[60px] p-3 bg-[#1749fc] rounded-lg justify-center items-center gap-3 inline-flex">
          <div className="text-center text-white md:text-[22px] font-medium font-['Plus Jakarta Sans'] leading-relaxed">
            Change Plan
          </div>
        </button>
        <button
          onClick={handleCancelSubscription}
          className="md:w-[245px] h-[60px] p-3 rounded-lg border-2 border-[#1749fc] justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-center text-[#1749fc] md:text-[22px] font-medium font-['Plus Jakarta Sans'] leading-relaxed">
            {isLoading ? "Loading" : "Cancel Subscription"}
          </div>
        </button>
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
            title="Success"
            subtitle="You've successfully cancel your subscription"
            action="Go to dashboard"
            actionPath="/app/dashboard"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CurrentPlan;
