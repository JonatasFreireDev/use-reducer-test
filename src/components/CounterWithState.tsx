"use client";
import React, { useCallback } from "react";
import Button from "./base/Button";
import { Counter } from "./base/Counter";
import { useCounter } from "@/context/Counter";

const CounterWithState = () => {
  const { count, setCount } = useCounter();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [setCount, count]);

  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [setCount, count]);

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
