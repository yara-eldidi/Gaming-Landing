import { Outlet } from "react-router-dom";
import HeaderComp from "../components/headerComp";
import SearchComp from "../components/SearchComp";
import Footer from "../layout/footer";

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
