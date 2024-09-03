import React from "react";
import FormCard from "../components/FormCard";



function AdditionalInformation({ dataContext }) {
  return (
    <FormCard
      title="Additional Information"
      questions={dataContext.data["additionalInformation"]}
      dataContext={dataContext}
      tag="additionalInformation"
    />
  );
}

export default AdditionalInformation;
