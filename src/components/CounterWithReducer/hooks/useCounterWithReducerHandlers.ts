import { useCallback } from "react";
import { useCounterWithReducer } from "../context/CounterWithReducerContext";

export const useCounterWithReducerHandlers = () => {
  const { state, dispatch } = useCounterWithReducer();

  const handleIncrement1 = useCallback(() => {
    dispatch({ type: "increment1" });
  }, [dispatch]);

  const handleDecrement1 = useCallback(() => {
    dispatch({ type: "decrement1" });
  }, [dispatch]);

  const handleIncrement2 = useCallback(() => {
    dispatch({ type: "increment2" });
  }, [dispatch]);

  const handleDecrement2 = useCallback(() => {
    dispatch({ type: "decrement2" });
  }, [dispatch]);

  return {
    state,
    handleIncrement1,
    handleDecrement1,
    handleIncrement2,
    handleDecrement2,
  };
};
