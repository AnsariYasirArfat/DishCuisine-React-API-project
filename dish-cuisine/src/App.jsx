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
      <div className="">
        <Header />
        <div
          id="components"
          className="lg:overflow-auto lg:h-[84vh] bg-[#FAFAD5] lg:bg-[#fdfca8]"
        >
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
