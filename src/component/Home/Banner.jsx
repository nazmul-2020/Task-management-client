import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner text">
      <div className="overlay  flex justify-center items-center">
        <div className="w-1/2 text-center">
          <h1>100% FRESH & ORGANIC</h1>
          <p className="mb-3">
            Organic and responsibly sourced food is what the modern customer
            demands. These name suggestions have the flexibility to provide you
            with ideas for an organic packaged good product, restaurant, food
            truck other anything else.
          </p>
          <button type="button" className="rounded-md btn btn-outline btn-sm btn-info text-white ">
            <Link to="/dashboard">Explore more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
