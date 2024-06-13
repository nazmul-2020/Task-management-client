// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex-col space-y-4 text-left px-6">
        <div className="text-7xl font-bold text-violet-700">404</div>
        <div className="text-stone-500 font-medium">
          <p>Oops, you still haven't found what you lookng for?</p>
        </div>
        <div className="flex space-x-4 items-center justify-start">
          <Link to="/">
            <div className="text-sm font-medium ">
              <button className="btn btn-info text-white">
                Back to Home Page
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
