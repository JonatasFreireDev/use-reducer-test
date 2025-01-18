"use client";
import React from "react";
import { useCounter } from "@/context/Counter";
import Button from "./base/Button";
import { Counter } from "./base/Counter";

const CounterWithReducer = () => {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <h2>Contador com useReducer e Context</h2>

      <Counter counter={state.count} />
      <Button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </Button>
    </div>
  );
};

export default CounterWithReducer;
