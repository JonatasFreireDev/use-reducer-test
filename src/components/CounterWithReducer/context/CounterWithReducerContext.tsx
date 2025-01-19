"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useReducer } from "react";

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
export const CounterWithReducerContext = createContext<any>();

// Provedor do contexto
export const CounterWithReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterWithReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterWithReducerContext.Provider>
  );
};

export const useCounterWithReducer = () => {
  const context = useContext(CounterWithReducerContext);

  if (!context) {
    throw new Error(
      "useCounter deve ser usado dentro de um CounterWithReducerProvider"
    );
  }

  return context;
};
