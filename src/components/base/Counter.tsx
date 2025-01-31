"use client";
import { memo } from "react";

interface CounterProps {
  counter?: number;
}

export const Counter = memo(({ counter }: CounterProps) => {
  return <p>Valor: {counter}</p>;
});

Counter.displayName = "Counter";
