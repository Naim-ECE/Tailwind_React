import { IoPerson } from "react-icons/io5";
const FoogleHeader = () => {
  return (
    <>
      <div className="bg-orange-200 p-6 flex justify-between text-orange-700 text-lg">
        <div className="flex">
          <p className="ml-4 mr-4 hover:text-orange-900 cursor-pointer">About</p>
          <p className="ml-4 mr-4 hover:text-orange-900 cursor-pointer">Store</p>
        </div>
        <div className="flex">
          <p className="ml-4 mr-4 hover:text-orange-900 cursor-pointer">Preferences</p>
          <IoPerson className="mr-8 mt-1 text-xl hover:text-orange-900 cursor-pointer"></IoPerson>
        </div>
      </div>
    </>
  );
};

export default FoogleHeader;
