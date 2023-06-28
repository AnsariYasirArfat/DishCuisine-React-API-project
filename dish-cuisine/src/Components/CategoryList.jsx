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

function ProductList() {
  const [Category, setCategory] = useState("Breakfast");
  const [CategoryRecipes, setCategoryRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function getCategoryRecipes() {
      try {
        const CategoryList = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`
        );
        const recipes = CategoryList.data.meals.map((recipe) => ({
          ...recipe,
          strCategory: Category,
        }));
        console.log(recipes);
        setCategoryRecipes(recipes);
        setIsLoading(false);
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
      products: CategoryRecipes,
    },
    {
      label: "Dessert",
      value: "dessert",
      products: CategoryRecipes,
    },
    {
      label: "Starter",
      value: "starter",
      products: CategoryRecipes,
    },
    {
      label: "Vegan",
      value: "vegan",
      products: CategoryRecipes,
    },
    {
      label: "Vegetarian",
      value: "vegetarian",
      products: CategoryRecipes,
    },
    {
      label: "Chicken",
      value: "chicken",
      products: CategoryRecipes,
    },
    {
      label: "Side",
      value: "side",
      products: CategoryRecipes,
    },
    {
      label: "Seafood",
      value: "seafood",
      products: CategoryRecipes,
    },
    {
      label: "Goat",
      value: "goat",
      products: CategoryRecipes,
    },
    {
      label: "Pasta",
      value: "pasta",
      products: CategoryRecipes,
    },
    {
      label: "Miscellaneous",
      value: "miscellaneous",
      products: CategoryRecipes,
    },
  ];
  const handleTabClick = (value, label) => {
    setCategory(label || value);
  };
  return (
    <section>
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center p-4 text-teal-800 capitalize">
          {Category}
        </h1>
      </div>
      <Tabs
        id="custom-animation"
        value="breakfast"
        className="flex flex-col xl:flex-row py-4 "
      >
        <div className=" bg-teal-200 rounded-lg mx-4 mb-8 xl:mb-0 xl:mx-4 shadow-lg shadow-teal-900/60">
          <h1 className="pt-2 text-center text-base lg:text-xl text-teal-700 font-bold">
            Category:
          </h1>
          <TabsHeader className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-1 p-1.5 m-2 lg:m-4 md:p-2.5 xl:w-36 2xl:w-44 bg-teal-300">
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
            initial: { y: 400 },
            mount: { y: 0 },
            unmount: { y: 400 },
          }}
        >
          {data.map(({ value, products }) => (
            <TabPanel
              id="ProductListWindow"
              key={value}
              value={value}
              className="overflow-auto pt-0 pb-4 grid justify-items-center gap-6 grid-cols-2 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-y-16 justify-center"
              style={{ height: "680px" }}
            >
              {products.map((recipe, index) => {
                return <RecipeCard key={index} data={recipe} />;
              })}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}

export default ProductList;
