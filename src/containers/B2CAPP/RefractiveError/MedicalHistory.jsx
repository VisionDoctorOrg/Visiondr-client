import React from "react";
import FormCard from "../components/FormCard";


function MedicalHistory({ dataContext }) {
  return (
    <FormCard
      title="Medical History"
      questions={dataContext.data["medicalHistory"]}
      dataContext={dataContext}
      tag="medicalHistory"
    />
  );
}

export default MedicalHistory;
