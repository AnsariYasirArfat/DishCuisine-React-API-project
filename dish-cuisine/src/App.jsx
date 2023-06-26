import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-white sm:bg-red-200 md:bg-green-300 lg:bg-yellow-200 xl:bg-blue-400 2xl:bg-teal-100">
        <Header />
        <div className="overflow-auto" style={{ height: "88vh" }}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
