import { useLoaderData } from "react-router-dom";
// import img1 from "../assets/1.jpeg";
import SingleFruit from "../component/Home/SingleFruit";

const AllFruits = ({fruit}) => {
  const data=useLoaderData();
  console.log(fruit)
  return (
    <>
      <section className="text-gray-600 body-font mt-10">
        <h2 className="text-center text-5xl text-info font-bold">
        All Organic Fruit 
        </h2>
        <div className="h-1 bg-info w-1/5 mx-auto opacity-30 mt-4"></div>
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
          {
                // eslint-disable-next-line react/prop-types
                data.map((fruit) => (
                  // eslint-disable-next-line react/prop-types
                  <SingleFruit key={fruit._id} fruit={fruit} />
                ))
              }
          </div>
        </div>
      </section>
    </>
  );
};

export default AllFruits;
