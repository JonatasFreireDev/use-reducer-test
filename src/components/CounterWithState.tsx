"use client";
import React from "react";
import Button from "./base/Button";
import { Counter } from "./base/Counter";
import { useCounter } from "@/context/Counter";

const CounterWithState = () => {
  const { count, setCount } = useCounter();

  return (
    <div>
      <h2>Contador com useState</h2>

      <Counter counter={count} />
      <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
      <Button onClick={() => setCount(count - 1)}>Decrementar</Button>
    </div>
  );
};

export default CounterWithState;
