import { Outlet } from "react-router-dom";
import SearchComp from "../components/SearchComp";
import HeaderComp from "../components/HeaderComp";
import Footer from "../layout/Footer";

function HomePage() {
  return (
    <>
     <HeaderComp/>
      <SearchComp />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomePage;
