"use client";
import { memo } from "react";

interface CounterProps {
  counter?: number;
}

export const Counter = memo(({ counter }: CounterProps) => (
  <p>Valor: {counter}</p>
));

Counter.displayName = "Counter";
