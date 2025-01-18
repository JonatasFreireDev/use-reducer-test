import CounterWithReducer from "@/components/CounterWithReducer";
import CounterWithState from "@/components/CounterWithState";
import { CounterProvider } from "@/context/Counter";

export default function Home() {
  return (
    <CounterProvider>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Componentes de Contador</h1>

        <CounterWithState />
        <CounterWithReducer />
      </div>
    </CounterProvider>
  );
}
