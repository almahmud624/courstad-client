import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaLink, FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import toast from "react-hot-toast";
import { useStoreUserMutation } from "../../features/user/userApi";

const Register = () => {
  const { createUser, updateUserProfie } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const navigate = useNavigate();
  const [storeUser] = useStoreUserMutation();

  // create user
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.picUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    setErr("");

    createUser(email, password)
      .then((res) => {
        if (res?.user?.uid) {
          handleUserProfileUpdate(name, photo);
          storeUser({ name, email, photoURL: photo, role: "student" });
          form.reset();
        }
      })
      .catch((error) => {
        setErr(error.code);
      });
  };

  // update user profile
  const handleUserProfileUpdate = (name, photo) => {
    updateUserProfie({ displayName: name, photoURL: photo })
      .then(() => {})
      .catch((error) => {
        setErr(error.code);
      });
  };
  // Edit Profile
  const editProfile = () => {
    handleUserProfileUpdate(userName, userPhoto);
    toast.success("You Successfully Update your Profile");
    navigate("/");
  };
  return (
    <div>
      <section className="dark:bg-gray-800 bg-white">
        <div className="flex overflow-hidden justify-center items-center">
          <div className="flex flex-col justify-center items-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
              <div>
                <h2 className="mt-6 text-3xl font-bold text-neutral-600 dark:text-gray-200">
                  {location.pathname === "/profile-edit"
                    ? "Update Your Profile"
                    : "Create an Account"}
                </h2>
              </div>
              {err && (
                <div
                  role="alert"
                  className="rounded border-l-4 border-red-500 bg-red-50 p-4 mt-8"
                >
                  <strong className="block capitalize font-medium text-red-700">
                    {" "}
                    {err.split("/")[1].split("-").join(" ")}{" "}
                  </strong>
                </div>
              )}
              <div className="mt-8">
                <div className="mt-6">
                  <form
                    onSubmit={handleSubmit}
                    method="POST"
                    className="space-y-6"
                  >
                    <div className="flex flex-col mb-2">
                      <div className="flex relative ">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className=" rounded-l-md flex-1 appearance-none  w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 bg-white border-t border-l border-b  border-gray-300 transition duration-500 ease-in-out transform"
                          placeholder="Your Name"
                          required
                          onBlur={(e) => setUserName(e.target.value)}
                        />
                        <span className="rounded-r-lg inline-flex  items-center px-3 border-t bg-white border border-gray-300 text-gray-500 shadow-sm text-sm">
                          <FaUserAlt />
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col mb-2">
                      <div className="flex relative ">
                        <input
                          type="text"
                          id="picUrl"
                          name="picUrl"
                          className=" rounded-l-md flex-1 appearance-none  w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 bg-white border-t border-l border-b  border-gray-300 transition duration-500 ease-in-out transform"
                          placeholder="Profile Picture URL"
                          required
                          onBlur={(e) => setUserPhoto(e.target.value)}
                        />
                        <span className="rounded-r-lg inline-flex  items-center px-3 border-t bg-white border border-gray-300 text-gray-500 shadow-sm text-sm">
                          <FaLink />
                        </span>
                      </div>
                    </div>
                    {location.pathname !== "/profile-edit" && (
                      <>
                        <div className="flex flex-col mb-2">
                          <div className="flex relative ">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className=" rounded-l-md flex-1 appearance-none  w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 bg-white border-t border-l border-b  border-gray-300 transition duration-500 ease-in-out transform"
                              placeholder="Your email"
                              required
                            />
                            <span className="rounded-r-lg inline-flex  items-center px-3 border-t bg-white border border-gray-300 text-gray-500 shadow-sm text-sm">
                              <GrMail />
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col mb-2">
                          <div className="flex relative ">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className=" rounded-l-md flex-1 appearance-none  w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 bg-white border-t border-l border-b  border-gray-300 transition duration-500 ease-in-out transform"
                              placeholder="Your Password"
                              required
                            />
                            <span className="rounded-r-lg inline-flex  items-center px-3 border-t bg-white border border-gray-300 text-gray-500 shadow-sm text-sm">
                              <RiLockPasswordFill />
                            </span>
                          </div>
                        </div>
                      </>
                    )}

                    {location.pathname !== "/profile-edit" && (
                      <div>
                        <button
                          type="submit"
                          className="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-700 rounded hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          Create an Account
                        </button>
                      </div>
                    )}
                  </form>
                  {location.pathname === "/profile-edit" && (
                    <div>
                      <button
                        type="submit"
                        onClick={editProfile}
                        className="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-700 rounded hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-5"
                      >
                        Update Profile
                      </button>
                    </div>
                  )}
                  {location.pathname !== "/profile-edit" && (
                    <>
                      <div className="flex justify-center items-center mt-3 p-4">
                        <p className="text-gray-500 text-sm text-center dark:text-gray-200">
                          Already Courstad user?{" "}
                          <Link
                            to="/login"
                            className="text-green-500 hover:text-green-600 active:text-green-700 transition duration-100"
                          >
                            Login
                          </Link>
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
