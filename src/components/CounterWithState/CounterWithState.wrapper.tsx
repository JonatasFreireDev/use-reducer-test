"use client";
import React from "react";
import { CounterWithStateProvider } from "./context/CounterWithStateContext";
import CounterWithState from "./CounterWithState";

export const CounterWithStateWrapper = () => (
  <CounterWithStateProvider>
    <CounterWithState />
  </CounterWithStateProvider>
);
