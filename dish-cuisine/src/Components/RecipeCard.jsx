import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import RecipeCardLoader from "./RecipeCardLoader";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

function RecipeCard({ data, Loading }) {
  if (Loading) {
    return <RecipeCardLoader />;
  } else {
    return (
      <>
        <Card className="rounded-2xl bg-teal-50 hover:bg-white justify-between w-40 h-64 md:w-44 md:h-72 lg:w-56 lg:h-80 2xl:w-64 2xl:h-[368px] bg-opacity-[0.87] hover:bg-opacity-100 shadow-lg shadow-teal-900/60 hover:shadow-xl hover:shadow-teal-900/80 ">
          <CardHeader
            shadow={true}
            floated={false}
            className="h-36 md:h-40 lg:h-48 2xl:h-56 m-1 lg:m-2 lg:mb-0"
          >
            <NavLink
              to={{
                pathname: "/recipepage",
                search: `?value=${data.idMeal}`,
              }}
            >
              <img
                src={data.strMealThumb}
                className="w-full h-full object-center object-cover shadow-2xl shadow-teal-950/50 hover:scale-105 ease-in-out duration-500 "
              />
            </NavLink>
          </CardHeader>
          <CardBody className="p-0 lg:px-5 text-center">
            <Typography
              color="teal"
              className="text-xs md:text-sm lg:text-[15px] 2xl:text-base font-semibold capitalize"
            >
              {data.strMeal}
            </Typography>
          </CardBody>
          <CardFooter className="p-1 lg:p-2">
            <NavLink
              to={{
                pathname: "/recipepage",
                search: `?value=${data.idMeal}`,
              }}
            >
              <Button
                fullWidth={true}
                className="text-[10px] md:text-[11px] lg:text-xs rounded-xl 2xl:text-sm p-0 bg-teal-100 text-teal-600 hover:shadow-none"
              >
                <div className="flex items-center justify-between p-2">
                  <Typography className="text-xs md:text-sm lg:text-base font-semibold text-teal-400 normal-case">
                    Category:
                  </Typography>
                  <p
                    color="teal"
                    className="text-[10.5px] md:text-xs lg:text-sm font-medium capitalize underline"
                  >
                    {data.strCategory}
                  </p>
                </div>
              </Button>
            </NavLink>
          </CardFooter>
        </Card>
      </>
    );
  }
}

export default RecipeCard;

RecipeCard.propTypes = {
  data: PropTypes.object,
  Loading: PropTypes.bool,
};
