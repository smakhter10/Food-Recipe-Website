import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center p-3">

      <div className="flex mt-10 items-center gap-5  h-auto md:w-[1400px] rounded-tl-3xl rounded-bl-3xl shadow-2xl">
        <div className="p-5 flex flex-col items-center col-span-2 bg-red-400 md:w-[800px] h-auto rounded-2xl gap-8 ">
          <h1 className="font-roboto text-3xl font-bold mt-6">About US</h1>
          <p className="font-pacifico text-xl  text-slate-800">
            Welcome to Family Kitchen, your ultimate destination for
            family-friendly recipes, cooking inspiration, and community
            connection! At Family Kitchen, we believe that cooking together as a
            family fosters bonds, creates lasting memories, and nourishes both
            body and soul.
          </p>
          <p className="font-pacifico text-xl  text-slate-700 ">
            Our platform is dedicated to empowering families to rediscover the
            joy of cooking and sharing meals together. Whether you're a seasoned
            chef or a beginner in the kitchen, Family Kitchen is your go-to
            resource for delicious recipes, practical cooking tips, and
            interactive cooking challenges that the whole family can enjoy.
          </p>
          <p className="font-pacifico text-xl  text-slate-800">
          We are passionate about promoting healthy eating habits, supporting local farmers and producers, and fostering a sense of community among our users. Join us on this culinary journey as we explore new flavors, share cooking experiences, and celebrate the magic of family cooking.
          </p>
          <p className="font-pacifico text-xl text-slate-700 ">
          Together, let's create unforgettable moments around the kitchen table and inspire the next generation of home cooks. Welcome to the Family Kitchen community - where every meal is a celebration of family, food, and togetherness!
          </p>
        </div>
        <div>
          <img src="https://www.pngall.com/wp-content/uploads/12/Cooking-PNG-Free-Image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
