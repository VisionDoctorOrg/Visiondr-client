import React, { useState } from "react";
import { useToast } from "@/components/hooks/use-toast";

function UserInfo({ imageSrc, name, age, plan, dataContext }) {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const { toast } = useToast();
  const [imgSrc, setImgSrc] = useState(imageSrc);

  const isValidFile = (file) => {
    const validFormats = ["image/jpeg", "image/jpg", "image/png"];
    return file.size <= 2 * 1024 * 1024 && validFormats.includes(file.type);
  };

  const handleFile = (file) => {
    if (isValidFile(file)) {
      setIsUploading(true);
      setFileName(file.name);
      setFile(file);

      updateContext(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImgSrc(e.target.result); // Set the image src to the file content
      };
      reader.readAsDataURL(file); // Read the image file as a data URL
    } else {
      toast({
        title: "Invalid file type or size",
        description: "Allowed: JPG, JPEG, PNG. Max size: 2MB.",
      });
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (event) => event.preventDefault();

  const handleClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      handleFile(file);
    };
    fileInput.click();
  };

  const updateContext = (file) => {
    dataContext.setData({ ...dataContext.data, uploadedFile: file });
  };
  return (
    <section className="flex gap-6 items-end min-w-[240px]">
      <div className="relative">
        <img
          className="md:w-[200px] md:h-[200px] w-[100px] rounded-full border-4 object-cover border-[#1749fc]"
          src={imgSrc}
        />
        <div
          class="md:w-12 md:h-12 w-6 h-6 right-0 md:bottom-[15px] bottom-[5px] absolute cursor-pointer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}
        >
          <div class="md:w-12 md:h-12 w-6 h-6 p-1 left-0 top-0 absolute bg-[#1749fc] rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M13.1033 6.66667L10.4367 9.33333H5.33268V25.3333H26.666V9.33333H21.562L18.8953 6.66667H13.1033ZM11.9993 4H19.9993L22.666 6.66667H27.9993C28.353 6.66667 28.6921 6.80714 28.9422 7.05719C29.1922 7.30724 29.3327 7.64638 29.3327 8V26.6667C29.3327 27.0203 29.1922 27.3594 28.9422 27.6095C28.6921 27.8595 28.353 28 27.9993 28H3.99935C3.64573 28 3.30659 27.8595 3.05654 27.6095C2.80649 27.3594 2.66602 27.0203 2.66602 26.6667V8C2.66602 7.64638 2.80649 7.30724 3.05654 7.05719C3.30659 6.80714 3.64573 6.66667 3.99935 6.66667H9.33268L11.9993 4ZM15.9993 24C14.0544 24 12.1892 23.2274 10.8139 21.8521C9.43863 20.4769 8.66602 18.6116 8.66602 16.6667C8.66602 14.7217 9.43863 12.8565 10.8139 11.4812C12.1892 10.1059 14.0544 9.33333 15.9993 9.33333C17.9443 9.33333 19.8095 10.1059 21.1848 11.4812C22.5601 12.8565 23.3327 14.7217 23.3327 16.6667C23.3327 18.6116 22.5601 20.4769 21.1848 21.8521C19.8095 23.2274 17.9443 24 15.9993 24ZM15.9993 21.3333C17.237 21.3333 18.424 20.8417 19.2992 19.9665C20.1744 19.0913 20.666 17.9043 20.666 16.6667C20.666 15.429 20.1744 14.242 19.2992 13.3668C18.424 12.4917 17.237 12 15.9993 12C14.7617 12 13.5747 12.4917 12.6995 13.3668C11.8243 14.242 11.3327 15.429 11.3327 16.6667C11.3327 17.9043 11.8243 19.0913 12.6995 19.9665C13.5747 20.8417 14.7617 21.3333 15.9993 21.3333V21.3333Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[123px]">
        <h2 className="text-2xl font-semibold leading-tight opacity-[var(--sds-size-stroke-border)] text-gray-950">
          {name}
        </h2>
        <p className="mt-3 text-base font-medium opacity-[var(--sds-size-stroke-border)] text-neutral-400">
          {age} years | {plan}
        </p>
      </div>
    </section>
  );
}

export default UserInfo;
