import React, { useState } from "react";
import CardInput from "./CardInput";
import FormInput from "./FormInput";
import CountrySelect from "./CountrySelect";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";

const MakePayment = ({dataContext}) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const requestBackend = async () => {
      setIsLoading(true)
        const plan = "PLN_fti42oat316rpp5";
        let amount = "500";
        if(dataContext.billing.chosenPlan === "starter"){
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
          console.log(response)
    
    
          return response.data; // Assuming the response contains data you want to return
        } catch (error) {
          throw error; // Re-throw the error to be caught by the caller
        } 
      };
    
      // Integrating with useMutation
      const { mutateAsync: submitFormMutation } = useMutation({
        mutationFn: requestBackend,
        onSuccess: () => {
          console.log("Success")
        },
        onError: (error) => {
          console.error("Error:", error);
        },
      });
    
      // Handle form submission
      const handleSubmit = async () => {
        setIsLoading(false);
          try {
            const response = await submitFormMutation();
            window.location.href = response.data.authorization_url;
          } catch (e) {
            console.log(e);
        }
      };
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  return (
    <div>
      <div class="my-5 text-gray-950 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
        Make Payment
      </div>
      <div class="mb-5 flex-col justify-start items-start gap-6 inline-flex">
        <div class="flex-col justify-start items-start gap-3 flex w-full">
          <div class="md:w-[400px] w-full justify-between items-start inline-flex">
            <div class="text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
              {capitalize(dataContext.billing.chosenPlan ?? "starter")}
            </div>
            <div class="text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
              ₦ {dataContext.billing.chosenPlan === "family"? "5,000": "2,000"}
            </div>
          </div>
          <div class="md:w-[400px] w-full justify-between items-start inline-flex">
            <div class="text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
              Discount
            </div>
            <div class="text-gray-950 text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
              ₦ 0
            </div>
          </div>
        </div>
        <div class="flex-col justify-start items-start gap-3 flex w-full">
          <div class="self-stretch h-[0px] border border-[#8c8f98]/10"></div>
          <div class="md:w-[400px] w-full justify-between items-start inline-flex">
            <div class="text-gray-950 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
              Total
            </div>
            <div class="text-gray-950 text-[22px] font-semibold font-['Plus Jakarta Sans'] leading-relaxed">
              ₦ {dataContext.billing.chosenPlan === "family"? "5,000": "2,000"}
            </div>
          </div>
          <div class="md:w-[182px] text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
            Due on 8 September 2024, then every month
          </div>
        </div>
      </div>
      {/* <div class="my-5 text-[#404453] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
        Input payment method and address associated with your payment
        information. This is where we’ll bill your VisionDR subscription.
      </div> */}

      {/* <form className="flex flex-col max-w-[812px]">
        <CardInput
          label="Card number"
          placeholder="1234 1234 1234 1234"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bb08a07ce30c1ef2247031a4879ae53640ee8be4c70d69df92af0834f664395b?placeholderIfAbsent=true&apiKey=06e54cbb0c8d4ebdbfa1852341f08638"
        />
        <div className="flex flex-wrap gap-3 items-start mt-3 max-md:max-w-full">
          <FormInput label="Expiration date" placeholder="mm/yy" />
          <FormInput label="CVC code" placeholder="123" />
        </div>
        <FormInput label="Name on payment method" placeholder="Enter name" />
        <FormInput label="Billing address" placeholder="Address line" />
        <CountrySelect />
        <div className="flex flex-wrap gap-3 items-start mt-3 text-sm leading-tight text-gray-700 max-md:max-w-full">
          <FormInput
            label="City"
            placeholder="Lagos"
            iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/98f2123a9d63b6fe3735cabfcc1a75383fe437ab1e13b7f0e1abeb7b8bebd59f?placeholderIfAbsent=true&apiKey=06e54cbb0c8d4ebdbfa1852341f08638"
          />
          <FormInput label="Zip code" placeholder="Zip code" />
        </div>
        <CardInput
          label="Input card pin"
          placeholder="* * * *"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bb08a07ce30c1ef2247031a4879ae53640ee8be4c70d69df92af0834f664395b?placeholderIfAbsent=true&apiKey=06e54cbb0c8d4ebdbfa1852341f08638"
        />
      </form> */}
      <SubmitButton label={isLoading? "loading" :"Make Payment"} onClick={handleSubmit} />
    </div>
  );
};

export default MakePayment;
