import { useState, useEffect } from "react";
import RandomRecipes from "./RandomRecipes";
import { useLocation } from "react-router-dom";
import axios from "axios";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const idFromQuery = query.get("value");
  const [RecipesDetails, setRecipesDetails] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCategoryRecipes() {
      try {
        // setIsLoading(true);
        const recipeDetails = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFromQuery}`
        );
        const videoLink = recipeDetails.data.meals[0].strYoutube;
        const videoId = videoLink.split("=")[1];

        const updatedRecipeDetails = {
          ...recipeDetails.data.meals[0],
          videoId: videoId,
        };

        console.log(recipeDetails.data.meals[0]);
        console.log(updatedRecipeDetails);
        setRecipesDetails(updatedRecipeDetails);

        // const timeout = setTimeout(() => {
        //   setIsLoading(false);
        // }, 1000);
        // return () => clearTimeout(timeout);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    getCategoryRecipes();
  }, [idFromQuery]);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const AddedToWishList = () => {
    setIsWishlisted(true);
  };
  const RemoveFromWishList = () => {
    setIsWishlisted(false);
  };

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

  return (
    <>
      <Card className="flex-col items-center justify-center xl:flex-row m-4">
        <CardHeader shadow={false} floated={false} className="w-60 xl:w-2/5">
          <img
            src={RecipesDetails.strMealThumb}
            alt="image"
            className="w-full h-full object-center object-cover hover:scale-105 ease-in-out duration-500"
          />
        </CardHeader>
        <CardBody className="w-full xl:w-3/5">
          <Typography className="text-xl font-extrabold mb-2">
            {RecipesDetails.strMeal}
          </Typography>
          <div className="flex justify-between">
            <Typography className="text-base text-center">
              Category: {RecipesDetails.strCategory}
            </Typography>
            <Typography className="text-base text-center">
              Country: {RecipesDetails.strArea}
            </Typography>
          </div>
          <Typography color="gray" className="font-normal mb-8">
            {RecipesDetails.strInstructions}
          </Typography>

          {isWishlisted ? (
            <Button
              onClick={RemoveFromWishList}
              className="w-40 md:w-48 xl:w-52 h-10 text-[9px] md:text-[11px] xl:text-xs md:py-3 bg-red-50 text-red-500 shadow-none"
            >
              Remove from WishList
            </Button>
          ) : (
            <Button
              onClick={AddedToWishList}
              className="w-40 md:w-48 xl:w-52 h-10 text-[9px] md:text-[11px] xl:text-xs  md:py-3 bg-teal-100 text-teal-800 shadow-none"
            >
              Add to WishList
            </Button>
          )}
        </CardBody>
      </Card>
      <div className="grid justify-items-center gap-6 grid-cols-2 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-3 2xl:grid-cols-4 2xl:gap-y-16 justify-center">
        {ingredients.map(({ ingredient, quantity }, index) => {
          if (!ingredient) {
            return null; // Skip rendering if ingredient is empty
          }
          return (
            <figure
              key={index}
              className="rounded-2xl relative w-40 h-36 md:w-52 md:h-48 lg:w-64 lg:h-60 xl:w-72 xl:h-[272px]  bg-green-300 hover:scale-105"
            >
              <img
                className="rounded-2xl p-2 h-full w-full m-auto object-center object-cover shadow-xl shadow-teal-900/50 opacity-90 hover:opacity-100"
                src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
                alt=""
              />
              <figcaption className="py-2 absolute bottom-4 left-2/4 flex w-4/5 -translate-x-2/4 justify-evenly rounded-xl border border-teal-800  bg-green-200 bg-opacity-70 hover:bg-opacity-100 hover:scale-[1.01] cursor-pointer">
                <Typography className="text-base lg:text-2xl font-bold text-teal-700">
                  {ingredient}
                </Typography>
                <Typography className="text-xs lg:text-xl font-bold text-teal-700">
                  {quantity}
                </Typography>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div className="w-full h-96">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${RecipesDetails.videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <RandomRecipes />
    </>
  );
}

export default ProductPage;
