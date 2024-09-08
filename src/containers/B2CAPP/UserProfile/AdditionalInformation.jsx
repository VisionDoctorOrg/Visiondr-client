import React from "react";
import SubmitButton from "../components/SubmitButton";
import FormCard from "../components/FormCard";

const AdditionalInformation = ({ dataContext }) => {
  return (
    <FormCard
      title="Additional Information"
      questions={dataContext.data["additionalInformation"]}
      dataContext={dataContext}
      tag="additionalInformation"
    >
      <SubmitButton label="Save Changes" className="w-[200px] mt-10 " />
    </FormCard>
  );
};

export default AdditionalInformation;
