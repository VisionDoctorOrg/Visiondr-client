import React, { useEffect, useState } from "react";
import AuthPage from "./AuthPage";
import { MdArrowOutward } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { connect } from "react-redux";
import { login, refresh } from "../../actions/auth";
import API_URL from "@/urls";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SigninSuccess from "./SigninSuccess";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

const Signin = ({login, refresh, user, error}) => {
  refresh();
  const { type } = useParams();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };


  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema)});

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await login(data.email, data.password);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) {
      setError("root", {
        message: error,
      });
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      console.log(localStorage.getItem("access"))
      openDialog();
    }
  }, [user]);

  return (
    <AuthPage>
      <div class="md:w-[410px] md:h-[791px] flex-col justify-start items-start gap-[72px] inline-flex">
        <div class="h-10 p-1 justify-center items-center gap-2 inline-flex">
          <svg
            width="31"
            height="36"
            viewBox="0 0 31 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M24.9298 0.833374L20.2931 5.05504C22.4516 5.70702 24.4383 6.83016 26.1098 8.34337C31.9631 13.6767 31.9631 22.3234 26.1098 27.6567C21.7898 31.59 15.1131 34.0934 6.08314 35.1667L10.7198 30.945C8.56138 30.2931 6.57468 29.1699 4.90313 27.6567C-0.950198 22.3234 -0.985198 13.7084 4.90313 8.34337C9.22313 4.41004 15.9015 1.90671 24.9315 0.833374H24.9298ZM15.5065 8.00004C9.06313 8.00004 3.8398 12.4767 3.8398 18C3.8398 23.5234 9.06313 28 15.5065 28C21.9498 28 27.1731 23.5234 27.1731 18C27.1731 12.4767 21.9498 8.00004 15.5065 8.00004ZM15.5065 11.8334C19.1898 11.8334 22.1731 14.595 22.1731 18C22.1731 21.405 19.1898 24.1667 15.5065 24.1667C11.8231 24.1667 8.8398 21.405 8.8398 18C8.8398 14.595 11.8231 11.8334 15.5065 11.8334ZM15.5065 15.1667C13.6098 15.1667 12.1731 16.495 12.1731 18C12.1731 19.505 13.6098 20.8334 15.5065 20.8334C17.4031 20.8334 18.8398 19.505 18.8398 18C18.8398 16.495 17.4031 15.1667 15.5065 15.1667Z"
              fill="black"
            />
          </svg>
          <div class="text-center text-gray-950 text-base font-semibold  leading-tight ">
            {" "}
            VisionDR
          </div>
        </div>
        <form
          class="self-stretch h-[559px] flex-col justify-start items-center gap-6 flex"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class="h-[79px] flex-col justify-start items-start gap-3 flex w-full">
            <div class="self-stretch text-gray-950 text-4xl font-semibold leading-[43.20px]">
              Welcome Back!
            </div>
            <div class="text-[#8c8f98] text-base font-medium leading-normal">
              {type == "individual"
                ? "Sign in to access your personalized eye care services."
                : "Sign in to manage your organization's eye care services."}
            </div>
          </div>
          <div class="flex-col justify-start items-end gap-6 flex w-full">
            <div class={`w-full my-3 ${type == "individual" ? "" : "mt-9"} `}>
              <label
                htmlFor="email"
                className=" relative block border-b-2 border-[#d2dbfe] bg-transparent pt-3 focus-within:border-blue-600 w-full"
              >
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("email")}
                  required
                />

                <span className="absolute start-0 top-1 text-base  -translate-y-3/4 text-[#8c8f98] font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Enter your email
                </span>
              </label>
            </div>
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
            <div class="flex-col justify-start items-end gap-6 flex relative w-full">
              <div class="w-full">
                <label
                  htmlFor="password"
                  className=" relative block border-b-2 border-[#d2dbfe] bg-transparent pt-3 focus-within:border-blue-600 w-full"
                >
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    {...register("password")}
                    required
                  />

                  <span className="absolute start-0 top-1 text-base  -translate-y-3/4 text-[#8c8f98] font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Enter your password
                  </span>
                  <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                    type="button"
                  >
                    {isPasswordVisible ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </label>
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </div>
              <NavLink
                to={`/auth/forgot-password/${type}`}
                className="self-stretch text-right text-[#1749fc] text-base font-medium  leading-normal"
              >
                Forgot password?
              </NavLink>
            </div>
          </div>
          <button class="md:w-[400px] w-full p-3 bg-[#1749fc] border-[1px] border-[#1749fc] hover:border-gray-50 rounded-lg justify-center items-center gap-3 inline-flex transition-all duration-300" disabled={isSubmitting} type="submit">
            <div class="text-center text-white text-base leading-normal">
            {isSubmitting ? "Loading..." : "Sign In"}
            </div>
            <div class="w-6 h-6 justify-center items-center flex text-white">
              <MdArrowOutward className="w-6 h-6 relative" />
            </div>
          </button>
          {errors.root && <div className="text-red-500">{errors.root.message}</div>}
          <div class="justify-start items-center gap-3 inline-flex">
            <div class="md:w-[135px] w-[100px] h-[0px] bg-[#8c8f98] border-t border-[#8c8f98]"></div>
            <div class="text-[#8c8f98] text-base font-medium  leading-normal">
              Or sign in with
            </div>
            <div class="md:w-[135px] w-[100px] h-[0px] bg-[#8c8f98] border-t border-[#8c8f98]"></div>
          </div>
          <div class="flex-col justify-center items-center gap-6 flex">
            <div class="justify-start items-start gap-3 inline-flex">
              <a href={`${API_URL}auth/google`} class="md:w-[194px] h-12 px-5 py-2 rounded-md border-2 border-[#d2dbfe] hover:border-primary duration-300 transition-all justify-center items-center gap-2 flex">
                <div class="w-6 h-6 relative">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="flat-color-icons:google">
                      <path
                        id="Vector"
                        d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                        fill="#FFC107"
                      />
                      <path
                        id="Vector_2"
                        d="M3.65332 7.3455L6.93882 9.755C7.82782 7.554 9.98082 6 12.5003 6C14.0298 6 15.4213 6.577 16.4808 7.5195L19.3093 4.691C17.5233 3.0265 15.1343 2 12.5003 2C8.65932 2 5.32832 4.1685 3.65332 7.3455Z"
                        fill="#FF3D00"
                      />
                      <path
                        id="Vector_3"
                        d="M12.5002 21.9999C15.0832 21.9999 17.4302 21.0114 19.2047 19.4039L16.1097 16.7849C15.0719 17.574 13.8039 18.0009 12.5002 17.9999C9.89916 17.9999 7.69066 16.3414 6.85866 14.0269L3.59766 16.5394C5.25266 19.7779 8.61366 21.9999 12.5002 21.9999Z"
                        fill="#4CAF50"
                      />
                      <path
                        id="Vector_4"
                        d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                        fill="#1976D2"
                      />
                    </g>
                  </svg>
                </div>
                <div class="text-gray-950 text-base font-medium  leading-normal">
                  Google
                </div>
              </a>
              <button class="md:w-[194px] h-12 px-5 py-2 rounded-md border-2 border-[#d2dbfe] hover:border-primary duration-300 transition-all justify-center items-center gap-2 flex">
                <div class="w-6 h-6 relative">
                  {type == "individual" ? (
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Social Icons" clip-path="url(#clip0_2311_7293)">
                        <path
                          id="c"
                          d="M24.5 12C24.5 5.37264 19.1274 0 12.5 0C5.87264 0 0.5 5.37264 0.5 12C0.5 17.6275 4.37456 22.3498 9.60128 23.6467V15.6672H7.12688V12H9.60128V10.4198C9.60128 6.33552 11.4498 4.4424 15.4597 4.4424C16.22 4.4424 17.5318 4.59168 18.0685 4.74048V8.06448C17.7853 8.03472 17.2933 8.01984 16.6822 8.01984C14.7147 8.01984 13.9544 8.76528 13.9544 10.703V12H17.8741L17.2006 15.6672H13.9544V23.9122C19.8963 23.1946 24.5005 18.1354 24.5005 12H24.5Z"
                          fill="#0866FF"
                        />
                        <path
                          id="d"
                          d="M17.1997 15.6672L17.8732 12H13.9535V10.703C13.9535 8.76526 14.7138 8.01982 16.6813 8.01982C17.2924 8.01982 17.7844 8.0347 18.0676 8.06446V4.74046C17.5309 4.59118 16.2191 4.44238 15.4588 4.44238C11.4489 4.44238 9.60038 6.3355 9.60038 10.4198V12H7.12598V15.6672H9.60038V23.6467C10.5287 23.8771 11.4997 24 12.4991 24C12.9911 24 13.4764 23.9697 13.953 23.9121V15.6672H17.1993H17.1997Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2311_7293">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Social Icons" clip-path="url(#clip0_2354_1139)">
                        <path
                          id="Vector"
                          d="M22.7283 0H2.27167C1.80179 0 1.35116 0.186657 1.01891 0.518909C0.686657 0.851161 0.5 1.30179 0.5 1.77167V22.2283C0.5 22.6982 0.686657 23.1488 1.01891 23.4811C1.35116 23.8133 1.80179 24 2.27167 24H22.7283C23.1982 24 23.6488 23.8133 23.9811 23.4811C24.3133 23.1488 24.5 22.6982 24.5 22.2283V1.77167C24.5 1.30179 24.3133 0.851161 23.9811 0.518909C23.6488 0.186657 23.1982 0 22.7283 0ZM7.65333 20.445H4.045V8.98333H7.65333V20.445ZM5.84667 7.395C5.43736 7.3927 5.03792 7.2692 4.69873 7.04009C4.35955 6.81098 4.09584 6.48653 3.94088 6.10769C3.78591 5.72885 3.74665 5.31259 3.82803 4.91145C3.90941 4.51032 4.1078 4.14228 4.39816 3.85378C4.68851 3.56529 5.05782 3.36927 5.45947 3.29046C5.86112 3.21165 6.27711 3.25359 6.65495 3.41099C7.03279 3.56838 7.35554 3.83417 7.58247 4.17481C7.80939 4.51546 7.93032 4.91569 7.93 5.325C7.93386 5.59903 7.88251 5.87104 7.77901 6.1248C7.67551 6.37857 7.52198 6.6089 7.32757 6.80207C7.13316 6.99523 6.90185 7.14728 6.64742 7.24915C6.393 7.35102 6.12067 7.40062 5.84667 7.395ZM20.9533 20.455H17.3467V14.1933C17.3467 12.3467 16.5617 11.7767 15.5483 11.7767C14.4783 11.7767 13.4283 12.5833 13.4283 14.24V20.455H9.82V8.99167H13.29V10.58H13.3367C13.685 9.875 14.905 8.67 16.7667 8.67C18.78 8.67 20.955 9.865 20.955 13.365L20.9533 20.455Z"
                          fill="#0A66C2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2354_1139">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
                <div class="text-gray-950 text-base font-medium  leading-normal">
                  {type == "individual" ? "Facebook" : "Linkedin"}
                </div>
              </button>
            </div>
            <div>
              <span className="text-[#8c8f98] text-base font-medium  leading-normal">
                Don’t have an account?{" "}
              </span>
              <NavLink
                to={`/reg/signup/${type}`}
                className="text-[#1749fc] text-base font-medium  leading-normal"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </form>
        <div class="self-stretch">
          <span className="text-[#8c8f98] text-base font-medium  leading-normal">
            By signing in, you agree to our{" "}
          </span>
          <span className="text-[#1749fc] text-base font-medium  leading-normal">
            Terms of Service
          </span>
          <span className="text-[#8c8f98] text-base font-medium  leading-normal">
            {" "}
            and{" "}
          </span>
          <span className="text-[#1749fc] text-base font-medium  leading-normal">
            Privacy Policy
          </span>
          <span className="text-[#8c8f98] text-base font-medium  leading-normal">
            .
          </span>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger />
          <DialogContent className={cn("max-w-fit p-0 bg-transparent border-0")}>
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
            <SigninSuccess />
          </DialogContent>
        </Dialog>
    </AuthPage>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  user: state.auth.user,
});

export default connect(mapStateToProps, { login, refresh })(Signin);
