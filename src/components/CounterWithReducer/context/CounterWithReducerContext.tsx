"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

// Estado inicial
const initialState = { count1: 0, count2: 0 };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment1":
      return { ...state, count1: state.count1 + 1 };
    case "decrement1":
      return { ...state, count1: state.count1 - 1 };
    case "increment2":
      return { ...state, count2: state.count2 + 1 };
    case "decrement2":
      return { ...state, count2: state.count2 - 1 };
    default:
      throw new Error();
  }
}

// Criando o contexto
export const CounterWithReducerContext = createContext<any>();

// Provedor do contexto
export const CounterWithReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement1 = useCallback(() => {
    dispatch({ type: "increment1" });
  }, [dispatch]);

  const handleDecrement1 = useCallback(() => {
    dispatch({ type: "decrement1" });
  }, [dispatch]);

  const handleIncrement2 = useCallback(() => {
    dispatch({ type: "increment2" });
  }, [dispatch]);

  const handleDecrement2 = useCallback(() => {
    dispatch({ type: "decrement2" });
  }, [dispatch]);

  const handlers = {
    handleIncrement1,
    handleDecrement1,
    handleIncrement2,
    handleDecrement2,
  };

  return (
    <CounterWithReducerContext.Provider value={{ state, handlers }}>
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
