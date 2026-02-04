import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let interval: number = 0;
    console.log(active);
    if (active) {
      interval = setInterval(() => {
        setCounter((count) => count + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="flex items-center justify-center">
      <p className="text-4xl text-white m-5 p-5">Counter: {counter}</p>

      <button
        className={
          active
            ? "bg-red-700 hover:bg-red-900 p-5 m-5 rounded-4xl w-45 text-white"
            : "bg-green-600 hover:bg-green-700 p-5 m-5 rounded-4xl w-45 text-white"
        }
        onClick={() => setActive(!active)}
      >
        {active ? "Pausar" : "Continuar"}
      </button>
    </div>
  );
};

export default Counter;
