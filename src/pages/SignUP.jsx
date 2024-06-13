import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../assets/Banner.jpg";
import GoogleLogin from "../component/Login-Registration/GoogleLogin ";
import useAuth from "../hooks/useAuth";

const SignUP = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    console.log(email, password, confirm_password, name, img);

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    if (password === confirm_password) {
      createUser(email, password).then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            name: name,
            password:password,
          };
          fetch("https://organic-fruit-house-server-site.vercel.app/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
      if (user) {
        navigate(from);
      }
    }
    form.reset();
  };

  return (
    <>
      <div className="flex min-h-full flex-1">
        {/* {showToast && ( */}
        {/* <div className="toast toast-end">
          <div className="alert alert-success">
            <span>You have been registered successfully.</span>
          </div>
        </div> */}
        {/* )}*/}
        <div className="flex flex-1 flex-col justify-center px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Please Sign UP
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleSUbmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="name"
                        placeholder="Name"
                        name="name"
                        required
                        className="block px-2 w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Img Url
                    </label>
                    <div className="mt-1">
                      <input
                        type="name"
                        placeholder="Img Url"
                        name="img"
                        required
                        className="block px-2 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email"
                        required
                        className="block w-full rounded-md border-0 p-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        placeholder="password"
                        name="password"
                        required
                        // onChange={(e) => {
                        //   setPassword(e.target.value);
                        //   const passwordLength = e.target.value.length;
                        //   const errorMessage = document.querySelector(
                        //     ".password-error-message"
                        //   );
                        //   if (passwordLength < 6) {
                        //     errorMessage.style.display = "block";
                        //   } else {
                        //     errorMessage.style.display = "none";
                        //   }
                        // }}
                        className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      />
                      <p
                        className="mt-2 text-sm text-red-600 password-error-message"
                        style={{ display: "none" }}
                      >
                        Password must be at least 6 characters long.
                      </p>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirm password
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        placeholder="confirm password"
                        name="confirm_password"
                        // onChange={(e) => {
                        //   setPassword(e.target.value);
                        //   const passwordLength = e.target.value.length;
                        //   const errorMessage = document.querySelector(
                        //     ".password-error-message"
                        //   );
                        //   if (passwordLength < 6) {
                        //     errorMessage.style.display = "block";
                        //   } else {
                        //     errorMessage.style.display = "none";
                        //   }
                        // }}
                        className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      />
                      {/* <p
                        className="mt-2 text-sm text-red-600 password-error-message"
                        style={{ display: "none" }}
                      >
                        Password must be at least 6 characters long.
                      </p> */}
                      {!passMatch && (
                        <div className="my-2">
                          <p className="text-red-500">
                            Passwords do not match!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                    >
                      Sign UP
                    </button>
                  </div>
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link
                      className="font-semibold text-teal-600 hover:text-teal-500"
                      to="/login"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6  gap-4">
                  <GoogleLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={loginImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SignUP;
