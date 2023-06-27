import { useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import productImage from "../Assets/product.jpg";
import RecipeCard from "./RecipeCard";

function ProductList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      label: "All",
      value: "all",
      products: [
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
      ],
    },
    {
      label: "Breakfast",
      value: "breakfast",
      products: [
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
      ],
    },
    {
      label: "Miscellaneous",
      value: "miscellaneous",
      products: [
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
        {
          Image: productImage,
        },
      ],
    },
  ];

  return (
    <section>
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-center p-4 text-teal-800">
          Products
        </h1>
      </div>
      <Tabs
        id="custom-animation"
        value="all"
        className="flex flex-col xl:flex-row py-4 "
      >
        <div className=" bg-teal-200 rounded-lg mx-4 mb-8 xl:mb-0 xl:mx-4 shadow-lg shadow-teal-900/60">
          <h1 className="pt-2 text-center text-base lg:text-xl text-teal-700 font-bold">
            Category:
          </h1>
          <TabsHeader className="flex flex-row xl:flex-col p-1.5 m-2 lg:m-4 md:p-2.5 xl:w-36 2xl:w-44 bg-teal-300">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
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
              {products.map((product) => {
                return <RecipeCard key={product.Name} Product={product} />;
              })}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}

export default ProductList;
