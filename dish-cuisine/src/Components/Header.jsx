import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavoriteRecipesContext } from "../main";

import {
  Collapse,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  IconButton,
  Badge,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/outline";

import mainLogo from "../Assets/mainLogo.png";

// nav list menu
const navListMenuItems = [
  {
    title: "Search Meals",
    path: "#searchrecipe",
  },
  {
    title: "Random Recipes",
    path: "#latest",
  },
  {
    title: "Categories",
    path: "#categories",
  },
  {
    title: "By initials",
    path: "#byinitial",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map(({ title, path }) => (
    <a href={`/${path}`} key={title}>
      <MenuItem className="bg-[#FAFAD5] hover:bg-[#FAFAD5] lg:bg-[#fdfca8] lg:hover:bg-[#FFFE8E]">
        <Typography
          variant="h6"
          className="text-green-600 bg-[#FAFAD5]  lg:bg-[#fdfca8] mb-1 p-2 rounded-lg hover:bg-[#B3FF67] hover:text-green"
        >
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as={NavLink}
            to="/"
            variant="small"
            className="font-normal"
          >
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-green-600 lg:flex font-bold text-base lg:text-xl hover:bg-[#B3FF67] hover:text-green"
            >
              <img
                src="https://img.icons8.com/ios/50/home.png"
                alt=""
                className="h-[18px] w-[18px]"
              />
              Home
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[36rem] grid-cols-7 gap-3 bg-[#FFFE8E] lg:grid"
        >
          <Card
            color="green"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center "
          >
            <img src={mainLogo} className="h-28 w-28  rounded-full" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1 ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <NavLink to="/">
        <MenuItem className="flex items-center gap-2 text-green-600 hover:bg-[#B3FF67] hover:text-green lg:hidden font-bold text-base lg:text-xl">
          <img
            src="https://img.icons8.com/ios/50/home.png"
            alt=""
            className="h-[18px] w-[18px] "
          />
          Home
        </MenuItem>
      </NavLink>
      <ul className="ml-6 flex  flex-col gap-1 lg:hidden">{renderItems}</ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Category",
    path: "category",
    imgIcon: "https://img.icons8.com/ios/50/category.png",
  },
  {
    label: "Regional Recipes",
    path: "area",
    imgIcon: "https://img.icons8.com/cotton/64/location--v2.png",
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, imgIcon, path }) => (
        <Typography
          key={label}
          as={NavLink}
          to={`/${path}`}
          variant="small"
          color="green"
          className="font-normal  "
        >
          <MenuItem className="flex items-center gap-2 font-bold text-base lg:text-lg hover:bg-[#B3FF67] hover:text-green">
            <img src={imgIcon} alt="" className="h-[18px] w-[18px]" />
            {label}
          </MenuItem>
        </Typography>
      ))}
      {/* <WishList /> */}
    </ul>
  );
}

function WishList() {
  const { favoriteRecipes } = useContext(FavoriteRecipesContext);
  return (
    <Typography
      as={NavLink}
      to={`/favourite`}
      variant="small"
      className="ml-auto"
    >
      <Badge
        content={favoriteRecipes.length}
        className="bg-[#fc3d3d] text-white font-semibold"
      >
        <Button className="bg-[#B3FF67] text-green-600 flex items-center justify-between font-bold text-[10px] sm:text-xs md:text-sm py-2 px-4 ">
          My Favorites
        </Button>
      </Badge>
    </Typography>
  );
}

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  const totheTop = () => {
    const componentsElement = document.getElementById("components");
    componentsElement.scrollTop = 0;
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <nav
      id="header"
      className="w-full px-4 md:px-10 bg-[#FAFAD5] lg:bg-[#fdfca8]"
    >
      <div
        className="relative flex justify-between items-center h-[12vh] lg:h-[16vh]"
        // style={{ height: "16vh" }}
      >
        <Typography
          as={NavLink}
          to="/"
          onClick={totheTop}
          color="green"
          className="py-1.5 flex flex-col md:flex-row justify-center items-center bg-[#B3FF67] bg-opacity-50 px-4 rounded-xl shadow-xl shadow-green-900/50 "
        >
          <h1 className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-green-600 md:mr-4 ">
            Dish Cuisine
          </h1>
          <img
            src={mainLogo}
            alt="mainLogo"
            className="w-12 md:w-14 rounded-lg"
          />
        </Typography>
        <div className="ml-auto hidden  lg:block">
          <NavList />
        </div>
        <WishList />
        <IconButton
          size="sm"
          color="lime"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-4 sm:ml-10 mr-4 lg:mr-0 lg:hidden lg:w-1"
        >
          <Bars3Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <Collapse open={isNavOpen} className="">
        <NavList />
      </Collapse>
    </nav>
  );
}
export default Header;
