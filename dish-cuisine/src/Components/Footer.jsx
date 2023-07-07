import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import mainLogo from "../Assets/mainLogo.png";

function Footer() {
  const LINKS = [
    {
      title: "Pages ",
      items: [
        { label: "Home", path: "" },
        { label: "Category", path: "category" },
        { label: "Regional Recipes", path: "area" },
      ],
    },
  ];
  const gotheTop = () => {
    const componentsElement = document.getElementById("components");
    componentsElement.scrollTop = 0;
  };
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="relative w-full bg-lime-800 py-6">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="grid grid-cols-1 justify-between md:grid-cols-2">
            <Typography className="mb-6 ">
              <div>
                <NavLink
                  to="/"
                  onClick={gotheTop}
                  className="cursor-pointer flex items-center w-fit"
                >
                  <img
                    src={mainLogo}
                    alt="mainLogo"
                    className="w-12 rounded-full mr-4 "
                  />
                  <h1 className="text-xl font-bold text-[#B3FF67]">
                    Dish Cuisine
                  </h1>
                </NavLink>
              </div>
            </Typography>

            <div className="grid grid-cols-2 justify-between gap-6">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="lime"
                    className="mb-3 text-lime-300 sm:font-bold"
                  >
                    {title}
                  </Typography>
                  {items.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        to={`/${item.path}`}
                        color="gray"
                        onClick={gotheTop}
                        className="w-fit py-2 sm:font-semibold transition-colors text-green-50 hover:text-lime-400 hover:underline "
                      >
                        <p>{item.label}</p>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-lime-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-semibold text-lime-900 md:mb-0"
            >
              &copy; {currentYear}
              <a href="/" className="hover:text-lime-100 hover:underline mx-1 ">
                Dish Cuisine Recipes
              </a>
              All Rights Reserved.
            </Typography>
            <div className="flex gap-4 text-lime-900 sm:justify-center p-1 bg-lime-200 hover:bg-lime-50 rounded-md">
              {/* GitHub */}
              <Typography
                as="a"
                href="https://github.com/AnsariYasirArfat"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <img
                  alt="github"
                  width={30}
                  src="https://img.icons8.com/windows/32/null/github.png"
                />
              </Typography>
              {/* LinkedIn */}
              <Typography
                as="a"
                href="https://www.linkedin.com/in/yaseer-ansari-364a25262/"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <img
                  src="https://img.icons8.com/color/48/null/linkedin.png"
                  alt="Linkedin"
                  width={30}
                />
              </Typography>
              {/* Hashnode */}
              <Typography
                as="a"
                href="https://ansariyasirarfat.hashnode.dev/"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <img
                  src="https://img.icons8.com/color/48/null/hashnode.png"
                  alt="hashnode"
                  width={30}
                />
              </Typography>
              <Typography
                as="a"
                href="#top"
                onClick={gotheTop}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <img
                  src="https://img.icons8.com/fluency/48/null/double-up.png"
                  width={25}
                  alt="Back to Top"
                />
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
