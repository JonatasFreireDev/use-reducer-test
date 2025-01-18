"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useReducer, useState } from "react";

// Estado inicial
const initialState = { count: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Criando o contexto
export const CounterContext = createContext<any>();

// Provedor do contexto
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ state, dispatch, count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounter deve ser usado dentro de um CounterProvider");
  }

  return context;
};
