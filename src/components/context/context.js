import React, { useState } from "react";

const Context = React.createContext();

export const ContextProvider = (props) => {
  const [currentStep, setStep] = useState(1);

  return (
    <Context.Provider value={{ currentStep, setStep }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
