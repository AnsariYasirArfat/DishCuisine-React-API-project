import React from "react";
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

const MainSection = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<MainBody />} />
        <Route path="category" element={<CategoryList />} />
        <Route path="area" element={<CountryList />} />
        <Route path="recipepage" element={<RecipePage />} />
      </Route>
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={MainSection} />
    </ThemeProvider>
  </React.StrictMode>
);
