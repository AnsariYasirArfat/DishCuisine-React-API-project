import { useState, useEffect } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import RandomRecipes from "./RandomRecipes";
import ByRecipesInitials from "./ByRecipesInitials";
import RecipeCard from "./RecipeCard";
import Banner from "../Assets/banner.jpg";
import RecipeBook from "../Assets/RecipeBook.jpg";

function MainBody() {
  // To Scroll to the Top of Page
  useEffect(() => {
    const componentsElement = document.getElementById("components");
    componentsElement.scrollTop = 0;
  }, []);

  const [Categories, setCategories] = useState([]);
  const [input, setInput] = useState("");
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userSearched, setUserSearched] = useState("");

  useEffect(() => {
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
        // console.log(filteredCategories);
        setCategories(filteredCategories);
        setIsLoading(true);

        const List = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=cakes`
        );

        const defualtList = List.data.meals.filter(
          (recipe) =>
            recipe.strCategory !== "Pork" &&
            recipe.strCategory !== "Beef" &&
            !recipe.strMeal.includes("Pork") &&
            !recipe.strMeal.includes("Beef")
        );
        setSearchedRecipe(defualtList);
        // console.log("Default meal", defualtList);

        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    getCategoryOfRecipeList();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setUserSearched(input);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      );

      if (response.data.meals) {
        const filteredList = response.data.meals.filter((recipe) => {
          const forbiddenCategories = ["Pork", "Beef"];
          const forbiddenKeywords = ["Pork", "Beef"];

          const hasForbiddenCategory = forbiddenCategories.some((category) =>
            recipe.strCategory.includes(category)
          );

          const hasForbiddenKeyword = forbiddenKeywords.some((keyword) =>
            recipe.strMeal.includes(keyword)
          );

          return !hasForbiddenCategory && !hasForbiddenKeyword;
        });

        setSearchedRecipe(filteredList);
        setInput("");
      } else {
        setSearchedRecipe([]);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Banners' Section */}
      <section
        id="top"
        className=" py-4 px-2 sm:px-5 lg:px-4 flex flex-col items-center lg:flex-row justify-between"
      >
        <figure className="relative h-96 lg:h-[500px] w-full p-1">
          <img
            className="h-full w-full m-auto object-left 2xl:object-center object-cover rounded-xl shadow-xl shadow-green-900/60"
            src={Banner}
            alt=""
          />
          <figcaption className="bg-[#B3FF67] bg-opacity-60  py-4 px-6 absolute bottom-4 left-2/4 -translate-x-2/4 w-11/12  md:w-2/4 md:h-64 lg:h-96 md:right-14 md:bottom-2/4 md:translate-y-2/4 md:-translate-x-0 md:left-auto  flex  justify-between rounded-xl ">
            <div className="my-auto">
              <Typography className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white">
                Discover Culinary Excellence with Dish Cuisine Recipes!
              </Typography>
              <Typography
                color="gray"
                className="mt-2 md:mt-6 lg:mt-10 2xl:mt-14 float-right font-bold text-xs sm:text-sm md:text-xl lg:text-2xl 2xl:text-3xl text-green-700"
              >
                - Unleash Your Inner Chef.
              </Typography>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* Welcome Section */}
      <section className="my-4 xl:my-10 mx-3 sm:mx-6 md:mx-8 lg:mx-5 py-8 xl:py-14 bg-[#B3FF67] bg-opacity-70 rounded-xl flex flex-col items-center shadow-xl shadow-green-900/60">
        <h2 className="pb-4 text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl font-bold  text-lime-800">
          Welcome to Dish Cuisine
        </h2>
        <div className="md:px-3 lg:px-6 xl:px-10 flex flex-col lg:flex-row items-center justify-center ">
          {/* Image Section */}
          <img
            className="w-[80%]  lg:w-1/3  opacity-90 hover:opacity-100 object-center object-cover rounded-lg shadow-2xl shadow-lime-950/50 "
            src={RecipeBook}
            alt=""
          />
          {/* Content Section */}
          <div className="md:ps-3 lg:ps-6 xl:ps-10 w-[80%] lg:w-2/3  flex flex-col items-center justify-around text-green-900">
            <p className="py-4 text-xs sm:text-sm md:text-base 2xl:text-lg font-semibold  ">
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

      {/* Search Recipes Section */}
      <section
        className="py-8 xl:py-14 px-2 sm:px-5 lg:px-4 "
        id="searchrecipe"
      >
        <h2 className="pb-5 lg:pb-10 text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center text-green-700">
          Search your desired Meal:
        </h2>
        <div className="w-[340px] sm:w-96 h-20 mx-auto">
          <form onSubmit={handleSubmit} className="flex justify-between ">
            <Input
              color="lime"
              label="Search Your Meals"
              value={input}
              size="lg"
              onChange={(e) => setInput(e.target.value)}
              className="capitalize"
            />
            <Button
              type="submit"
              variant="contained"
              color="lime"
              className="h-11 ms-2"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/pastel-glyph/64/search--v2.png"
                alt="search--v2"
              />
            </Button>
          </form>
        </div>
        <div>
          {searchedRecipe.length > 0 && userSearched && (
            <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-center pb-8 text-lime-700 capitalize">
              Discover {searchedRecipe.length} Recipes: Matching your search for
              &quot;<span className="text-green-600">{userSearched}</span>&quot;
            </h1>
          )}
        </div>

        <div
          className={
            searchedRecipe.length > 0 &&
            `overflow-auto pt-0 pb-8 grid justify-items-center gap-6 grid-cols-2 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-4 xl:grid-cols-5 justify-center`
          }
          style={{ minHeight: "300px" }}
        >
          {searchedRecipe && searchedRecipe.length > 0 ? (
            searchedRecipe.map((recipe, index) => (
              <RecipeCard key={index} data={recipe} Loading={isLoading} />
            ))
          ) : (
            <p className="px-10 text-center text-base md:text-lg lg:text-2xl font-bold mt-24 lg:mt-32 text-lime-700">
              Oops! We couldn&apos;t find any recipes matching your search for
              &quot;
              <span className="capitalize text-green-500 font-extrabold ">
                {userSearched}
              </span>
              &quot; at the moment. Please try a different search term or
              explore our other delightful recipes.
            </p>
          )}
        </div>
      </section>

      {/* Random Recipes Section */}
      <RandomRecipes />

      {/* Categories of recipes Section */}
      <section className="py-4 xl:py-10 px-2 sm:px-5 lg:px-4 " id="categories">
        <h2 className="pb-5 lg:pb-10 text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center text-green-700">
          Explore Delicious Recipe Categories
        </h2>
        <div className=" grid justify-items-center gap-6 grid-cols-2 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-y-16 justify-center">
          {Categories.map((Category) => (
            <>
              <figure className="rounded-2xl relative w-40 h-36 md:w-52 md:h-48 xl:w-64 lg:h-60 bg-[#B3FF67] bg-opacity-70  hover:scale-105 shadow-xl shadow-green-900/60">
                <Link
                  to={{
                    pathname: "/category",
                    search: `?value=${Category.strCategory.toLowerCase()}`,
                  }}
                >
                  <img
                    className="rounded-2xl p-1 h-full w-full m-auto object-center object-cover opacity-90 hover:opacity-100"
                    src={Category.strCategoryThumb}
                    alt="nature image"
                  />
                  <figcaption className="py-2 absolute bottom-4 left-2/4 flex w-4/5 -translate-x-2/4 justify-center rounded-xl border border-lime-800  bg-[#B3FF67] bg-opacity-80  hover:scale-[1.01] cursor-pointer">
                    <Typography className="text-base lg:text-xl xl:text-2xl font-bold text-green-700">
                      {Category.strCategory}
                    </Typography>
                  </figcaption>
                </Link>
              </figure>
            </>
          ))}
        </div>
      </section>
      {/* Recipes by Initial Section */}
      <section
        className="py-4 px-1 sm:px-2 lg:px-0 my-4 xl:my-10 mx-3 sm:mx-6 md:mx-8 lg:mx-2 bg-[#B3FF67] bg-opacity-70 rounded-xl shadow-xl shadow-green-900/60 "
        id="byinitial"
      >
        <ByRecipesInitials />
      </section>
    </>
  );
}

export default MainBody;
