import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function CountryList() {
  // To Scroll to the Top of Page
  useEffect(() => {
    const componentsElement = document.getElementById("components");
    componentsElement.scrollTop = 0;
  }, []);

  const [Country, setCountry] = useState("indian");
  const [CountryRecipes, setCountryRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCountryRecipes() {
      try {
        setIsLoading(true);
        const CountryList = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Country}`
        );
        const recipes = CountryList.data.meals.map((recipe) => ({
          ...recipe,
          strCategory: Country,
        }));

        const filteredRecipesList = recipes.filter(
          (recipe) =>
            !recipe.strMeal.includes("Pork") && !recipe.strMeal.includes("Beef")
        );

        // console.log("Without Filtered data:", recipes);
        // console.log("Filtered data:", filteredRecipesList);
        setCountryRecipes(filteredRecipesList);

        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    getCountryRecipes();
  }, [Country]);

  const data = [
    {
      label: "Indian",
      value: "indian",
      Recipes: CountryRecipes,
    },
    {
      label: "American",
      value: "american",
      Recipes: CountryRecipes,
    },

    {
      label: "British",
      value: "british",
      Recipes: CountryRecipes,
    },
    {
      label: "Canadian",
      value: "canadian",
      Recipes: CountryRecipes,
    },
    {
      label: "Chinese",
      value: "chinese",
      Recipes: CountryRecipes,
    },
    {
      label: "Croatian",
      value: "croatian",
      Recipes: CountryRecipes,
    },
    {
      label: "Dutch",
      value: "dutch",
      Recipes: CountryRecipes,
    },
    {
      label: "Egyptian",
      value: "egyptian",
      Recipes: CountryRecipes,
    },
    {
      label: "French",
      value: "french",
      Recipes: CountryRecipes,
    },
    {
      label: "Greek",
      value: "greek",
      Recipes: CountryRecipes,
    },
    {
      label: "Italian",
      value: "italian",
      Recipes: CountryRecipes,
    },
    {
      label: "Japanese",
      value: "japanese",
      Recipes: CountryRecipes,
    },
    {
      label: "Malaysian",
      value: "malaysian",
      Recipes: CountryRecipes,
    },
    {
      label: "Mexican",
      value: "mexican",
      Recipes: CountryRecipes,
    },
    {
      label: "Moroccan",
      value: "moroccan",
      Recipes: CountryRecipes,
    },
    {
      label: "Portuguese",
      value: "portuguese",
      Recipes: CountryRecipes,
    },

    {
      label: "Spanish",
      value: "spanish",
      Recipes: CountryRecipes,
    },
    {
      label: "Thai",
      value: "thai",
      Recipes: CountryRecipes,
    },
    {
      label: "Tunisian",
      value: "tunisian",
      Recipes: CountryRecipes,
    },
    {
      label: "Turkish",
      value: "turkish",
      Recipes: CountryRecipes,
    },
  ];
  const handleTabClick = (value, label) => {
    setCountry(label || value);
  };
  return (
    <section id="top">
      <Tabs
        id="custom-animation"
        value="indian"
        className="flex flex-col py-4 "
      >
        <div className=" bg-lime-400 rounded-lg mx-4 mb-4 shadow-lg shadow-lime-900/60">
          <h1 className="pt-2 xl:pt-4 text-center text-base lg:text-xl text-green-700 font-bold">
            Countries:
          </h1>
          <TabsHeader className="bg-[#B3FF67] bg-opacity-60  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-10 lg:grid-cols-10  p-1.5 m-2 lg:m-4 md:p-2.5">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => handleTabClick(value, label)}
                className="text-green-900 text-xs lg:text-sm font-bold md:py-2 md:my-1"
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
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center p-8 text-green-400 capitalize">
              {CountryRecipes.length} {Country} Recipes:
            </h1>
          </div>
          {data.map(({ value, Recipes }) => (
            <TabPanel
              id="ProductListWindow"
              key={value}
              value={value}
              className="overflow-auto pt-0 pb-4 grid justify-items-center gap-6 grid-cols-2 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-4 xl:grid-cols-5 justify-center"
              style={{ minHeight: "600px" }}
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

export default CountryList;
