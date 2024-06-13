import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashBoardLayout = () => {
  const { logout} = useAuth();
  
  const handleLogout = async () => {
    await logout();
  };
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
            {/* Sidebar content here */}
            <div>
              <li>
                <NavLink to={"/dashboard/manageFruits"}>Manage All Fruits</NavLink>
              </li>
              <li>
                <Link to={"/dashboard/addFruit"}>Add Fruit</Link>
              </li>
              {/* <li>
                <Link to={"/dashboard/profile"}>Profile </Link>
              </li> */}
            </div>
            <div className="flex gap-4">
              <NavLink to={"/"} className="btn btn-neutral">
                Home
              </NavLink>
              <button onClick={handleLogout} className="btn btn-error">Logout</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
