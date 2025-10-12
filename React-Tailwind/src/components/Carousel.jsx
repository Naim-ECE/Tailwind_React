import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import { useState } from "react";

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(2);
  const IMAGE_SRC = [img1, img2, img3, img4, img5];

  return (
    <>
      <p className="text-3xl text-center m-4">CAT {imgIndex + 1}</p>
      <div className="flex justify-center items-center">
        <div
          className="bg-orange-400 p-2 rounded-full hover:bg-orange-500 hover:text-white active:bg-orange-600 active:text-white cursor-pointer"
          onClick={() => {
            if (imgIndex > 0) {
              setImgIndex(imgIndex - 1);
            }
          }}
        >
          <FaAngleDoubleLeft></FaAngleDoubleLeft>
        </div>
        <img
          className="mr-8 ml-8 h-[19rem] w-[13rem] object-cover"
          src={IMAGE_SRC[imgIndex]}
        />
        <div
          className="bg-orange-400 p-2 rounded-full hover:bg-orange-500 hover:text-white active:bg-orange-600 active:text-white cursor-pointer"
          onClick={() => {
            if (imgIndex < IMAGE_SRC.length - 1) {
              setImgIndex(imgIndex + 1);
            }
          }}
        >
          <FaAngleDoubleRight className=""></FaAngleDoubleRight>
        </div>
      </div>
    </>
  );
};

export default Carousel;
