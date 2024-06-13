import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

const EditProfile = () => {
  const data = useLoaderData();
  console.log(data);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const age = form.age.value;
    const password = form.password.value;

    const userData = {
      name,
      age,
      password,
    };
    console.log(userData);
    fetch(`https://organic-fruit-house-server-site.vercel.app/user/${data?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        toast.success('Successful ')
        form.reset();
      });

  };

  return (
    <>
      <div className="w-full px-16 mt-9">
        <h1 className="text-4xl mb-4 text-center">
          Update Your Profile <span className="text-info"> {data?.name}</span>
        </h1>
        <form className="w-full" onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="">Name </label>
            <input
              type="text"
              name="name"
              defaultValue={data?.name}
              className="w-full py-3 px-5 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Email Address </label>
            <input
              type="email"
              name="email"
              defaultValue={data?.email}
              disabled
              className="w-full py-3 px-5 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={data?.password}
              // disabled
              className="w-full py-3 px-5 border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Age</label>
            <input
              type="number"
              name="age"
              defaultValue={data?.age}
              // disabled
              className="w-full py-3 px-5 border"
            />
          </div>

          <div className="mb-4">
            <input
              type="submit"
              value={"Update Profile"}
              className="w-full btn btn-info text-white py-3 px-5 border"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
