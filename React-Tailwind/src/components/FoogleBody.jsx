import { IoSearch } from "react-icons/io5";
const FoogleBody = () => {
  return (
    <>
      <div className="bg-orange-100 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-[5rem] m-2 text-orange-400 font-semibold">Foogle</h1>
        <div className="flex w-[30rem] bg-orange-200 rounded-full p-4 mt-2">
          <IoSearch className="text-[1.9rem] ml-4 mr-4 text-orange-400"></IoSearch>
          <input
            type="text"
            placeholder="Search Foogle or type a URL"
            className="w-full h-full text-lg focus:outline-none text-orange-700"
          />
        </div>
        <div className="m-2 flex mt-4">
          <button className="mr-6 bg-gray-300 text-violet-800 p-2 rounded-md mt-3 cursor-pointer hover:bg-gray-400 hover:text-violet-900">Foogle Search</button>
          <button className="ml-6 bg-gray-300 text-violet-800 p-2 rounded-md mt-3 cursor-pointer hover:bg-gray-400 hover:text-violet-900">Image Search</button>
        </div>
      </div>
    </>
  );
};

export default FoogleBody;
