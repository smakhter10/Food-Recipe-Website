import React from "react";
import {Link} from 'react-router-dom'

const Essentials = () => {
  const knives = "./images/knives.jpg";
  const spoons = "./images/spoons.jpg";
  const cups = "./images/cups.jpg";
  const board = "./images/board.jpg";

  return (
    <div className="w-full  md:h-[900px] md:px-28 ">
      <div className="grid grid-row-2 grid-flow-col gap-4 cursor-pointer">
        <div className="row-span-2 hover:scale-105 transition-all duration-300 ease-out">
          <img src={knives} className="md:h-[800px] " />
        </div>
        <div className="hover:scale-105 transition-all duration-300 ease-out">
          <img src={spoons} className="md:h-[390px]" />
        </div>
        <div className="hover:scale-105 transition-all duration-300 ease-out">
          <img src={board} className="md:h-[396px]" />
        </div>
        <div className="row-span-2 hover:scale-105 transition-all duration-300 ease-out">
          <img src={cups} className="md:h-[800px]" />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <button className="border-2 border-cyan-950 hover:border-[#FF642F] hover:text-[#FF642F] transition-all duration-300  w-36 h-12 rounded-2xl font-roboto font-semibold"><Link to='/cookingessentials'>Learn More</Link></button>
      </div>
    </div>
  );
};

export default Essentials;
