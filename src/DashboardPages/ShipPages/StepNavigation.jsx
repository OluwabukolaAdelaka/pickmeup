import React, { useContext } from "react";
import { MainContext } from "../../components/ShipContext";
import Step from "./Step";

function StepNavigation({ labelArray, updateStep }) {
  const { currentStep } = useContext(MainContext);

  return (
    <div className="d-none d-md-flex stepWrapper">
      {labelArray.map((item, index) => (
        <Step
          key={index + 1}
          label={item}
          index={index}
          selected={currentStep === index + 1}
          updateStep={updateStep}
        />
      ))}
    </div>
  );
}

export default StepNavigation;
