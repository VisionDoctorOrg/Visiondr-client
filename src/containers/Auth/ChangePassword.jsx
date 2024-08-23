import React, { useEffect, useState } from "react";
import AuthPage from "./AuthPage";
import { MdArrowOutward } from "react-icons/md";
import { refresh, reset_password_confirm } from "@/actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { connect } from "react-redux";

const schema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Set the error on the confirmPassword field
  });

const ChangePassword = ({reset_password_confirm, refresh, user, error}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfrimPasswordVisible] =
    useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  function toggleConfirmPasswordVisibility() {
    setIsConfrimPasswordVisible((prevState) => !prevState);
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
      await reset_password_confirm(localStorage.getItem("access"), data.password, data.confirmPassword);
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
  return (
    <AuthPage>
      <div class="md:w-[400px] w-full h-[419px] flex-col justify-start items-start gap-[72px] inline-flex">
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
          <div class="text-center text-gray-950 text-base font-semibold font-['Plus Jakarta Sans'] leading-tight">
            VisionDR
          </div>
        </div>
        <form class="self-stretch h-[307px] flex-col justify-start items-center gap-6 flex" onSubmit={handleSubmit(onSubmit)} >
          <div class="self-stretch h-[43px] flex-col justify-start items-start gap-3 flex">
            <div class="self-stretch text-gray-950 text-4xl font-semibold font-['Plus Jakarta Sans'] leading-[43.20px]">
              New password
            </div>
          </div>
          <div class="flex-col justify-start items-end gap-6 flex w-full">
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
                  Enter new password
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
            </div>
            <div class="w-full">
              <label
                htmlFor="confirm-password"
                className=" relative block border-b-2 border-[#d2dbfe] bg-transparent pt-3 focus-within:border-blue-600 w-full"
              >
                <input
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  id="confirm-password"
                  placeholder="Confirm Password"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  {...register("confirmPassword")}
                  required
                />

                <span className="absolute start-0 top-1 text-base  -translate-y-3/4 text-[#8c8f98] font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Confirm password
                </span>
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                  onClick={toggleConfirmPasswordVisibility}
                  type="button"
                >
                  {isConfirmPasswordVisible ? (
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
        </form>
      </div>
    </AuthPage>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  user: state.auth.user,
});

export default connect(mapStateToProps, { reset_password_confirm, refresh })(
  ChangePassword
);
