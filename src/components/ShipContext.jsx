import React, { useState, createContext } from "react";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [values, setValues] = useState([]);
  const [finalValues, setFinalValues] = useState([]);

  function displaySummary() {
    setFinalValues((finalValues) => [...finalValues, values]);
    setValues("");
  }

  return (
    <MainContext.Provider
      value={{
        values,
        setValues,
        finalValues,
        setFinalValues,
        currentStep,
        setCurrentStep,
        displaySummary,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
