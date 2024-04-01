import React from "react";
import Hero from "../Components/Hero";
import Heading from '../Components/Heading'
import Essentials from "../Components/Essentials";
import ItemCards from "../Components/ItemCards";
import categories from "../Data/Categories";
import Categories from "../Components/Categories";
const Home = () => {
  const paragraph =
    "Where every meal is a celebration of family, flavor, and fun! Dive into a world of delicious possibilities as we invite you to explore our collection of family-friendly recipes, cooking tips, and interactive challenges. Whether you're a seasoned chef or just starting your culinary journey, we're here to inspire and empower you to create unforgettable moments in the kitchen with your loved ones. Join us as we embark on a delicious adventure together - because at Family Kitchen, cooking is more than just a meal, it's a shared experience filled with love and laughter. Welcome home to the heart of your family's culinary journey!";

  return (
    <div>
      <Hero
        image="./images/cheesecake.jpg"
        para={paragraph}
        head1="Welcome To"
        head2="Family Kitchen"
      />

      <Heading heading = "Categories" />
      <Categories data = {categories.categories} />
      <Heading heading = "Essential Tools" />
      <Essentials />
      <Heading heading = "Latest Recipes" /> 
    </div>
  );
};

export default Home;
