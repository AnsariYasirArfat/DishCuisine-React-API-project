import { useState, useEffect } from "react";
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
      <Card className="flex-col items-center justify-center lg:flex-row lg:items-start m-2">
        <div>
          <Typography className="text-xl md:text-2xl font-extrabold my-2  lg:my-8 text-center">
            {RecipesDetails.strMeal}
          </Typography>
          <div className="flex justify-evenly mb-2">
            <Typography className="text-sm font-bold text-center">
              Category: {RecipesDetails.strCategory}
            </Typography>
            <Typography className="text-sm  font-bold text-center">
              Country: {RecipesDetails.strArea}
            </Typography>
          </div>
          <CardHeader shadow={false} floated={false} className="w-72 sm:w-80  ">
            <img
              src={RecipesDetails.strMealThumb}
              alt="image"
              className="w-full h-full object-center object-cover hover:scale-105 ease-in-out duration-500"
            />
          </CardHeader>
          <div className=" my-4 xl:mt-10 flex justify-center">
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
                className="w-40 md:w-48 xl:w-52 h-10 text-[10px] md:text-[11px] xl:text-xs  md:py-3 bg-teal-100 text-teal-800 shadow-none"
              >
                Add to WishList
              </Button>
            )}
          </div>
        </div>
        <CardBody className="p-2 w-full ">
          <div className="my-6">
            <h1 className="text-lg lg:text-xl font-bold text-center mb-4">
              Recipe&apos;s Ingredients:
            </h1>
            <div className="grid justify-items-center gap-4 grid-cols-2 sm:grid-cols-3 sm:gap-y-8 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  2xl:gap-y-10 justify-center">
              {ingredients.map(({ ingredient, quantity }, index) => {
                if (!ingredient) {
                  return null; // Skip rendering if ingredient is empty
                }
                return (
                  <figure
                    key={index}
                    className="rounded-2xl relative w-36 h-36 md:w-40 md:h-40  xl:w-44 xl:-44 bg-opacity-50 bg-green-300 hover:scale-[1.01]"
                  >
                    <img
                      className="rounded-2xl p-2 h-full w-full m-auto object-center object-cover shadow-xl shadow-teal-900/50 opacity-90 hover:opacity-100"
                      src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
                      alt=""
                    />
                    <figcaption className=" flex w-11/12 p-2 lg:p-2 absolute bottom-2 left-2/4  -translate-x-2/4 justify-between items-center rounded-xl border border-teal-800 bg-green-200 bg-opacity-50 hover:bg-opacity-100">
                      <Typography className="text-xs lg:text-sm xl:text-lg font-bold text-teal-800 w-1/2">
                        {ingredient}
                      </Typography>
                      <Typography className="text-[10px] lg:text-sx  xl:text-sm font-semibold text-teal-600 w-1/2 text-end">
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
      <Card className="my-4 mx-2">
        <CardBody shadow={false} floated={false}>
          <div className="">
            <h1 className="text-lg lg:text-xl font-bold mb-2 ">
              Recipe&apos;s Instructions:
            </h1>
            <Typography color="gray" className="text-sm xl:text-base mb-8">
              {RecipesDetails.strInstructions}
            </Typography>
          </div>
        </CardBody>
      </Card>
      <Card className="my-4 mx-2">
        <CardHeader shadow={false} floated={false} className="">
          <h1 className="text-center font-semibold">Watch the recipe here:</h1>
        </CardHeader>
        <CardBody
          shadow={false}
          floated={false}
          className="my-8 mx-auto w-[350px] h-56 sm:w-[490px] sm:h-[280px] md:w-[560px] md:h-80 lg:w-[740px] lg:h-[420px] xl:w-[920px] xl:h-[526px] 2xl:w-[1100px] 2xl:h-[630px]"
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${RecipesDetails.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </CardBody>
      </Card>
    </>
  );
}

export default ProductPage;
