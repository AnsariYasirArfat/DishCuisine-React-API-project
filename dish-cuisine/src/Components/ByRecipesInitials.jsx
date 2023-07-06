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

function InitialsList() {
  const [Initials, setInitials] = useState("v");
  const [InitialsRecipes, setInitialsRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    async function getInitialsRecipes() {
      setIsLoading(true);
      try {
        const InitialsList = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${Initials}`
        );
        if (InitialsList.data.meals === null) {
          setInitialsRecipes([]);
        } else {
          const filteredRecipesList = InitialsList.data.meals.filter(
            (recipe) =>
              recipe.strCategory !== "Pork" &&
              recipe.strCategory !== "Beef" &&
              !recipe.strMeal.includes("Pork") &&
              !recipe.strMeal.includes("Beef")
          );

          console.log("Without Filtered data:", InitialsList.data.meals);
          console.log("Filtered data:", filteredRecipesList);
          setInitialsRecipes(filteredRecipesList);
        }

        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }
    getInitialsRecipes();
  }, [Initials]);

  const data = [
    {
      label: "A",
      value: "a",
      Recipes: InitialsRecipes,
    },
    {
      label: "B",
      value: "b",
      Recipes: InitialsRecipes,
    },

    {
      label: "C",
      value: "c",
      Recipes: InitialsRecipes,
    },
    {
      label: "D",
      value: "d",
      Recipes: InitialsRecipes,
    },
    {
      label: "E",
      value: "e",
      Recipes: InitialsRecipes,
    },
    {
      label: "F",
      value: "f",
      Recipes: InitialsRecipes,
    },
    {
      label: "G",
      value: "g",
      Recipes: InitialsRecipes,
    },
    {
      label: "H",
      value: "h",
      Recipes: InitialsRecipes,
    },
    {
      label: "I",
      value: "i",
      Recipes: InitialsRecipes,
    },
    {
      label: "J",
      value: "j",
      Recipes: InitialsRecipes,
    },
    {
      label: "K",
      value: "k",
      Recipes: InitialsRecipes,
    },
    {
      label: "L",
      value: "l",
      Recipes: InitialsRecipes,
    },
    {
      label: "M",
      value: "m",
      Recipes: InitialsRecipes,
    },
    {
      label: "N",
      value: "n",
      Recipes: InitialsRecipes,
    },
    {
      label: "O",
      value: "o",
      Recipes: InitialsRecipes,
    },
    {
      label: "P",
      value: "p",
      Recipes: InitialsRecipes,
    },

    {
      label: "Q",
      value: "q",
      Recipes: InitialsRecipes,
    },
    {
      label: "R",
      value: "r",
      Recipes: InitialsRecipes,
    },
    {
      label: "S",
      value: "s",
      Recipes: InitialsRecipes,
    },
    {
      label: "T",
      value: "t",
      Recipes: InitialsRecipes,
    },
    {
      label: "U",
      value: "u",
      Recipes: InitialsRecipes,
    },
    {
      label: "V",
      value: "v",
      Recipes: InitialsRecipes,
    },
    {
      label: "W",
      value: "w",
      Recipes: InitialsRecipes,
    },
    {
      label: "X",
      value: "x",
      Recipes: InitialsRecipes,
    },
    {
      label: "Y",
      value: "y",
      Recipes: InitialsRecipes,
    },
    {
      label: "Z",
      value: "z",
      Recipes: InitialsRecipes,
    },
  ];
  const handleTabClick = (value, label) => {
    setInitials(label || value);
  };
  return (
    <Tabs id="custom-animation" value="v" className="flex flex-col py-4 px-0">
      <h1 className="pb-5 lg:pb-10 text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl  font-bold text-center text-teal-50">
        Search your recipes by Initials
      </h1>
      <div className=" bg-teal-200 rounded-lg mx-4 mb-4 shadow-lg shadow-teal-900/60">
        <TabsHeader className="grid grid-cols-9 md:grid-cols-12 lg:flex lg:flew-wrap  p-1.5 m-2 lg:m-4 md:p-2.5 bg-teal-300">
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => handleTabClick(value, label)}
              className="text-xs lg:text-sm font-bold md:py-2 md:my-1"
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
          {InitialsRecipes.length > 0 && (
            <h1 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-center p-8 text-teal-50 capitalize">
              &quot;Delight in {InitialsRecipes.length} Recipes: Starting with
              <span className=""> {Initials}</span>&quot;
            </h1>
          )}
        </div>

        {data.map(({ value, Recipes }) => (
          <TabPanel
            id="ProductListWindow"
            key={value}
            value={value}
            className={
              Recipes.length > 0 &&
              `overflow-auto  p-0 pb-4 grid justify-items-center gap-4 grid-cols-2 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-4 2xl:grid-cols-5 justify-center`
            }
            style={{ minHeight: "300px" }}
          >
            {Recipes && Recipes.length > 0 ? (
              Recipes.map((recipe, index) => (
                <RecipeCard key={index} data={recipe} Loading={isLoading} />
              ))
            ) : (
              <p className="text-center text-xl md:text-2xl lg:text-3xl font-bold mt-24 lg:mt-32 text-teal-50">
                Sorry, there are currently no recipes starting with the letter
                &quot;{Initials}
                &quot;.
              </p>
            )}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default InitialsList;
