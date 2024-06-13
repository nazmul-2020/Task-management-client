import { useLoaderData } from "react-router-dom";

const FruitDetails = () => {
  const fruit = useLoaderData();
  const { img, name, details } = fruit;
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 underline">
              {name}
            </h1>
            <p className="mb-8 leading-relaxed">{details}</p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
               Buy Now
              </button>
              <dialog id="my_modal_2" className="modal ">
                <div className="modal-box bg-cyan-300">
                  <p className="py-4 font-bold text-lg text-center ">Coming soon ......!! </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FruitDetails;
