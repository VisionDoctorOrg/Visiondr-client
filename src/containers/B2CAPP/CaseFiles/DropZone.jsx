import React, { useState } from "react";
import ImageBox from "./ImageBox";
import TextSection from "./TextSection";
import { useToast } from "@/components/hooks/use-toast";
import SubmitButton from "../components/SubmitButton";

function DropZone({ dataContext, onClose }) {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const { toast } = useToast();

  const isValidFile = (file) => {
    const validFormats = ["image/jpeg", "image/jpg", "image/png"];
    return file.size <= 2 * 1024 * 1024 && validFormats.includes(file.type);
  };

  const handleFile = (file) => {
    if (isValidFile(file)) {
      setIsUploading(true);
      setFileName(file.name);
      setFile(file);
      setTimeout(() => setIsUploading(false), 2000);
      console.log(dataContext.data["uploadedFile"]);
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

  const updateContext = () => {
    dataContext.setData({ ...dataContext.data, uploadedFile: file });
    onClose();
  };

  return (
    <>
      <section
        className="flex flex-col justify-center py-10 rounded-lg border border-dashed border-neutral-400"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        <ImageBox isUploading={isUploading} />
        <TextSection fileName={fileName} />
      </section>
      <div className="w-full">
        {file ? (
          <SubmitButton
            onClick={updateContext}
            label="Upload"
            className="mr-0 ml-auto"
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default DropZone;
