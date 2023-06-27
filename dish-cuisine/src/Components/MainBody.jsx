import { useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PopularRecipes from "./PopularRecipes";

import Banner from "../Assets/banner.jpg";
import RecipeBook from "../Assets/RecipeBook.jpg";

function MainBody() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Banners' Section */}
      <section className=" py-4 px-2 sm:px-5 lg:px-4 flex flex-col items-center lg:flex-row justify-between">
        <figure className="relative h-96 lg:h-[500px] w-full p-1">
          <img
            className="h-full w-full m-auto object-left 2xl:object-center object-cover rounded-lg shadow-xl shadow-teal-900/50 opacity-90 hover:opacity-100"
            src={Banner}
            alt="nature image"
          />
          <figcaption className="py-4 px-6 absolute bottom-4 left-2/4 -translate-x-2/4 w-11/12  md:w-2/4 md:h-64 lg:h-96 md:right-14 md:bottom-2/4 md:translate-y-2/4 md:-translate-x-0 md:left-auto  flex  justify-between rounded-xl bg-green-500 bg-opacity-40 hover:bg-opacity-50 cursor-pointer">
            <div className="my-auto">
              <Typography className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-green-50">
                Discover Culinary Excellence with Dish Cuisine Recipes!
              </Typography>
              <Typography
                color="gray"
                className="mt-2 md:mt-6 lg:mt-10 2xl:mt-14 float-right font-bold text-xs sm:text-sm md:text-xl lg:text-2xl 2xl:text-3xl text-green-900"
              >
                - Unleash Your Inner Chef.
              </Typography>
            </div>
          </figcaption>
        </figure>
      </section>
      {/* Welcome Section */}
      <section className="my-4 mx-3 sm:mx-6 md:mx-8 lg:mx-5 py-6 bg-teal-400 rounded-md flex flex-col items-center">
        <h2 className="pb-4 text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl font-bold  text-teal-50">
          Welcome to Dish Cuisine
        </h2>
        <div className="md:px-3 lg:px-6 xl:px-10 flex flex-col lg:flex-row items-center justify-center ">
          {/* Image Section */}
          <img
            className="w-[80%]  lg:w-1/3  opacity-90 hover:opacity-100 object-center object-cover rounded-lg shadow-2xl shadow-teal-950/50 "
            src={RecipeBook}
            alt="Welcome Image"
          />
          {/* Content Section */}
          <div className="md:ps-3 lg:ps-6 xl:ps-10 w-[80%] lg:w-2/3  flex flex-col items-center justify-around   ">
            <p className="py-4 text-xs sm:text-sm md:text-base 2xl:text-lg font-semibold  text-teal-100 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              eveniet minus facilis ex alias cumque? Earum voluptas, excepturi
              et, suscipit ducimus provident recusandae veniam quia veritatis,
              rem distinctio dolores facilis ex alias cumque? Earum voluptas,
              excepturi et, suscipit ducimus provident recusandae veniam quia
              veritatis, rem distinctio dolores quodfacilis ex alias cumque?
              Earum voluptas, excepturi et, suscipit ducimus provident
              recusandae veniam quia veritatis, rem distinctio dolores quod!
            </p>
          </div>
        </div>
        <button className="mt-2 text-sm px-2 py-1 lg:px-3 lg:py-2 md:font-semibold bg-teal-100 text-teal-900   hover:text-teal-50 hover:bg-teal-700">
          <Link to="/">Read More</Link>
        </button>
      </section>
      <PopularRecipes />
    </>
  );
}

export default MainBody;
