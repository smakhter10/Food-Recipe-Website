import React from "react";

const Hero = ({ image, para, head1, head2 }) => {
  return (
    <div className="md:mx-28 my-10 md:my-5 w-full md:w-auto md:h-[499px] bg-[rgb(227,241,255)] rounded-xl">
      <div className="flex flex-col md:flex-row items-center">
        <img src={image} className="w-auto md:h-[499px] rounded-lg" />
        <div className="p-10 ]">
          <h2 className="font-bold text-3xl font-pacifico">{head1}</h2>
          <h1 className="font-bold text-5xl font-pacifico">{head2}</h1>
          <p className="py-10 font-roboto font-normal md:font-medium">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
