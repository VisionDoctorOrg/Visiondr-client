import React, { useEffect, useState } from "react";
import AuthPage from "./AuthPage";
import { MdArrowOutward } from "react-icons/md";
import { refresh, reset_password_confirm } from "@/actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

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

  const { token } = useParams();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await reset_password_confirm(token, data.password, data.confirmPassword);
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
        <div class="h-10 py-1 items-center gap-2 inline-flex">
        <img src="/logo_blue_black.svg" alt="logo" className="h-10 w-[102px]" />
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
