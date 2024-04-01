import {useRef} from "react";
import ItemCards from "./ItemCards";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Categories = ({ data }) => {
  const elementRef = useRef(null);

  const slideRight = (element) => {
    element.scrollLeft += 200;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 200;
  };

  return (
    <div className="flex  items-center md:block">
      <div
        onClick={() => slideLeft(elementRef.current)}
        className="flex items-center justify-center bg-black opacity-70 h-10 w-10 rounded-full z-[100] md:hidden text-3xl absolute left-2 text-[#FF642F]"
      >
        <FaChevronLeft />
      </div>
      <div
        ref={elementRef}
        className="flex items-center overflow-x-auto scrollbar-hide scroll-smooth relative md:justify-center md:w-auto h-auto"
      >
        {data.map((item, index) => (
          <ItemCards category={item.category} image={item.image} />
        ))}
      </div>
      <div
        onClick={() => slideRight(elementRef.current)}
        className="flex items-center justify-center bg-black opacity-70 h-10 w-10 rounded-full z-[100] md:hidden text-3xl absolute right-2 text-[#FF642F]"
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Categories;
