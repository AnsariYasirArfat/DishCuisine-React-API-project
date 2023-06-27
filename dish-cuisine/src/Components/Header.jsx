import React from "react";
import { NavLink } from "react-router-dom";

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
    title: "Latest Recipes",
    path: "#latest",
  },
  {
    title: "Category",
    path: "#",
  },
  {
    title: "By initial",
    path: "#",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map(({ title, path }) => (
    <a href={`${path}`} key={title}>
      <MenuItem>
        <Typography
          variant="h6"
          className="text-teal-700 bg-teal-50 mb-1 p-2 rounded-lg"
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
              className="hidden items-center gap-2 text-teal-600 lg:flex font-bold text-base lg:text-xl"
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
          className="hidden w-[36rem] grid-cols-7 gap-3  lg:grid"
        >
          <Card
            color="teal"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center"
          >
            <img src={mainLogo} className="h-28 w-28  rounded-full" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <NavLink to="/">
        <MenuItem className="flex items-center gap-2 text-teal-600 lg:hidden font-bold text-base lg:text-xl">
          <img
            src="https://img.icons8.com/ios/50/home.png"
            alt=""
            className="h-[18px] w-[18px]"
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
    imgIcon: "https://img.icons8.com/ios/50/country.png",
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
          color="teal"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 font-bold text-base lg:text-lg">
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
  return (
    <Typography
      as={NavLink}
      to={`/WishList`}
      variant="small"
      color="teal"
      className="ml-auto"
    >
      <Badge content="0" color="teal">
        <Button
          className="flex items-center justify-between font-bold text-[10px] sm:text-xs md:text-sm py-2 px-4 "
          color="green"
        >
          My Favorites
        </Button>
      </Badge>
    </Typography>
  );
}

function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <nav
      id="header"
      className="sticky top-0 z-50 w-full px-4 md:px-10 bg-teal-50 text-red-600"
    >
      <div
        className="relative  flex justify-between items-center text-blue-gray-900"
        style={{ height: "12vh" }}
      >
        <Typography
          as={NavLink}
          to="/"
          className="ml-2 cursor-pointer py-1.5 flex flex-col md:flex-row justify-center items-center"
        >
          <h1 className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-teal-800 md:mr-4 ">
            Dish Cuisine
          </h1>
          <img
            src={mainLogo}
            alt="mainLogo"
            className="w-10 md:w-12 rounded-full "
          />
        </Typography>
        <div className="ml-auto hidden  lg:block">
          <NavList />
        </div>
        <WishList />
        <IconButton
          size="sm"
          color="teal"
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
