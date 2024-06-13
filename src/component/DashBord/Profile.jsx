import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const {user } = useAuth();

  
  return (
    <>
      <Link to={'/dashboard/editProfile'}>
        <h1>profile {user.displayName}</h1>
      </Link>{" "}

      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
        <div className="mb-2 h-2 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
          <img src={user.photoURL} />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg ">{user.displayName}</div>
          <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{user.email}</p>

          {/* <!-- social - start --> */}
          <div className="flex justify-center">
            <div className="flex gap-4">
              <Link to='/dashboard/editProfile'className="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 btn btn-sm btn-info rounded">
                Edit
              </Link>
            </div>
          </div>
          {/* <!-- social - end --> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
