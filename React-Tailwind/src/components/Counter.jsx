import { useState } from "react";

const Counter = () => {
  const [initialValue, setValue] = useState(0);
  return (
    <>
      <div className="h-screen flex justify-center items-center text-4xl">
        <button
          className="bg-red-400 text-red-100 hover:bg-red-500 active:bg-red-600 cursor-pointer rounded-lg p-[0.5rem] pl-3 pr-3"
          onClick={() => setValue(initialValue - 1)}
        >
          -
        </button>
        <p className="m-9 rounded-lg w-13 text-center">{initialValue}</p>
        <button
          className="bg-green-400 text-green-100 hover:bg-green-500 active:bg-green-600 cursor-pointer p-[0.5rem] pl-3 pr-3 rounded-lg"
          onClick={() => setValue(initialValue + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
