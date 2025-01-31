import { useCallback } from "react";
import { useCounterWithState } from "../context/CounterWithStateContext";

export const useCounterWithStateHandlers = () => {
  const { count, setCount } = useCounterWithState();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [setCount, count]);

  const handleDecrement = useCallback(() => {
    setCount(count - 1);
  }, [setCount, count]);

  return {
    count,
    handleIncrement,
    handleDecrement,
  };
};
