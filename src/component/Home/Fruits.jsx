import SingleFruit from "./SingleFruit";

// eslint-disable-next-line react/prop-types
const Fruits = ({ data }) => {
  console.log(data);
  return (
    <>
      <h2 className="text-center text-5xl text-info font-bold">
        Our Organic Fruit
      </h2>
      <div className="h-1 bg-info w-1/5 mx-auto opacity-30 mt-4"></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {
                // eslint-disable-next-line react/prop-types
                data.slice(0, 3).map((fruit) => (
                  <SingleFruit key={fruit._id} fruit={fruit} />
                ))
              }
          </div>
        </div>
      </section>
    </>
  );
};

export default Fruits;
