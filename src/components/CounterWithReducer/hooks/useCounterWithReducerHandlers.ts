import { useCallback } from "react";
import { useCounterWithReducer } from "../context/CounterWithReducerContext";

export const useCounterWithReducerHandlers = () => {
  const { state, dispatch } = useCounterWithReducer();

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, [dispatch]);

  return {
    state,
    handleIncrement,
    handleDecrement,
  };
};
