import { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import RandomRecipes from "./RandomRecipes";
import ByRecipesInitials from "./ByRecipesInitials";

import Banner from "../Assets/banner.jpg";
import RecipeBook from "../Assets/RecipeBook.jpg";

function MainBody() {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function getCategoryOfRecipeList() {
      try {
        const CategoryList = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/categories.php`
        );
        // Filter out unwanted categories
        const filteredCategories = CategoryList.data.categories.filter(
          (category) =>
            category.strCategory !== "Pork" &&
            category.strCategory !== "Beef" &&
            category.strCategory !== "Lamb" &&
            category.strCategory !== "Vegan" &&
            category.strCategory !== "Goat"
        );

        console.log(filteredCategories);
        setCategories(filteredCategories);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    getCategoryOfRecipeList();
  }, []);

  return (
    <>
      {/* Banners' Section */}
      <section
        id="top"
        className=" py-4 px-2 sm:px-5 lg:px-4 flex flex-col items-center lg:flex-row justify-between"
      >
        <figure className="relative h-96 lg:h-[500px] w-full p-1">
          <img
            className="h-full w-full m-auto object-left 2xl:object-center object-cover rounded-xl shadow-xl shadow-teal-900/50 opacity-90 hover:opacity-100"
            src={Banner}
            alt=""
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
      <section className="my-4 mx-3 sm:mx-6 md:mx-8 lg:mx-5 py-6 bg-teal-400 rounded-xl flex flex-col items-center">
        <h2 className="pb-4 text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl font-bold  text-teal-50">
          Welcome to Dish Cuisine
        </h2>
        <div className="md:px-3 lg:px-6 xl:px-10 flex flex-col lg:flex-row items-center justify-center ">
          {/* Image Section */}
          <img
            className="w-[80%]  lg:w-1/3  opacity-90 hover:opacity-100 object-center object-cover rounded-lg shadow-2xl shadow-teal-950/50 "
            src={RecipeBook}
            alt=""
          />
          {/* Content Section */}
          <div className="md:ps-3 lg:ps-6 xl:ps-10 w-[80%] lg:w-2/3  flex flex-col items-center justify-around   ">
            <p className="py-4 text-xs sm:text-sm md:text-base 2xl:text-lg font-semibold  text-teal-100 ">
              &quot;Embark on an Epic Culinary Voyage with Dish Cuisine: Delight
              Your Taste Buds with a World of Flavors! Uncover the Secrets of 7
              Diverse Recipe Categories and Dive into the Exquisite Cuisines of
              20 Countries. From Exotic Ingredients to Step-by-Step
              Instructions, Mouthwatering Ingredients, and Captivating Recipe
              Videos, Prepare to Indulge Your Senses in an Unforgettable
              Gastronomic Adventure. Unleash Your Inner Chef and Discover the
              Art of Global Cooking Today!&quot;
            </p>
          </div>
        </div>
      </section>
      <RandomRecipes />

      {/* Categories of recipes Section */}
      <section className="py-4 px-2 sm:px-5 lg:px-4 " id="categories">
        <h2 className="pb-5 lg:pb-10 text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center text-teal-500">
          Explore Delicious Recipe Categories
        </h2>
        <div className="grid justify-items-center gap-6 grid-cols-2 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-3 2xl:grid-cols-4 2xl:gap-y-16 justify-center">
          {Categories.map((Category) => (
            <>
              <figure className="rounded-2xl relative w-40 h-36 md:w-52 md:h-48 lg:w-64 lg:h-60 xl:w-72 xl:h-[272px]  bg-green-300 hover:scale-105">
                <img
                  className="rounded-2xl  h-full w-full m-auto object-center object-cover shadow-xl shadow-teal-900/50 opacity-90 hover:opacity-100"
                  src={Category.strCategoryThumb}
                  alt="nature image"
                />
                <Link
                  to={{
                    pathname: "/category",
                    search: `?value=${Category.strCategory.toLowerCase()}`,
                  }}
                >
                  <figcaption className="py-2 absolute bottom-4 left-2/4 flex w-4/5 -translate-x-2/4 justify-center rounded-xl border border-teal-800  bg-green-200 bg-opacity-70 hover:bg-opacity-100 hover:scale-[1.01] cursor-pointer">
                    <Typography className="text-base lg:text-2xl font-bold text-teal-700">
                      {Category.strCategory}
                    </Typography>
                  </figcaption>
                </Link>
              </figure>
            </>
          ))}
        </div>
      </section>

      <section
        className="py-4 px-1 sm:px-2 lg:px-0 my-4 mx-3 sm:mx-6 md:mx-8 lg:mx-2 bg-teal-400 rounded-xl "
        id="byinitial"
      >
        <ByRecipesInitials />
      </section>
    </>
  );
}

export default MainBody;
