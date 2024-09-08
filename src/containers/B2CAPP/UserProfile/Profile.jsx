import React from "react";
import InfoField from "../components/InfoField";
import SubmitButton from "../components/SubmitButton";

const Profile = ({ dataContext }) => {
  const personalInfo = dataContext.data["personalInformation"];
  return (
    <section className="flex flex-col p-6 rounded-lg border border-violet-200 border-solid w-full text-gray-950 max-md:px-5">
      <header className="flex flex-col w-full max-md:max-w-full">
        <h2 className="text-base font-semibold tracking-tight max-md:max-w-full">
          Profile
        </h2>
      </header>
      <div className="flex flex-col mt-5 w-full text-base font-medium max-w-[812px] max-md:max-w-full">
        {personalInfo.map((info, index) => (
          <InfoField
            key={index}
            label={info.question}
            value={info.answer}
            editable={info.editable}
            id={info.id}
            dataContext={dataContext}
            tag="personalInformation"
          />
        ))}
        <SubmitButton label="Update Profile" className="w-[200px] mt-10 "/>
      </div>
    </section>
  );
};

export default Profile;
