import { useEffect, useState } from "react";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import img1 from "../images/img1.jpg";

const Carousel2 = ({ cat }) => {
  // URL = "https://api.thecatapi.com/v1/breeds";
  const [imageIndex, setImageIndex] = useState(3);

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     const response = await fetch(URL);
  //     const img = await response.json();
  //     setImage(img);
  //     console.log(image);
  //   };
  //   fetchImage();
  // }, []);
  return (
    <>
      <div className="flex m-7 justify-center items-center">
        <div
          className="bg-violet-400 mr-9 p-2 rounded-lg text-white cursor-pointer hover:bg-violet-500 active:bg-violet-600"
          onClick={() => {
            if (imageIndex > 0) {
              setImageIndex(imageIndex - 1);
            }
          }}
        >
          <FaCaretLeft />
        </div>
        <div>
          <img
            src={cat[imageIndex].imageUrl}
            className="w-[17rem] h-[10rem] object-cover rounded-t-lg"
          />
          <div className="border border-slate-300 rounded-b-lg p-2">
            <div className="flex w-[13rem] justify-between">
              <p>Name</p>
              <p>{cat[imageIndex].name}</p>
            </div>
            <div className="flex w-[13rem] justify-between">
              <p>Age</p>
              <p>{cat[imageIndex].age}</p>
            </div>
            <div className="flex w-[13rem] justify-between">
              <p>Breed</p>
              <p>{cat[imageIndex].breed}</p>
            </div>
            <div className="flex w-[13rem] justify-between">
              <p>Location</p>
              <p>{cat[imageIndex].location}</p>
            </div>
          </div>
        </div>
        <div
          className="bg-violet-400 ml-9 p-2 rounded-lg text-white cursor-pointer hover:bg-violet-500 active:bg-violet-600"
          onClick={() => {
            if (imageIndex < 4) {
              setImageIndex(imageIndex + 1);
            }
          }}
        >
          <FaCaretRight />
        </div>
      </div>
    </>
  );
};

export default Carousel2;
