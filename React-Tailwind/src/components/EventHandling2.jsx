import { useState } from "react";
import { ImHappy2 } from "react-icons/im";
import { IoIosIceCream } from "react-icons/io";

const EventHandling2 = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [toggleColor, SetToggleColor] = useState(true);
  const [showIcon2, setShowIcon2] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-cyan-100 p-7 m-4 rounded-lg flex flex-col items-center">
          {showIcon && (
            <ImHappy2 className="mb-3 text-[1.3rem] text-cyan-700"></ImHappy2>
          )}
          <button
            className="bg-green-500 p-2 text-white rounded-full cursor-pointer hover:bg-green-600 active:bg-green-700"
            onClick={() => setShowIcon(!showIcon)}
          >
            click me
          </button>
        </div>
        <div className="bg-cyan-100 p-7 m-4 rounded-lg">
          <button
            className={`p-2 text-white rounded-full cursor-pointer ${
              toggleColor
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
            onClick={() => SetToggleColor(!toggleColor)}
          >
            click me
          </button>
        </div>
        <div className="bg-cyan-100 p-7 m-4 rounded-lg flex flex-col items-center">
          {showIcon2 ? (
            <IoIosIceCream className="mb-3 text-[1.7rem] text-cyan-700"></IoIosIceCream>
          ) : null}
          <button
            className="bg-violet-500 p-2 text-white rounded-full cursor-pointer hover:bg-violet-600 active:bg-violet-700"
            onClick={() => setShowIcon2(!showIcon2)}
          >
            click me
          </button>
        </div>
      </div>
    </>
  );
};

export default EventHandling2;
