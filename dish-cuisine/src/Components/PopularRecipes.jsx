import productImage from "../Assets/product.jpg";
import RecipeCard from "./RecipeCard";
function PopularProduct() {
  const popularProducts = [
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
  ];
  return (
    <>
      <section
        id="latest"
        className="my-8 mx-3 sm:mx-6 md:mx-8 lg:mx-5 p-5 bg-teal-300 rounded-lg"
      >
        <h1 className="pb-5 lg:pb-10 text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl  font-bold text-center text-teal-50">
          Popular Recipes
        </h1>
        <div className="pb-8 flex flex-wrap justify-center gap-4 sm:gap-9 md:gap-3 lg:gap-x-3 xl:gap-x-12 2xl:gap-x-16">
          {popularProducts.map((popularProduct) => {
            return (
              <RecipeCard key={popularProduct.Name} Product={popularProduct} />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default PopularProduct;
