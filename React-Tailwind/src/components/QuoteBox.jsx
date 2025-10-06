const QuoteBox = ({ quote1, quote2, quote3 }) => {
  return (
    <>
      <div className="flex p-2 m-2 flex-col justify-between items-center">
        <div className="m-7 flex flex-col items-center">
          <p className="bg-cyan-600 text-cyan-100 p-4 w-full rounded-t-lg">
            {quote1.text}
          </p>
          <div className="bg-slate-100 p-4 w-full flex flex-col items-center rounded-b-lg shadow-lg">
            <h4 className="text-cyan-600 text-2xl mb-2">{quote1.author}</h4>
            <p className="text-slate-400">{quote1.bio}</p>
          </div>
        </div>

        <div className="m-7 flex">
          <div className="p-4 w-[11rem] bg-blue-700 text-blue-100 rounded-l-lg shadow-xl">
            <h4 className="text-xl mb-3">{quote2.author}</h4>
            <p className="text-blue-300 text-sm">{quote2.bio}</p>
          </div>
          <div className="border-2 border-gray-300 w-[20rem] rounded-r-full flex items-center p-4 shadow-xl">
            <p>{quote2.text}</p>
          </div>
        </div>

        <div className="m-7">
          <p className="bg-rose-400 text-slate-100 p-6 rounded-t-lg rounded-r-lg">
            {quote3.text}
          </p>
          <div className="shadow-lg mb-2 p-4 w-50 bg-rose-200 rounded-b-lg border-rose-400 border-l-2 border-r-2 border-b-2">
            <h4 className="text-lg mb-2 text-rose-900">{quote3.author}</h4>
            <p className="mb-2 text-sm text-rose-500">{quote3.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteBox;
