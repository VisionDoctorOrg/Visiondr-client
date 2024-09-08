import React from "react";
import { RiBookOpenFill } from "react-icons/ri";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { RiFolder4Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import FeaturesCard from "./FeaturesCard";

const Services = () => {
  return (
    <div>
      <section
        className=" lg:py-20 lg:px-[140px] px-8 py-10 lg:min-h-[100vh] w-[100vw] bg-[#F1F3FF] flex items-center"
        id="ourservices"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-10 mt-5 lg:mt-0">
            <FeaturesCard
              title="Online Appointment Scheduling"
              discription="Streamline the process of scheduling eye care appointments for your patients or team members. Our platform allows easy booking, ensuring that your staff or patients can access care at their convenience."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M56.666 10H69.9994C70.8834 10 71.7313 10.3512 72.3564 10.9764C72.9815 11.6015 73.3327 12.4493 73.3327 13.3334V66.6667C73.3327 67.5508 72.9815 68.3986 72.3564 69.0237C71.7313 69.6489 70.8834 70 69.9994 70H9.99935C9.11529 70 8.26745 69.6489 7.64233 69.0237C7.0172 68.3986 6.66602 67.5508 6.66602 66.6667V13.3334C6.66602 12.4493 7.0172 11.6015 7.64233 10.9764C8.26745 10.3512 9.11529 10 9.99935 10H23.3327V3.33337H29.9994V10H49.9994V3.33337H56.666V10ZM13.3327 30V63.3334H66.666V30H13.3327ZM19.9993 36.6667H26.666V43.3334H19.9993V36.6667ZM36.666 36.6667H43.3327V43.3334H36.666V36.6667ZM53.3327 36.6667H59.9994V43.3334H53.3327V36.6667Z"
                  fill="#1749FC"
                />
              </svg>
            </FeaturesCard>
            <FeaturesCard
              title="Pre-Appointment Complaint Sharing"
              discription="Enhance the efficiency of your consultations by allowing patients or team members to share their eye health concerns before their appointment. This feature helps providers prepare and deliver more focused and effective care."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M23.3333 20V9.99996C23.3333 9.1159 23.6845 8.26806 24.3096 7.64294C24.9348 7.01782 25.7826 6.66663 26.6667 6.66663H66.6667C67.5507 6.66663 68.3986 7.01782 69.0237 7.64294C69.6488 8.26806 70 9.1159 70 9.99996V56.6666C70 57.5507 69.6488 58.3985 69.0237 59.0237C68.3986 59.6488 67.5507 60 66.6667 60H56.6667V70C56.6667 71.84 55.1667 73.3333 53.31 73.3333H13.3567C12.9171 73.3359 12.4813 73.2517 12.0744 73.0854C11.6675 72.9191 11.2974 72.674 10.9855 72.3643C10.6736 72.0545 10.426 71.6862 10.2568 71.2805C10.0877 70.8747 10.0004 70.4395 10 70L10.01 23.3333C10.01 21.4933 11.51 20 13.3667 20H23.3333ZM30 20H56.6667V53.3333H63.3333V13.3333H30V20ZM23.3333 36.6666V43.3333H43.3333V36.6666H23.3333ZM23.3333 50V56.6666H43.3333V50H23.3333Z"
                  fill="#1749FC"
                />
              </svg>
            </FeaturesCard>
            <FeaturesCard
              title="Eye Health Management Tools"
              discription="Manage and monitor the eye health of your patients or team members with our suite of online tools. Track progress, manage treatment plans, and ensure continuous care to promote better eye health outcomes."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M17.7671 10.9034C19.8472 10.1613 22.0953 10.0249 24.2499 10.5101C26.4045 10.9952 28.3772 12.082 29.9385 13.644C31.4999 15.2061 32.5858 17.1792 33.0699 19.334C33.5541 21.4889 33.4167 23.7369 32.6737 25.8167L68.8237 61.9667L61.7504 69.0367L25.6004 32.8901C23.5202 33.6321 21.2722 33.7685 19.1175 33.2834C16.9629 32.7982 14.9903 31.7115 13.4289 30.1494C11.8676 28.5874 10.7817 26.6142 10.2975 24.4594C9.8133 22.3046 9.9507 20.0566 10.6937 17.9767L18.1471 25.4334C18.6083 25.9109 19.16 26.2919 19.77 26.5539C20.3801 26.8159 21.0362 26.9539 21.7 26.9596C22.3639 26.9654 23.0223 26.8389 23.6368 26.5875C24.2513 26.3361 24.8096 25.9648 25.279 25.4954C25.7485 25.0259 26.1198 24.4676 26.3712 23.8532C26.6226 23.2387 26.7491 22.5803 26.7433 21.9164C26.7375 21.2525 26.5996 20.5964 26.3376 19.9864C26.0755 19.3764 25.6946 18.8246 25.2171 18.3634L17.7637 10.9001L17.7671 10.9034ZM52.3237 17.1834L62.9304 11.2901L67.6437 16.0034L61.7504 26.6101L55.8571 27.7901L48.7904 34.8601L44.0737 30.1467L51.1437 23.0767L52.3237 17.1834V17.1834ZM28.7537 43.1101L35.8237 50.1834L19.3237 66.6834C18.4138 67.5848 17.1928 68.1026 15.9123 68.1301C14.6319 68.1577 13.3897 67.6928 12.4419 66.8314C11.4941 65.9699 10.913 64.7777 10.8185 63.5004C10.7239 62.2232 11.1231 60.9583 11.9337 59.9667L12.2571 59.6101L28.7571 43.1101H28.7537Z"
                  fill="#1749FC"
                />
              </svg>
            </FeaturesCard>
          </div>
          <div className="lg:col-span-3 flex items-center justify-center">
            <div class=" flex-col justify-center items-start lg:gap-14 gap-7 inline-flex mt-10 lg:mt-0 text-center lg:text-left">
              <div class="flex-col justify-start items-start gap-6 flex">
                <div class="flex-col justify-start items-start gap-3 flex">
                <div class="max-w-[450px] w-full text-[#1749fc] lg:text-[28px] text-[22px] font-medium font-['Plus Jakarta Sans'] leading-[33.60px]">Coming soon!!!</div>
                  <div class="max-w-[450px] w-full lg:text-5xl text-3xl font-semibold font-['Plus Jakarta Sans'] lg:leading-[57.60px]">
                    We Offer A Variety of Services for Organizations and Eye
                    Care Providers
                  </div>
                  <div class="max-w-[433px] w-full lg:text-[22px] text-[18px] font-medium font-['Plus Jakarta Sans'] lg:leading-normal">
                    Our unique eye health offerings have features for anyone and
                    everyone with an eye care needs.
                  </div>
                </div>
              </div>
              <NavLink
                to="/reg/signup/individual"
                className="w-full lg:w-fit px-6 py-3 rounded-lg border-2 border-primary justify-center items-center gap-2.5 inline-flex text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <div class="text-center text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
                  Get Started
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
