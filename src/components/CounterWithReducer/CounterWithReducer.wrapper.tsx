"use client";
import React from "react";
import { CounterWithReducerProvider } from "./context/CounterWithReducerContext";
import CounterWithReducer from "./CounterWithReducer";

export const CounterWithReducerWrapper = () => (
  <CounterWithReducerProvider>
    <CounterWithReducer />
  </CounterWithReducerProvider>
);
