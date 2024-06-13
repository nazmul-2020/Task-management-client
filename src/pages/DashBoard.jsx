// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const DashBoard = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://organic-fruit-house-server-site.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  console.log(userInfo);

  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">Your Profile {user?.name}</h1>

      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
       
        <div className="avatar">
          <div className="w-32 rounded-full shadow-lg">
            <img src={user?.photoURL} />
          </div>
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg ">
            {userInfo?.name}
          </div>
          <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
            {userInfo?.email}
          </p>

          {/* <!-- social - start --> */}
           <div className="flex justify-center">
            <div className="flex gap-4">
              <Link
                to={`/dashboard/editProfile/${userInfo?._id}`}
                className="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 btn btn-sm btn-info rounded"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
    </div>  
    </>
  );
};

export default DashBoard;
