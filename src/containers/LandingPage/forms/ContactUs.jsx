import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import "../styles/JoinTheWaitList.css";
import "../styles/ContactUs.css";
const ContactUs = () => {
  const [isIndividual, setIsIndividual] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isOrg, setIsOrg] = useState(false);

  const partyClicked = (party) => {
    if (party == "org") {
      setIsOrg(true);
      setIsIndividual(false);
    } else {
      setIsIndividual(true);
      setIsOrg(false);
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isIndividual || isOrg){
      setIsSubmitted(true);
    }
    // setIsLoading(true);
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // const body = JSON.stringify({});
    // console.log(body);

    // try {
    //   const res = await axios.post(``, body, config);
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    //   setIsLoading(false);
    //   //   setErrorMessage(err.response.data.error);
    // }
  };
  return (
    <div className="w-full h-full custom-form ">
      <form
        className={`md:w-[80%] w-[90%] mx-auto ${isSubmitted ? "hidden" : ""} `}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-center md:text-3xl text-[22px] font-semibold md:my-5 my-2">
          Get in Touch!
        </h2>
        <p className="text-center md:md:my-5 my-2 text-[12px] md:text-[16px] font-medium">
          For further inquiries about VisionDR, you can share you inquiries and
          questions by filling in your questions. We will reply promptly to your
          querie.
        </p>
        <label
          htmlFor="UserName"
          className="md:my-5 my-2 relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
        >
          <input
            type="text"
            required
            id="UserName"
            placeholder="Name"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Enter your Name
          </span>
        </label>
        <div className=" md:my-5 my-2 flex md:gap-10 md:flex-nowrap flex-wrap">
          <label
            htmlFor="UserPhone"
            className=" relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
          >
            <input
              type="tel"
              id="UserPhone"
              placeholder="Phone"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              required
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Phone Number
            </span>
          </label>
          <label
            htmlFor="Useremail"
            className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
          >
            <input
              type="email"
              id="Useremail"
              placeholder="Email"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              required
            />

            <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Enter your email
            </span>
          </label>
        </div>

        <div className="h-32 space-y-3 md:my-5 my-2">
          <textarea
            className=" h-full py-3 px-4 block w-full border-gray-200 border-2 rounded-lg text-sm focus:border-primary focus:ring-0 focus:outline-0 disabled:opacity-50 disabled:pointer-events-none resize-none"
            rows="3"
            placeholder="Leave us a message"
          ></textarea>
        </div>
        <div className="flex justify-between md:gap-16 gap-4 md:my-5 my-2">
          <div
            className={`relative h-[120px] md:h-36 w-full border-2 rounded-md flex justify-center items-center flex-col party cursor-pointer ${
              isIndividual ? "border-primary" : ""
            } `}
            onClick={() => partyClicked("Individual")}
          >
            <img
              src="/images/Star 6.png"
              className={`absolute md:top-2 md:left-8 top-1 left-4 ${
                isIndividual ? "" : "hidden"
              }`}
            />
            <img
              src="/images/Star 6.png"
              className={`absolute md:bottom-5 md:left-12 bottom-1 left-6 ${
                isIndividual ? "" : "hidden"
              } `}
            />
            <img
              src="/images/Star 6.png"
              className={`absolute md:top-5 md:right-5 top-2 right-2 ${
                isIndividual ? "" : "hidden"
              } `}
            />
            <img
              src="/images/Star 6.png"
              className={`absolute md:bottom-16 md:right-12 bottom-1 right-5 ${
                isIndividual ? "" : "hidden"
              } `}
            />
            <img
              src="/images/Star 6.png"
              className={`absolute md:bottom-5 md:right-8 bottom-1 right-5 ${
                isIndividual ? "" : "hidden"
              } `}
            />

            <div className="flex -space-x-2">
              <img src="/images/Group_indiv.png" alt="" className="h-10"/>
            </div>
            <p className="text-[12px] md:text-[16px] mt-3 font-medium">I'm an individual</p>
          </div>
          <div
            className={` relative h-[120px] md:h-36 w-full border-2 rounded-md flex justify-center items-center flex-col party cursor-pointer ${
              isOrg ? "border-primary" : ""
            }`}
            onClick={() => partyClicked("org")}
          >
            <img
              src="/images/Star 6.png"
              className={`absolute md:top-2 md:left-8 top-1 left-4 ${isOrg ? "" : "hidden"}`}
            />
            <img
              src="/images/Star 6.png"
              className={`absolute md:bottom-5 md:left-12 bottom-1 left-6 ${isOrg ? "" : "hidden"} `}
            />
            <img
              src="/images/Star 6.png"
              className={`absolute md:top-5 md:right-5 top-2 right-2 ${isOrg ? "" : "hidden"} `}
            />
            <img
              src="/images/Star 6.png"
              className={`absolute md:bottom-16 md:right-12 bottom-1 right-5 ${isOrg ? "" : "hidden"} `}
            />
            <img
              src="/images/Star 6.png"
              className={`absolute md:bottom-5 md:right-8 bottom-1 right-5 ${isOrg ? "" : "hidden"} `}
            />
            <div className="flex -space-x-2">
              <img src="/images/Group_org.png" alt="" className="h-10"/>
            </div>
            <p className="text-[12px] md:text-[16px] mt-3 font-medium">I'm an Organization</p>
          </div>
        </div>
        <Button
          className={cn("hover:border-white border-2 border-primary w-full")}
          type="submit"
        >
          Submit <MdArrowOutward className="ml-2 h-4 w-4" />
        </Button>
        
      </form>
      <div className={`flex items-center justify-center mx-auto w-[80%] h-[60vh] md:h-[100vh] bg-gif ${isSubmitted ? "" : "hidden"}`}>
        <p className={`text-[20px] font-medium md:text-[28px] text-center`}>Thankyou for contacting us!</p>
      </div>
    </div>
  );
};

export default ContactUs;
