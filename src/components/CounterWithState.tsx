"use client";
import Button from "@/othersComponents/Button";
import React, { useState } from "react";

const CounterWithState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador com useState</h2>
      <p>Valor: {count}</p>

      <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
      <Button onClick={() => setCount(count - 1)}>Decrementar</Button>
    </div>
  );
};

export default CounterWithState;
