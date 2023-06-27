import { useState, useEffect } from "react";
import PopularRecipes from "./PopularRecipes";
import productImage from "../Assets/product.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const AddedToWishList = () => {
    setIsWishlisted(true);
  };
  const RemoveFromWishList = () => {
    setIsWishlisted(false);
  };
  return (
    <>
      <Card className="flex-col md:flex-row  m-4">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-full md:w-2/5 shrink-0 m-0 "
        >
          <img
            src={productImage}
            alt="image"
            className="w-full h-full object-center object-cover hover:scale-105 ease-in-out duration-500"
          />
        </CardHeader>
        <CardBody className="w-full md:w-3/5">
          <Typography variant="h6" color="blue" className="uppercase mb-4">
            Category: Breakfast
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Mushroom soup with buckwheats soup
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            tempore consequuntur sunt adipisci minima molestias perferendis
            laboriosam illum dolorem porro?
          </Typography>

          {isWishlisted ? (
            <Button
              onClick={RemoveFromWishList}
              className="w-40 md:w-48 xl:w-52 h-10 text-[9px] md:text-[11px] xl:text-xs md:py-3 bg-red-50 text-red-500 shadow-none"
            >
              Remove from WishList
            </Button>
          ) : (
            <Button
              onClick={AddedToWishList}
              className="w-40 md:w-48 xl:w-52 h-10 text-[9px] md:text-[11px] xl:text-xs  md:py-3 bg-teal-100 text-teal-800 shadow-none"
            >
              Add to WishList
            </Button>
          )}
        </CardBody>
      </Card>
      <PopularRecipes />
    </>
  );
}

export default ProductPage;
