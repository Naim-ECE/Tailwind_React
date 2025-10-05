const colors = () => {
  return (
    <>
      <center>
        <h1 className="text-red-700 text-[7rem]">Hello World!</h1>
        <div>
          <p className="text-rose-300 bg-red-700 border-x-4 border-black">
            one
          </p>
          <p className="text-slate-300 bg-amber-800 border-l-4 border-black">
            two
          </p>
          <p className="text-yellow-300 bg-red-800 border-r-4 border-black">
            three
          </p>
          <p className="text-black bg-pink-300 border-y-2 border-x-4 border-black">
            four
          </p>
          <p className="text-2xl text-emerald-300 bg-blue-500">five</p>
          <p className="text-xl text-purple-500 border-4 border-sky-500">six</p>
        </div>
      </center>
    </>
  );
};

export default colors;
