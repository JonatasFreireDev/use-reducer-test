"use client";
import React from "react";
import Button from "../base/Button";
import { Counter } from "../base/Counter";
import { useCounterWithReducerHandlers } from "./hooks/useCounterWithReducerHandlers";

const CounterWithReducer = () => {
  const {
    state,
    handleDecrement1,
    handleIncrement1,
    handleDecrement2,
    handleIncrement2,
  } = useCounterWithReducerHandlers();

  return (
    <div>
      <h2>Contador com useReducer</h2>

      <Counter counter={state.count1} />
      <Button onClick={handleIncrement1}>Incrementar</Button>
      <Button onClick={handleDecrement1}>Decrementar</Button>

      <Counter counter={state.count2} />
      <Button onClick={handleIncrement2}>Incrementar</Button>
      <Button onClick={handleDecrement2}>Decrementar</Button>
    </div>
  );
};

export default CounterWithReducer;
