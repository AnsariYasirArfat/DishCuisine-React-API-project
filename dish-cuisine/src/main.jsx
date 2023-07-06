import React, { createContext, useState, useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import MainBody from "./Components/MainBody";
import CategoryList from "./Components/CategoryList";
import RecipePage from "./Components/RecipePage";
import CountryList from "./Components/CountryList";
import FavouriteRecipes from "./Components/FavouriteRecipes";

// Create a context for managing favorite recipes
export const FavoriteRecipesContext = createContext({
  favoriteRecipes: [],
  updatedFavoriteRecipes: () => {},
});

const MainSection = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<MainBody />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/area" element={<CountryList />} />
        <Route path="/recipepage" element={<RecipePage />} />
        <Route path="/favourite" element={<FavouriteRecipes />} />
      </Route>
    </>
  )
);

const Root = () => {
  // Getting the data from localStorage
  let favoriteList;
  if (localStorage.getItem("favRecipes") === null) {
    favoriteList = [];
  } else {
    favoriteList = JSON.parse(localStorage.getItem("favRecipes"));
  }
  const [favoriteRecipes, setFavoriteRecipes] = useState(favoriteList);

  const updatedFavoriteRecipes = (recipes) => {
    setFavoriteRecipes(recipes);
  };

  console.log("favorite main", favoriteRecipes);
  // To store the data in string format in local storage
  useEffect(() => {
    localStorage.setItem("favRecipes", JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  return (
    <React.StrictMode>
      {/* Provide the favorite recipes context */}
      <FavoriteRecipesContext.Provider
        value={{ favoriteRecipes, updatedFavoriteRecipes }}
      >
        <ThemeProvider>
          <RouterProvider router={MainSection}>
            <App />
          </RouterProvider>
        </ThemeProvider>
      </FavoriteRecipesContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
