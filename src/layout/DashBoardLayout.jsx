import Navbar from "../component/Home/Navbar";
import Footer from "../component/Home/Footer";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashBoardLayout;
