import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const SelectPage = ({placeholder}) => {
    // const [placeholder, setPlaceholder] = useState(placeholder);
  return (
    <header className="flex flex-col max-w-full text-base font-medium text-gray-950 w-[200px]">
          <div className="flex gap-10 justify-between items-center w-full">
            <Select className="text-gray-950 text-base font-medium leading-normal">
              <SelectTrigger className="w-[200px] h-6 border-r-0 border-0 pl-0 outline-none focus:outline-none focus:ring-0 focus:border-0 ">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className={cn("flex flex-col gap-3 ")}>
                <div className="flex flex-col gap-3 text-left items-start pl-2 py-3 text-gray-950 text-base font-medium leading-normal">
                  <button  className="w-full flex justify-start">
                    <NavLink to="/app/articles/" className="w-full text-left">Recently Added</NavLink>
                  </button>
                  <button className="w-full flex justify-start">
                    <NavLink to="/app/articles/allArticles" className="w-full text-left">
                      All Articles
                    </NavLink>
                  </button>

                  <button className="w-full flex justify-start">
                    <NavLink to="/app/articles/history" className="w-full text-left">History</NavLink>
                  </button>
                </div>
              </SelectContent>
            </Select>
          </div>
        </header>
  )
}

export default SelectPage