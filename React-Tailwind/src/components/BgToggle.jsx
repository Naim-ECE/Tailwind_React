import { useState } from "react";

const BigToggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div
        className={`h-screen ${
          toggle ? "bg-gray-700" : "bg-white"
        } flex justify-center items-center`}
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
