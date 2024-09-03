import React from "react";
import FormCard from "./FormCard";



function LifestyleAndVisualDemands({ dataContext }) {
  return (
    <FormCard
      title="Lifestyle and Visual Demands"
      questions={dataContext.data["lifestyleVisualDemands"]}
      dataContext={dataContext}
      tag="lifestyleVisualDemands"
    />
  );
}

export default LifestyleAndVisualDemands;
