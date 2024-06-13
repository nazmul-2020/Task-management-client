import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleFruit = ({ fruit }) => {
  // eslint-disable-next-line react/prop-types
  const { _id,img, name, quantity, price } = fruit;
  return (
    <>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={img}
            alt="blog"
          />
          <div className="p-4">
            <h1 className="title-font text-2xl font-bold text-gray-900 mb-">
              {name}
            </h1>
            <div className="flex justify-between flex-wrap">
              <p className="leading-relaxed mb-3 font-bold">{price} BDT</p>
              <p className="leading-relaxed mb-3 font-bold">{quantity} kg</p>
            </div>
            <div className="flex items-center justify-center flex-wrap ">
              <Link
                to={`/fruits/${_id}`}
                className="text-white inline-flex items-center md:mb-2 lg:mb-0 btn btn-sm btn-info rounded"
              >
                Details
              </Link>

              {/* <span className="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 btn btn-sm btn-info rounded">
                <Link to="">Edit</Link>
              </span>

              <span className="text-white inline-flex items-center leading-none text-sm btn btn-sm btn-error rounded">
                <Link to="">Delete</Link>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleFruit;
