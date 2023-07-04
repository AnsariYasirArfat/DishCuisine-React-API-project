import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import RecipeCardLoader from "./RecipeCardLoader";

function RandomRecipes() {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getRandomRecipes() {
      try {
        setIsLoading(true);

        const recipes = [];

        for (let i = 0; i < 4; i++) {
          const randomRecipe = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/random.php`
          );
          recipes.push(randomRecipe.data.meals[0]);
        }
        console.log(recipes);
        setPopularRecipes(recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getRandomRecipes();
  }, []);

  return (
    <>
      <section
        id="latest"
        className="my-8 mx-3 sm:mx-6 md:mx-8 lg:mx-5 p-5 bg-teal-300 rounded-lg"
      >
        <h1 className="pb-5 lg:pb-10 text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl  font-bold text-center text-teal-50">
          Random Recipes
        </h1>
        <div className="pb-8 flex flex-wrap justify-center gap-4 sm:gap-9 md:gap-3 lg:gap-x-3 xl:gap-x-12 2xl:gap-x-16">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <RecipeCardLoader key={index} />
              ))
            : popularRecipes.map((recipe, index) => (
                <RecipeCard key={index} data={recipe} Loading={isLoading} />
              ))}
        </div>
      </section>
    </>
  );
}

export default RandomRecipes;
