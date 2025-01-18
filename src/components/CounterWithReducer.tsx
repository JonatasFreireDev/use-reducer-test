"use client";
import Button from "@/othersComponents/Button";
import React, { useReducer } from "react";

const initialState = { count: 0 };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Contador com useReducer</h2>
      <p>Valor: {state.count}</p>
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
