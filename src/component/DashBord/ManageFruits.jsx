import { useEffect, useState } from "react";
import FruitRow from "./FruitRow";

const ManageFruits = () => {
  const [fruits, setFruits] = useState([]);


  useEffect(() => {
    fetch("https://organic-fruit-house-server-site.vercel.app/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  const handleDeleteFruit = (id) => {
    // eslint-disable-next-line no-unused-vars
    setFruits(fruits.filter((fruit) => fruits._id !== id));
  };

  console.log(fruits);
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Kg</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fruits.map((fruit) => (
              <FruitRow
                key={fruit._id}
                fruit={fruit}
                onDelete={handleDeleteFruit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageFruits;
