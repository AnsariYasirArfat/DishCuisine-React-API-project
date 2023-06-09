import { useContext, useEffect } from "react";

import { FavoriteRecipesContext } from "../main";
import RecipeCard from "./RecipeCard";

function FavouriteRecipes() {
  useEffect(() => {
    const componentsElement = document.getElementById("components");
    componentsElement.scrollTop = 0;
  }, []);
  const { favoriteRecipes } = useContext(FavoriteRecipesContext);

  return (
    <div>
      {favoriteRecipes.length > 0 ? (
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center p-8 text-green-400 capitalize">
          Explore Your Collection of {favoriteRecipes.length} Personal Favorite
          {favoriteRecipes.length > 1 ? "s" : ""}.
        </h1>
      ) : (
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center p-8 text-red-400 capitalize">
          No Recipes Yet? Start Adding Delicious Recipes to Your Favorites!
        </h1>
      )}
      <div
        className="overflow-auto pt-0 pb-4 grid justify-items-center gap-6 grid-cols-2 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-4 xl:grid-cols-5 justify-center"
        style={{ minHeight: "300px" }}
      >
        {favoriteRecipes.map((recipe, index) => {
          return <RecipeCard key={index} data={recipe} />;
        })}
      </div>
    </div>
  );
}

export default FavouriteRecipes;
