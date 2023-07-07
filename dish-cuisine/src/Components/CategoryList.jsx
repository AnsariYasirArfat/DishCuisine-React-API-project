import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function CategoryList() {
  // To Scroll to the Top of Page
  useEffect(() => {
    const componentsElement = document.getElementById("components");
    componentsElement.scrollTop = 0;
  }, []);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const valueFromQuery = query.get("value");
  const [Category, setCategory] = useState(valueFromQuery || "breakfast");
  const [CategoryRecipes, setCategoryRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(valueFromQuery);
  useEffect(() => {
    async function getCategoryRecipes() {
      try {
        setIsLoading(true);
        const CategoryList = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`
        );
        const recipes = CategoryList.data.meals.map((recipe) => ({
          ...recipe,
          strCategory: Category,
        }));
        // console.log(recipes);
        setCategoryRecipes(recipes);

        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    getCategoryRecipes();
  }, [Category]);

  const data = [
    {
      label: "Breakfast",
      value: "breakfast",
      Recipes: CategoryRecipes,
    },

    {
      label: "Chicken",
      value: "chicken",
      Recipes: CategoryRecipes,
    },
    {
      label: "Dessert",
      value: "dessert",
      Recipes: CategoryRecipes,
    },
    {
      label: "Starter",
      value: "starter",
      Recipes: CategoryRecipes,
    },
    {
      label: "Side",
      value: "side",
      Recipes: CategoryRecipes,
    },
    {
      label: "Pasta",
      value: "pasta",
      Recipes: CategoryRecipes,
    },
    {
      label: "Seafood",
      value: "seafood",
      Recipes: CategoryRecipes,
    },
    {
      label: "Vegetarian",
      value: "vegetarian",
      Recipes: CategoryRecipes,
    },
    {
      label: "Miscellaneous",
      value: "miscellaneous",
      Recipes: CategoryRecipes,
    },
  ];
  const handleTabClick = (value, label) => {
    setCategory(label || value);
  };
  return (
    <section id="top">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center py-4 xl:py-0 text-green-500 capitalize">
          {CategoryRecipes.length} {Category} Recipes:
        </h1>
      </div>
      <Tabs
        id="custom-animation"
        value={valueFromQuery || "breakfast"}
        className="flex flex-col xl:flex-row py-4 "
      >
        <div className="bg-[#B3FF67] bg-opacity-60  rounded-lg mx-4 mb-8 xl:mb-0 xl:mx-4 shadow-lg shadow-lime-900/60">
          <h1 className="pt-2 xl:pt-4 text-center text-base lg:text-xl text-lime-800 font-bold">
            Categories:
          </h1>
          <TabsHeader className="bg-lime-400 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-1 p-1.5 m-2 lg:m-4 md:p-2.5 xl:w-36 2xl:w-44 ">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => handleTabClick(value, label)}
                className="text-xs lg:text-sm font-bold md:py-2 md:my-1 text-green-900"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>

        <TabsBody
          animate={{
            initial: { y: 800 },
            mount: { y: 0 },
            unmount: { y: 800 },
          }}
        >
          {data.map(({ value, Recipes }) => (
            <TabPanel
              id="ProductListWindow"
              key={value}
              value={value}
              className="xl:overflow-auto xl:h-[800px] pt-0 pb-4 grid justify-items-center gap-6 grid-cols-2 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4  justify-center"
            >
              {Recipes.map((recipe, index) => {
                return (
                  <RecipeCard key={index} data={recipe} Loading={isLoading} />
                );
              })}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}

export default CategoryList;
