"use client";
import React, { useCallback } from "react";
import { useCounter } from "@/context/Counter";
import Button from "./base/Button";
import { Counter } from "./base/Counter";

const CounterWithReducer = () => {
  const { state, dispatch } = useCounter();

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, [dispatch]);

  return (
    <div>
      <h2>Contador com useReducer</h2>

      <Counter counter={state.count} />
      <Button onClick={handleIncrement}>Incrementar</Button>
      <Button onClick={handleDecrement}>Decrementar</Button>
    </div>
  );
};

export default CounterWithReducer;
