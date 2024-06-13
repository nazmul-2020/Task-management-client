import { Outlet } from "react-router-dom";
import Navbar from "../component/Home/Navbar";
import Footer from "../component/Home/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
