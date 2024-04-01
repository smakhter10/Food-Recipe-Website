import React from "react";

const Heading = ({heading}) => {
  return (
    <div className="flex items-center justify-center my-20">
      <div className="w-24 md:w-[660px] h-1 bg-black"></div>
      <h1 className="text-2xl px-5 font-pacifico">{heading}</h1>
      <div className="w-24 md:w-[40%] h-1 bg-black"></div>
    </div>
  );
};

export default Heading;
