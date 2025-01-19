"use client";
import React from "react";
import Button from "../base/Button";
import { Counter } from "../base/Counter";
import { useCounterWithStateHandlers } from "./hooks/useCounterWithStateHandlers";

const CounterWithState = () => {
  const { count, handleDecrement, handleIncrement } =
    useCounterWithStateHandlers();

  return (
    <div>
      <h2>Contador com useState</h2>

      <Counter counter={count} />
      <Button onClick={handleIncrement}>Incrementar</Button>
      <Button onClick={handleDecrement}>Decrementar</Button>
    </div>
  );
};

export default CounterWithState;
