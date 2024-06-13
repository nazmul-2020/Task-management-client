import toast from "react-hot-toast";

const AddFruit = () => {
  const token = localStorage.getItem("token");

  const handleCreateFruit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const details = form.details.value;
    const img = form.img.value;
    console.log(name, img, details, price, quantity);

    const data = { name, img, details, price, quantity };

    await fetch("https://organic-fruit-house-server-site.vercel.app/fruits", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        toast.success("Successful Add fruit");
        form.reset();
      });
  };

  return (
    <>
      <div className="w-full px-16 mt-9">
        <h1 className="text-4xl mb-4 text-center">Add a Fruit</h1>
        <form className="w-full" onSubmit={handleCreateFruit}>
          <div className="mb-4">
            <label htmlFor="">Name </label>
            <input
              type="text"
              name="name"
              className="w-full py-3 px-5 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Price </label>
            <input
              type="number"
              name="price"
              className="w-full py-3 px-5 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Quantity </label>
            <input
              name="quantity"
              type="number"
              className="w-full py-3 px-5 border"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="">Img Url </label>
            <input name="img" id="" className="w-full py-3 px-5 border"></input>
          </div>

          <div className="mb-4">
            <label htmlFor="">Details</label>
            <textarea name="details" className="w-full py-3 px-5 border" />
          </div>

          <div className="mb-4">
            <input
              type="submit"
              value={"Add Fruit"}
              className="w-full btn py-3 px-5 border btn-error"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFruit;
