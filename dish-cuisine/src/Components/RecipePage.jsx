import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FavoriteRecipesContext } from "../main";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function RecipePage() {
  const { favoriteRecipes, updatedFavoriteRecipes } = useContext(
    FavoriteRecipesContext
  );

  useEffect(() => {
    const componentsElement = document.getElementById("components");
    componentsElement.scrollTop = 0;
  }, []);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const idFromQuery = query.get("value");
  const [RecipesDetails, setRecipesDetails] = useState({});
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    async function getCategoryRecipes() {
      try {
        const recipeDetails = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFromQuery}`
        );
        const videoLink = recipeDetails.data.meals[0].strYoutube;
        const videoId = videoLink.split("=")[1];

        const updatedRecipeDetails = {
          ...recipeDetails.data.meals[0],
          videoId: videoId,
        };
        setRecipesDetails(updatedRecipeDetails);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    getCategoryRecipes();
  }, [idFromQuery]);

  useEffect(() => {
    if (favoriteRecipes.length > 0) {
      const isFavorite = favoriteRecipes.some(
        (recipe) => recipe.idMeal === idFromQuery
      );
      // console.log("isFavorite", isFavorite);
      setIsWishlisted(isFavorite);
    }
  }, [favoriteRecipes, idFromQuery]);

  const toggleFavorite = () => {
    if (isWishlisted) {
      setIsWishlisted(false);

      const removedFavoriteRecipes = favoriteRecipes.filter(
        (recipe) => recipe.idMeal !== RecipesDetails.idMeal
      );

      updatedFavoriteRecipes(removedFavoriteRecipes);
      // console.log("on remove fav", removedFavoriteRecipes);
    } else {
      const addedFavoriteRecipes = [...favoriteRecipes, RecipesDetails];
      updatedFavoriteRecipes(addedFavoriteRecipes);
      setIsWishlisted(true);
      // console.log("on add fav", addedFavoriteRecipes);
    }
  };

  // console.log("Now list", favoriteRecipes);
  const ingredients = [
    {
      ingredient: RecipesDetails.strIngredient1,
      quantity: RecipesDetails.strMeasure1,
    },
    {
      ingredient: RecipesDetails.strIngredient2,
      quantity: RecipesDetails.strMeasure2,
    },
    {
      ingredient: RecipesDetails.strIngredient3,
      quantity: RecipesDetails.strMeasure3,
    },
    {
      ingredient: RecipesDetails.strIngredient4,
      quantity: RecipesDetails.strMeasure4,
    },
    {
      ingredient: RecipesDetails.strIngredient5,
      quantity: RecipesDetails.strMeasure5,
    },
    {
      ingredient: RecipesDetails.strIngredient6,
      quantity: RecipesDetails.strMeasure6,
    },
    {
      ingredient: RecipesDetails.strIngredient7,
      quantity: RecipesDetails.strMeasure7,
    },
    {
      ingredient: RecipesDetails.strIngredient8,
      quantity: RecipesDetails.strMeasure8,
    },
    {
      ingredient: RecipesDetails.strIngredient9,
      quantity: RecipesDetails.strMeasure9,
    },
    {
      ingredient: RecipesDetails.strIngredient10,
      quantity: RecipesDetails.strMeasure10,
    },
    {
      ingredient: RecipesDetails.strIngredient11,
      quantity: RecipesDetails.strMeasure11,
    },
    {
      ingredient: RecipesDetails.strIngredient12,
      quantity: RecipesDetails.strMeasure12,
    },
    {
      ingredient: RecipesDetails.strIngredient13,
      quantity: RecipesDetails.strMeasure13,
    },
    {
      ingredient: RecipesDetails.strIngredient14,
      quantity: RecipesDetails.strMeasure14,
    },
    {
      ingredient: RecipesDetails.strIngredient15,
      quantity: RecipesDetails.strMeasure15,
    },
    {
      ingredient: RecipesDetails.strIngredient16,
      quantity: RecipesDetails.strMeasure16,
    },
    {
      ingredient: RecipesDetails.strIngredient17,
      quantity: RecipesDetails.strMeasure17,
    },
    {
      ingredient: RecipesDetails.strIngredient18,
      quantity: RecipesDetails.strMeasure18,
    },
    {
      ingredient: RecipesDetails.strIngredient19,
      quantity: RecipesDetails.strMeasure19,
    },
    {
      ingredient: RecipesDetails.strIngredient20,
      quantity: RecipesDetails.strMeasure20,
    },
  ];
  // if (!RecipesDetails) {
  //   return (
  //     <>
  //       <h1>No data available for the recipes</h1>
  //     </>
  //   );
  // }
  return (
    <>
      <section className="py-4">
        <Card className="flex-col items-center justify-center lg:flex-row  mx-2 sm:mx-4 bg-[#B3FF67] bg-opacity-30 rounded-xl shadow-xl shadow-green-900/60">
          <div className="lg:ms-4">
            <Typography className="text-lime-800 text-xl sm:w-96 md:text-2xl font-extrabold my-4 lg:my-6 px-4 text-center">
              {RecipesDetails.strMeal}
            </Typography>
            <div className="flex justify-evenly mb-2 text-green-700">
              <Typography className="text-sm font-bold text-center">
                Category: {RecipesDetails.strCategory}
              </Typography>
              <Typography className="text-sm  font-bold text-center">
                Country: {RecipesDetails.strArea}
              </Typography>
            </div>
            <CardHeader
              shadow={false}
              floated={false}
              className="w-72 sm:w-80 mx-auto"
            >
              <img
                src={RecipesDetails.strMealThumb}
                alt="image"
                className="w-full h-full object-center object-cover hover:scale-105 ease-in-out duration-500"
              />
            </CardHeader>
            <div className="mx-auto my-4 xl:my-8 xl:mt-10 py-3 md:py-4 flex flex-col items-center justify-center bg-lime-300 w-72 sm:w-80 rounded-xl ">
              {isWishlisted ? (
                <p className="text-base md:text-lg xl:text-xl text-center font-bold text-green-600">
                  You&#39;ve Already Saved This <br /> Delight to Your
                  Favorites!
                </p>
              ) : (
                <p className="text-base md:text-lg  xl:text-xl text-center font-bold text-lime-800">
                  Save The Recipe to <br /> Your Favorites Collection
                </p>
              )}

              <Button
                onClick={toggleFavorite}
                className={`mt-2 w-36 md:w-44 xl:w-52 h-10 md:text-sm  md:h-12 ${
                  isWishlisted
                    ? "text-xs bg-red-50 text-red-500"
                    : "text-xs  bg-green-100 text-green-700"
                } shadow-none capitalize`}
              >
                {isWishlisted ? "Remove Recipe" : "Save Recipe"}
              </Button>
            </div>
          </div>
          <CardBody className="p-2 w-full lg:self-start">
            <div className="my-6">
              <h1 className="text-green-400 text-lg lg:text-xl xl:text-2xl font-bold text-center mb-4">
                Recipe&apos;s Ingredients:
              </h1>
              <div className="grid justify-items-center gap-4 grid-cols-2 sm:grid-cols-3 sm:gap-y-8 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  2xl:gap-y-10 justify-center">
                {ingredients.map(({ ingredient, quantity }, index) => {
                  if (!ingredient) {
                    return null;
                  }
                  return (
                    <figure
                      key={index}
                      className="rounded-2xl relative w-36 h-36 md:w-40 md:h-40  xl:w-44 xl:-44  hover:scale-[1.01]"
                    >
                      <img
                        className="rounded-2xl p-4 h-full w-full m-auto object-center object-cover shadow-xl shadow-green-900/50 opacity-90 hover:opacity-100"
                        src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
                        alt=""
                      />
                      <figcaption className=" flex w-11/12 p-2 lg:p-2 absolute bottom-2 left-2/4  -translate-x-2/4 justify-between items-center rounded-xl border border-green-800 bg-[#B3FF67] bg-opacity-70 hover:bg-opacity-100">
                        <Typography className="text-xs lg:text-sm xl:text-base font-bold text-green-900 w-1/2">
                          {ingredient}
                        </Typography>
                        <Typography className="text-[10px] lg:text-sx  xl:text-sm font-semibold text-lime-900 w-1/2 text-end">
                          {quantity}
                        </Typography>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="my-6 xl:my-14 xl:py-4 mx-2 sm:mx-4 rounded-xl shadow-xl shadow-green-900/60">
          <CardHeader shadow={false} floated={false} className="">
            <h1 className="text-green-400 text-lg lg:text-xl xl:text-2xl text-center font-semibold">
              Watch the recipe here:
            </h1>
          </CardHeader>
          <CardBody
            shadow={false}
            floated={false}
            className="p-1 my-2 xl:my-4 mx-auto w-[350px] h-56 sm:w-[490px] sm:h-[280px] md:w-[560px] md:h-80 lg:w-[740px] lg:h-[420px] xl:w-[920px] xl:h-[526px] 2xl:w-[1100px] 2xl:h-[630px]"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${RecipesDetails.videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </CardBody>
        </Card>
        <Card className="my-4 xl:my-8 mx-2 sm:mx-4 rounded-xl bg-[#B3FF67] bg-opacity-30 shadow-xl shadow-green-900/60">
          <CardBody shadow={false} floated={false}>
            <div className="">
              <h1 className="text-green-400 text-lg lg:text-xl xl:text-2xl font-bold mb-2 ">
                Recipe&apos;s Instructions:
              </h1>
              <Typography className="text-green-800 text-sm xl:text-base mb-8">
                {RecipesDetails.strInstructions}
              </Typography>
            </div>
          </CardBody>
        </Card>
      </section>
    </>
  );
}

export default RecipePage;
