import { useState } from "react";

const EventHandling = () => {
  const [initialValue, setValue] = useState("Hello World");

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <p className="m-4 text-3xl">{initialValue}</p>
        <div className="flex">
          <button
            className="m-4 text-lg bg-red-400 p-2 rounded-lg px-4 text-white hover:bg-red-500 cursor-pointer active:bg-red-600"
            onClick={() => setValue("Yo")}
          >
            One
          </button>
          <button
            className="m-4 text-lg bg-violet-400 p-2 rounded-lg px-4 text-white hover:bg-violet-500 cursor-pointer active:bg-violet-600"
            onClick={() => setValue("Hey")}
          >
            Two
          </button>
          <button
            className="m-4 text-lg bg-yellow-500 p-2 rounded-lg px-4 text-white hover:bg-yellow-600 cursor-pointer active:bg-yellow-700"
            onClick={() => setValue("End")}
          >
            Three
          </button>
        </div>
      </div>
    </>
  );
};

export default EventHandling;
