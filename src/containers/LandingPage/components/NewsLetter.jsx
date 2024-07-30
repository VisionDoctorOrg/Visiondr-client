import React, { useState } from "react";
import "../styles/NewsLetter.css";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { Loader2 } from "lucide-react";
import axios from "axios";
import API_URL from './../../../urls';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const NewsLetter = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const submitForm = async () => {
    setIsLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({email});
    console.log(body);

    try {
      const res = await axios.post(`${API_URL}waitlist/newsletter/`, body, config);
      console.log(res);
      setSuccess(true);
      setMessage("Thankyou for subscribing to our newsletter!");
    } catch (err) {
      console.log(err);
      if(err.response && err.reponse.status == 409){
        setMessage("You have already subscribed to our newsletter");
      }else{
        setMessage("An error occured please try again.");
      }
    }finally{
      setIsLoading(false);
      openDialog();
    }
  }
  return (
    <div className="newsletter-bg pt-16" id="newsletter">
      <section className="md:w-[53%] w-[80%] mx-auto flex flex-col justify-center">
        <h1 className="font-semibold md:text-[36px] text-[22px] text-center px-6 md:px-0">
          Stay Updated with VisionDR
        </h1>
        <p className="text-center md:my-10 my-4 text-[16px] font-medium md:tracking-tight md:leading-tight">
          Want access to reliable, interesting, and helpful information about
          your eye health. Subscribe to our newsletter to stay informed about
          vision and gain access to a personalised eye health recommendation
          plan.
        </p>
        <form
          className="flex gap-3 w-full md:my-16 md:mt-28 my-5 mb-10"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label
            htmlFor="UserEmail2"
            className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
          >
            <input
              type="email"
              id="UserEmail2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              required
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Enter your email
            </span>
          </label>
          <Button
            className="w-[140px] text-[16px] font-normal p-6"
            disabled={isLoading}
            type="submit"
          >
            Submit <MdArrowOutward className={` ${isLoading? "hidden": ""} ml-2 h-4 w-4 `} /><Loader2 className={` ${isLoading? "": "hidden"}  ml-2 h-4 w-4 animate-spin`} />
          </Button>
        </form>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger />
          <DialogContent className="w-[80%]">
            <DialogClose className="absolute top-4 right-4">
              <svg
                className={` flex-shrink-0 size-6 `}
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
            <div
              className={`flex items-center justify-center mx-auto w-[80%] h-[60vh] ${success? "bg-gif": ""}`}
            >
              <p
                className={`text-[20px] font-medium md:text-[28px] text-center`}
              >
                {message}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
};

export default NewsLetter;
