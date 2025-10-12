import { useState } from "react";
import clsx from "clsx";

const BigToggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div
        className={clsx(
          "h-screen flex justify-center items-center",
          toggle ? "bg-gray-700" : "bg-white"
        )}
      >
        <div className="flex flex-col border-1 border-gray-800">
          <button
            className={`${
              toggle ? "bg-gray-500" : "bg-white"
            } h-[1.75rem] w-[1.75rem] cursor-pointer`}
            onClick={() => setToggle(!toggle)}
          ></button>
          <button
            className={`${
              toggle ? "bg-white" : "bg-gray-500"
            } h-[1.75rem] w-[1.75rem] cursor-pointer`}
            onClick={() => setToggle(!toggle)}
          ></button>
        </div>
      </div>
    </>
  );
};

export default BigToggle;
