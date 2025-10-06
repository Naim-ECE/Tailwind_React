import Cat from "./Cat";

const FlexCat = () => {
  return (
    <>
      <div className="flex h-60 border-2 border-green-400 p-2 m-4 justify-center">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex h-60 border-2 border-green-400 p-2 m-4 justify-between">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex h-60 border-2 border-green-400 p-2 m-4 justify-center items-center">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex h-60 border-2 border-green-400 p-2 m-4 justify-evenly items-end">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex h-60 border-2 border-green-400 p-2 m-4 justify-between items-end">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex h-60 border-2 border-green-400 p-2 m-4 justify-between items-center">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex flex-col h-120 border-2 border-red-500 p-2 m-4 justify-evenly items-end">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex flex-col h-120 border-2 border-red-500 p-2 m-4 justify-between items-center">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex flex-col h-120 border-2 border-red-500 p-2 m-4 justify-end items-center">
        <Cat />
        <Cat />
        <Cat />
      </div>
    </>
  );
};

export default FlexCat;
