import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Onboarding = ({ scrollToBottom }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [steps, setSteps] = useState(0);

  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const openProfileDialog = () => {
    setIsProfileDialogOpen(true);
  };
  const closeProfileDialog = () => {
    setIsProfileDialogOpen(false);
  };

  const handleNext = () => {
    if (steps > 2) {
      scrollToBottom();
    }
    setSteps(steps + 1);
  };

  const onSkip = () => {
    openProfileDialog();
    localStorage.setItem("onboarding", "true");
  };

  const onboardingItems = [
    {
      title: "Dashboard",
      class: "top-[350px] left-[350px]",
      direction: "left",
      description:
        "The dashboard offers an intuitive overview of your eye health, upcoming consultations, medication reminders, and recent assessments. It’s your one-stop hub to stay organized and in control of your care.",
    },
    {
      title: "Eye Health Metrics",
      class: "top-[350px] left-[450px]",
      direction: "right-bottom",
      description:
        "Monitor critical eye health metrics such as blood pressure, refractive error, glaucoma risk, and color vision. Stay on top of your overall eye health with easy-to-understand feedback and personalized recommendations.",
    },
    {
      title: "Eye Health Medication Reminder",
      class: "top-[150px] left-[70%]",
      direction: "right-bottom",
      description:
        "Never miss a dose! Set personalized reminders for your eye health medications to ensure consistent care and management of conditions like glaucoma or dry eyes.",
    },
    {
      title: "Educational Resources",
      class: "top-[450px] left-[250px]",
      direction: "left",
      description:
        "Access a wealth of eye health knowledge to empower yourself with the latest insights on preventing, managing, and treating eye conditions. Stay informed and proactive with easily digestible articles, videos, and tips.",
    },
    {
      title: "Refractive Error Checker",
      class: "top-[380px] left-[300px]",
      direction: "left",
      description:
        "Quickly assess your vision using our refractive error checker. This tool helps you identify potential issues like myopia, hyperopia, or astigmatism and guides you on the next steps for correction.",
    },
    {
      title: "Glaucoma Checker",
      class: "top-[420px] left-[300px]",
      direction: "left",
      description:
        "Early detection is key in managing glaucoma. Our glaucoma checker allows you to monitor risk factors and track symptoms, offering personalized recommendations for timely intervention",
    },
    {
      title: "Case Files",
      class: "top-[500px] left-[300px]",
      direction: "left",
      description:
        "Seamlessly document your visual and medical history using structured case files. Keep track of your eye health journey, symptoms, and previous consultations to ensure comprehensive, personalized care.",
    },
    {
      title: "User Profile",
      class: "top-[250px] left-[85%]",
      direction: "right",
      description:
        "Create your personalized eye health profile to store medical history, set preferences, and manage your appointments. This makes your experience seamless, tailored, and data-driven.",
    },
  ];
  return (
    <div className="relative">
      <AlertDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        className="relative"
      >
        <AlertDialogTrigger />
        <AlertDialogContent
          className={`absolute  ${onboardingItems[steps].class} max-w-[300px]`}
        >
          <div
            className={`absolute ${
              onboardingItems[steps].direction == "left"
                ? "top-[-50px]"
                : onboardingItems[steps].direction == "right-bottom"
                ? "transform scale-x-[-1] scale-y-[-1] right-0 bottom-[-50px]"
                : "top-[-50px] transform scale-x-[-1] right-0"
            }  `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g filter="url(#filter0_d_3802_5231)">
                <path
                  d="M19.2224 16.4458C18.8864 16.4628 18.6627 16.8 18.7777 17.1161L22.4954 27.3356C22.5898 27.595 22.456 27.8819 22.1966 27.9763L19.3788 29.0022C19.1193 29.0967 18.8324 28.9629 18.7379 28.7034L15.0179 18.4841C14.9028 18.168 14.5147 18.0534 14.2464 18.2564L10.1366 21.3653C9.78868 21.6285 9.29409 21.351 9.33748 20.9168L11.107 3.21066C11.1487 2.7938 11.6538 2.60993 11.9537 2.90247L24.692 15.3285C25.0044 15.6332 24.8039 16.1637 24.3681 16.1858L19.2224 16.4458Z"
                  fill="#1749FC"
                />
                <path
                  d="M23.4352 26.9937L19.9489 17.4104L24.4186 17.1845C25.7259 17.1184 26.3273 15.5267 25.3903 14.6127L12.652 2.18664C11.7523 1.30904 10.237 1.86064 10.112 3.11121L8.34244 20.8174C8.21227 22.1198 9.69605 22.9525 10.7399 22.1628L14.3098 19.4623L17.7982 29.0455C18.0816 29.824 18.9425 30.2253 19.7209 29.9419L22.5387 28.916C23.317 28.6326 23.7183 27.7721 23.4352 26.9937Z"
                  stroke="white"
                  stroke-width="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_3802_5231"
                  x="1.33398"
                  y="-3.24298"
                  width="35.5127"
                  height="46.2761"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3802_5231"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3802_5231"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>{onboardingItems[steps].title} </AlertDialogTitle>
            <AlertDialogDescription className="text-black">
              {onboardingItems[steps].description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex sm:justify-between">
            {steps < 7 && <Button onClick={handleNext}>Next</Button>}

            <AlertDialogCancel
              className="border-primary text-primary"
              onClick={onSkip}
            >
              {steps === 7 ? "Done" : "Skip"}
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your profile is incomplete</DialogTitle>
            <DialogDescription>
              Complete your profile to get personalized recommendation and
              optimized your experience
            </DialogDescription>
            <DialogFooter>
              <Button onClick={closeProfileDialog}>
                <NavLink to="/app/profile">Yes, complete</NavLink>
              </Button>
              <Button onClick={closeProfileDialog} variant="outline">
                Cancel
              </Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Onboarding;
