"use client";
import React from "react";
import Button from "../base/Button";
import { Counter } from "../base/Counter";
import { useCounterWithReducer } from "./context/CounterWithReducerContext";

const CounterWithReducer = () => {
  const { state, handlers } = useCounterWithReducer();

  return (
    <div>
      <h2>Contador com useReducer</h2>

      <Counter counter={state.count1} />
      <Button onClick={handlers.handleIncrement1}>Incrementar</Button>
      <Button onClick={handlers.handleDecrement1}>Decrementar</Button>

      <Counter counter={state.count2} />
      <Button onClick={handlers.handleIncrement2}>Incrementar</Button>
      <Button onClick={handlers.handleDecrement2}>Decrementar</Button>
    </div>
  );
};

export default CounterWithReducer;
