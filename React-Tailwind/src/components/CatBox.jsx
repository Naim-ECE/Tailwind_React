import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import Carousel2 from "./Carousel2";
const CatBox = () => {
  const CATS = [
    {
      name: "Winnifred",
      age: 10,
      breed: "Scottish Fold",
      location: "Queens, NY",
      imageUrl: img1,
    },
    {
      name: "Abby",
      age: 4,
      breed: "Abyssinian",
      location: "Charleston, WV",
      imageUrl: img2,
    },
    {
      name: "Simon",
      age: 2,
      breed: "Siamese",
      location: "Seattle, WA",
      imageUrl: img3,
    },
    {
      name: "Marcus",
      age: 5,
      breed: "Maine Coon",
      location: "Bar Harbor, ME",
      imageUrl: img4,
    },
    {
      name: "Pu",
      age: 3,
      breed: "Deshi",
      location: "Naogaon, BD",
      imageUrl: img5,
    },
  ];
  return (
    <>
      <Carousel2 cat={CATS} />
    </>
  );
};

export default CatBox;
