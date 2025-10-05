const decoration = () => {
  return (
    <>
      <div className="border-2 border-red-500 p-8 my-4">Hello</div>
      <div className="border-2 border-blue-500 px-2 m-4">Bye</div>
      <button className="text-lg text-blue-400 border-blue-500 rounded-md border-2 m-4 px-4">
        first
      </button>
      <button className="bg-blue-700 text-lg text-white rounded-sm m-4 px-8 py-2">
        second
      </button>
      <button className="bg-violet-100 text-lg text-violet-600 rounded-full m-4 px-8 py-2">
        third
      </button>
      <button className="bg-green-500 text-lg text-white rounded-sm m-4 px-8 py-2 hover:bg-green-600 active:bg-black cursor-pointer">
        fourth
      </button>
    </>
  );
};

export default decoration;
