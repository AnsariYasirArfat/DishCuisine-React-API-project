import ContentLoader from "react-content-loader";

const RecipeCardLoader = () => (
  <ContentLoader
    speed={2}
    // backgroundColor="#052e16"
    // foregroundColor="#052e16"
    backgroundColor="#dcfce7"
    foregroundColor="#86efac"
    className="flex flex-col justify-between bg-teal-50 rounded-2xl w-40 h-64 md:w-44 md:h-72 lg:w-56 lg:h-80 2xl:w-64 2xl:h-[368px] shadow-xl shadow-teal-900/60 "
  >
    <rect
      y="2"
      rx="15"
      ry="15"
      width="100"
      className="w-40 md:w-44  lg:w-56  2xl:w-64 h-36 md:h-40 lg:h-48 2xl:h-56 "
    />
    <rect
      y="170"
      rx="0"
      ry="0"
      height="30"
      className="w-40 md:w-44  lg:w-56  2xl:w-64 "
    />
    <rect
      y="230"
      rx="11"
      ry="11"
      width="164"
      height="60"
      className="w-40 md:w-44  lg:w-56  2xl:w-64 "
    />
    <rect
      y="320"
      rx="11"
      ry="11"
      width="164"
      height="35"
      className="w-40 md:w-44  lg:w-56  2xl:w-64 "
    />
  </ContentLoader>
);
export default RecipeCardLoader;
