import React from "react";
import FormCard from "../components/FormCard";

function MedicalHistory({ dataContext }) {
  return (
    <FormCard
      title="Eye Health History"
      questions={dataContext.data["eyeHealthHistory"]}
      dataContext={dataContext}
      tag="eyeHealthHistory"
    />
  );
}

export default MedicalHistory;
