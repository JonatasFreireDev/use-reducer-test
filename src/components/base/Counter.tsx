interface CounterProps {
  counter?: number;
}

export const Counter = ({ counter }: CounterProps) => {
  return <p>Valor: {counter}</p>;
};
