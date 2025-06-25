import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function PlanCard({ title, price, buttonText, features, className, type }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const btnAction = () => {
    if (type === "basic") {
      return "Free";
    } else {
      return "Subscribe";
    }
  };

  const requestBackend = async () => {
    setIsLoading(true);
    const plan = "PLN_fti42oat316rpp5";
    let amount = "1000";
    if (type === "starter") {
      amount = "500";
    } else if (type == "askVisionDR") {
      amount = "200";
    }
    const data = JSON.stringify({ plan, amount });
    console.log(data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}subscription/initialize`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
            "Content-Type": "application/json",
            // Add any other headers your API requires
          },
        }
      );
      console.log(response);

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
      console.log("Success");
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  // Handle form submission
  const handleSubscribe = async () => {
    if (!localStorage.getItem("access")) {
      navigate("/auth/signin/individual");
      return;
    }
    try {
      const response = await submitFormMutation();
      window.location.href = response.data.authorization_url;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      class={` ${className} md:min-h-[465px] md:max-w-[262px] w-full h-fit px-0 py-5 bg-white rounded-lg border border-[#d2dbfe] flex-col justify-start items-center gap-10 inline-flex `}
    >
      <div class="w-full flex-col justify-start items-center gap-10 flex px-2">
        <div class="text-[#404453] text-[22px] font-medium  leading-relaxed">
          {title}
        </div>
        <div class="text-center">
          <span className="text-gray-950 text-[28px] font-normal  leading-[43.20px]">
            ₦
          </span>
          <span className="text-gray-950 text-[28px] font-semibold  leading-[43.20px]">
            {" "}
            {price}
          </span>
          <span className="text-[#8c8f98] text-[22px] font-medium  leading-relaxed">
            / {type == "askVisionDR" ? "per session" : "monthly"}
          </span>
        </div>
        <button
          onClick={handleSubscribe}
          disabled={isLoading || btnAction() === "Free"}
          className={`w-full h-[60px] p-3 rounded-lg border-2 border-[#1749fc] text-[#1749fc] justify-center items-center gap-2.5 inline-flex hover:bg-primary hover:text-white hover:border-none transition-all duration-500 disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-white `}
        >
          <div class="text-center text-[22px] font-medium leading-relaxed">
            {isLoading ? "Please wait" : btnAction()}
          </div>
          <div class="w-6 h-6 justify-center items-center flex">
            <MdArrowOutward className="w-6 h-6 relative" />
          </div>
        </button>
        <ul class=" w-full text-gray-950 text-base font-medium leading-normal list-disc pl-6">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PlanCard;
