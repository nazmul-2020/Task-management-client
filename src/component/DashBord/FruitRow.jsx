/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const FruitRow = ({ fruit, onDelete }) => {
  const token = localStorage.getItem("token");

  // eslint-disable-next-line react/prop-types
  const { _id, name, price, quantity, img } = fruit;

  const handleDelete = async () => {
    await fetch(
      `https://organic-fruit-house-server-site.vercel.app/fruits/${_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        toast.delete("Successful Delete");
        onDelete(_id);
      });
  };

  return (
    <>
      <tr>
        <th>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={img} />
            </div>
          </div>
        </th>
        <th>{name}</th>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <span className="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 btn btn-sm btn-info rounded">
            <Link to={`/dashboard/editFruit/${_id}`}>Edit</Link>
          </span>

          <span
            className="text-white inline-flex items-center leading-none text-sm btn btn-sm btn-error rounded"
            onClick={handleDelete}
          >
            Delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default FruitRow;
