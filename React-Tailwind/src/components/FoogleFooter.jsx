import { FaHeart } from "react-icons/fa";
const FoogleFooter = () => {
  return (
    <>
      <div className="flex justify-between p-3 bg-gray-200 text-gray-500">
        <p className="ml-4">(this is not a real site)</p>
        <p className="flex">
          Made with <FaHeart className="mt-1 mx-1 text-red-500"></FaHeart> and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="cursor-pointer text-blue-600 mx-1 underline"
          >
            Tailwind CSS
          </a>
        </p>
        <p className="mr-4">Created by Naim</p>
      </div>
    </>
  );
};

export default FoogleFooter;
