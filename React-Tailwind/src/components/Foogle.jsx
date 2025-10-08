import FoogleBody from "./FoogleBody";
import FoogleFooter from "./FoogleFooter";
import FoogleHeader from "./FoogleHeader";

const Foogle = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <FoogleHeader />
        <FoogleBody />
        <FoogleFooter />
      </div>
    </>
  );
};

export default Foogle;
