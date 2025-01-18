"use client";
import Button from "@/othersComponents/Button";
import { useReducer, useState } from "react";

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

export default function Home() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Componentes de Contador</h1>

      <div>
        <h2>Contador com useState</h2>
        <p>Valor: {count}</p>

        <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
        <Button onClick={() => setCount(count - 1)}>Decrementar</Button>
      </div>

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
    </div>
  );
}
