import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const JoinTheWaitlistMobile = () => {
  return (
    <form action="" className="flex w-full flex-wrap justify-center gap-5">
      <label
        htmlFor="UserEmail3"
        className=" relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 w-full"
      >
        <input
          type="email"
          id="UserEmail3"
          placeholder="Email"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Enter your email
        </span>
      </label>
      <Button className={cn("hover:border-white border-2 border-primary")}>
        Submit <MdArrowOutward className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}

export default JoinTheWaitlistMobile