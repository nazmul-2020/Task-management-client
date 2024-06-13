/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditFruit = () => {
  const fruit = useLoaderData();
  console.log(fruit);
  const [name] = useState(fruit.name);
  // eslint-disable-next-line no-unused-vars
  const [price, setPrice] = useState(fruit.price);
  const [quantity] = useState(fruit.quantity);
  const [details, setDetails] = useState(fruit.details);
  const [img, setImg] = useState(fruit.img);

  const handleUpdateFruit = async (e) => {
    const token =localStorage.getItem('token')
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const details = form.details.value;
    const img = form.img.value;
    console.log(name, img, details, price, quantity);

    const data = { name, img, details, price, quantity };
    await fetch(
      `https://organic-fruit-house-server-site.vercel.app/fruits/${fruit._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization:`Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then(() => {
        toast.success("Successful Update fruit");
        form.reset();
      });
  };

  return (
    <>
      <div className="w-full px-16 mt-9">
        <h1 className="text-4xl mb-4 text-center">
          Update Fruit <span className="text-info"> {name}</span>
        </h1>
        <form className="w-full" onSubmit={handleUpdateFruit}>
          <div className="mb-4">
            <label htmlFor="">Name </label>
            <input
              type="text"
              name="name"
              value={name}
              className="w-full py-3 px-5 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Price </label>
            <input
              type="number"
              name="price"
              value={price}
              className="w-full py-3 px-5 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Quantity </label>
            <input
              name="quantity"
              type="number"
              value={quantity}
              className="w-full py-3 px-5 border"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="">Img Url </label>
            <input
              name="img"
              value={img}
              id=""
              className="w-full py-3 px-5 border"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="">Details</label>
            <textarea name="details" value={details} className="w-full py-3 px-5 border" />
          </div>

          <div className="mb-4">
            <input
              type="submit"
              value={"Update"}
              className="w-full btn btn-info py-3 px-5 border"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditFruit;
