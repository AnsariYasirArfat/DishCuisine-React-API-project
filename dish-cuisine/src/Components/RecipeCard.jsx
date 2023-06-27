import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

function ProductCard({ Product }) {
  return (
    <>
      <Card className="bg-teal-50 hover:bg-white justify-between w-40 h-60 md:w-44 md:h-72 lg:w-56 lg:h-80 2xl:w-64 2xl:h-[352px] bg-opacity-[0.87] hover:bg-opacity-100 shadow-lg shadow-teal-900/60 hover:shadow-xl hover:shadow-teal-900/80 ">
        <CardHeader
          shadow={true}
          floated={false}
          className="h-36 md:h-40 lg:h-48  2xl:h-56 m-1 lg:m-2"
        >
          <NavLink to={`/recipepage`}>
            <img
              src={Product.Image}
              className="w-full h-full object-center object-cover shadow-2xl shadow-teal-950/50 hover:scale-110 ease-in-out duration-100 "
            />
          </NavLink>
        </CardHeader>
        <CardBody className="px-4 py-0 lg:px-5">
          <Typography
            color="teal"
            className="text-xs md:text-sm lg:text-base font-semibold capitalize "
          >
            Mushroom soup with buckwheats
          </Typography>
        </CardBody>
        <CardFooter className="px-1 py-2 md:px-2 lg:p-3 ">
          <NavLink to={`/recipepage`}>
            <Button
              fullWidth={true}
              className="text-[10px] md:text-[11px] lg:text-xs  2xl:text-sm p-0 bg-teal-100 text-teal-600 hover:shadow-none"
            >
              <div className="flex items-center justify-between px-2 py-2 ">
                <Typography className="text-xs md:text-sm lg:text-base font-semibold text-teal-400 normal-case">
                  Category:
                </Typography>
                <p
                  color="teal"
                  className="text-[10.5px] md:text-xs lg:text-sm font-medium normal-case underline"
                >
                  Miscellaneous
                </p>
              </div>
            </Button>
          </NavLink>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  Product: PropTypes.object,
};

// <CardFooter className="p-0  h-20">
//   <NavLink to={`/productpage`}>
//     <Button
//       fullWidth={true}
//       className="h-full rounded-t-none text-ellipsis overflow-hidden hover:text-clip whitespace-normal text-[10px] md:text-[11px] lg:text-xs 2xl:text-sm  p-0 bg-teal-100 text-teal-600 hover:shadow-none"
//     >
//       Mushroom soup with buckwheat soup soup soup soup soup soup soup
//       soup soup soup soup soup soup soup soup soup buckw heat soup
//       buckwheat
//       {/* <ArrowLongRightIcon
//         strokeWidth={2}
//         className="w-3 md:w-4 lg:w-5"
//       /> */}
//     </Button>
//   </NavLink>
// </CardFooter>
