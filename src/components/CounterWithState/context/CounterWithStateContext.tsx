"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState } from "react";

// Criando o contexto
export const CounterWithStateContext = createContext<any>();

// Provedor do contexto
export const CounterWithStateProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterWithStateContext.Provider value={{ count, setCount }}>
      {children}
    </CounterWithStateContext.Provider>
  );
};

export const useCounterWithState = () => {
  const context = useContext(CounterWithStateContext);

  if (!context) {
    throw new Error(
      "useCounter deve ser usado dentro de um CounterWithStateProvider"
    );
  }

  return context;
};
