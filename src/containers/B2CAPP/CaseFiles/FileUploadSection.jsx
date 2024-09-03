import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DropZone from "./DropZone";
import { DataContext } from "./DataContext";

function FileUploadSection() {
  const dataContext = useContext(DataContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="flex flex-col mt-10 w-full">
      <h2 className="font-semibold tracking-tight  text-gray-950 max-md:max-w-full">
        Snapshot or video of eye Condition
      </h2>
      <div className="flex flex-col justify-center p-6 mt-3 w-full font-medium border border-violet-200 border-solid max-md:px-5 max-md:max-w-full">
        <label htmlFor="file-upload" className=" text-gray-950">
          Take a snapshot or video of the affected eye.
        </label>
        <div className="flex gap-4 items-center self-start mt-3 text-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger>
              <div className="flex flex-col justify-center self-stretch p-6 px-3 my-auto text-gray-700 rounded border border-violet-200 border-solid min-h-[72px] w-[200px] max-md:px-5">
                <div className="flex md:gap-6 md:pl-2 gap-4 items-center">
                  <span className="self-stretch my-auto ">
                    {dataContext.data["uploadedFile"]
                      ? "File Uploaded"
                      : "Upload File"}
                  </span>

                  <div className="object-contain shrink-0 my-auto w-6 aspect-square">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group">
                        <path
                          id="Vector"
                          d="M12.4999 12.586L16.7429 16.828L15.3279 18.243L13.4999 16.415V22H11.4999V16.413L9.67189 18.243L8.25689 16.828L12.4999 12.586ZM12.4999 2C14.2169 2.00008 15.874 2.63111 17.1561 3.77312C18.4382 4.91512 19.256 6.48846 19.4539 8.194C20.6982 8.53332 21.7836 9.2991 22.5206 10.3575C23.2575 11.416 23.599 12.6997 23.4855 13.9844C23.372 15.2691 22.8106 16.473 21.8995 17.3858C20.9883 18.2986 19.7854 18.8622 18.5009 18.978V16.964C18.9611 16.8983 19.4035 16.7416 19.8025 16.503C20.2014 16.2644 20.5488 15.9487 20.8245 15.5744C21.1001 15.2001 21.2984 14.7746 21.4078 14.3228C21.5172 13.8711 21.5355 13.402 21.4616 12.9431C21.3878 12.4841 21.2232 12.0445 20.9776 11.6498C20.732 11.2552 20.4102 10.9134 20.0311 10.6445C19.652 10.3755 19.2231 10.1848 18.7694 10.0834C18.3158 9.98203 17.8465 9.97203 17.3889 10.054C17.5455 9.32489 17.537 8.56997 17.3641 7.84455C17.1912 7.11913 16.8582 6.44158 16.3895 5.86153C15.9208 5.28147 15.3283 4.81361 14.6554 4.49219C13.9824 4.17078 13.2461 4.00397 12.5004 4.00397C11.7546 4.00397 11.0183 4.17078 10.3454 4.49219C9.6725 4.81361 9.07999 5.28147 8.6113 5.86153C8.14261 6.44158 7.8096 7.11913 7.63668 7.84455C7.46375 8.56997 7.45528 9.32489 7.61189 10.054C6.69955 9.88267 5.75651 10.0808 4.99024 10.6048C4.22396 11.1287 3.69722 11.9357 3.52589 12.848C3.35456 13.7603 3.55268 14.7034 4.07666 15.4697C4.60063 16.2359 5.40755 16.7627 6.31989 16.934L6.49989 16.964V18.978C5.21534 18.8623 4.0123 18.2989 3.10103 17.3862C2.18976 16.4735 1.62822 15.2696 1.51457 13.9848C1.40092 12.7001 1.74237 11.4163 2.47926 10.3578C3.21615 9.29926 4.3016 8.53339 5.54589 8.194C5.7436 6.48838 6.5613 4.91491 7.84347 3.77287C9.12565 2.63082 10.7829 1.99986 12.4999 2Z"
                          fill="#1749FC"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="">
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
              <div className="pt-5"></div>
              <DropZone dataContext={dataContext} onClose={closeDialog}/>
            </DialogContent>
          </Dialog>
          <input
            type="file"
            id="file-upload"
            className="sr-only"
            aria-label="Upload file"
          />
          <span className="self-stretch my-auto text-rose-500 cursor-pointer" onClick={openDialog}>
            {dataContext.data["uploadedFile"] ? "Change" : "No File Chosen"}
          </span>
        </div>
          {dataContext.data["uploadedFile"] ? (
            <div class="">
              <span className="text-[#404453] text-sm font-normal leading-[16.80px]">
              {dataContext.data["uploadedFile"].name}
              </span>
              <span className="text-[#8c8f98] text-sm font-normal font-['Plus Jakarta Sans'] leading-[16.80px]">
                {" "}
                - {dataContext.data["uploadedFile"].size /1024} kb
              </span>
            </div>
          ) : (
            ""
          )}
      </div>
    </div>
  );
}

export default FileUploadSection;
