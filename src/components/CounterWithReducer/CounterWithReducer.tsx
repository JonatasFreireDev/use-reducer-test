"use client";
import React from "react";
import Button from "../base/Button";
import { Counter } from "../base/Counter";
import { useCounterWithReducerHandlers } from "./hooks/useCounterWithReducerHandlers";

const CounterWithReducer = () => {
  const { state, handleDecrement, handleIncrement } =
    useCounterWithReducerHandlers();

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
