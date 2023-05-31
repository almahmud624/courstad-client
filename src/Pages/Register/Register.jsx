import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import toast from "react-hot-toast";
import { useStoreUserMutation } from "../../features/user/userApi";
import { Spinner } from "../../components/Spinner/Spinner";
import { FiUploadCloud } from "react-icons/fi";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../Firebase/firebase.init";

const Register = () => {
  const { createUser, updateUserProfie } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [imgPath, setImgPath] = useState(null);
  const navigate = useNavigate();
  const [storeUser] = useStoreUserMutation();
  const [state, setState] = useState("initial");

  // create user
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    setErr("");
    setState("loading");
    uploadImage().then((url) => {
      if (url) {
        const photo = url;
        createUser(email, password)
          .then((res) => {
            if (res?.user?.uid) {
              handleUserProfileUpdate(name, photo);
              storeUser({ name, email, photoURL: photo });
              setState("success");
              navigate("/");
              form.reset();
            }
          })
          .catch((error) => {
            setErr(error.code);
            setState("error");
          });
      }
    });
  };

  // update user profile
  const handleUserProfileUpdate = (name, photo) => {
    setState("loading");
    updateUserProfie({ displayName: name, photoURL: photo })
      .then(() => {
        setState("success");
      })
      .catch((error) => {
        setErr(error.code);
      });
  };
  // Edit Profile
  const editProfile = () => {
    setState("loading");
    try {
      uploadImage().then((url) => {
        if (url) {
          const userPhoto = url;
          handleUserProfileUpdate(userName, userPhoto);
          setState("success");
          toast.success("You Successfully Update your Profile");
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
      setState("error");
    }
  };

  const handleImgPath = (e) => {
    e.preventDefault();
    const imgFile = e.target.files[0];
    const imgSrc = URL.createObjectURL(imgFile);
    setImgPath({ imgSrc, imgFile });
  };

  // upload image in firebase storage
  const uploadImage = () => {
    const imgRef = ref(storage, `images/${imgPath?.imgFile?.name + v4()}`);
    return uploadBytes(imgRef, imgPath?.imgFile).then((res) =>
      getDownloadURL(res.ref)
    );
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
                          className=" rounded-l-md flex-1 appearance-none  w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent ring-0 bg-white border-t border-l border-b  border-gray-300 transition duration-500 ease-in-out transform"
                          placeholder="Your Name"
                          required
                          onBlur={(e) => setUserName(e.target.value)}
                        />
                        <span className="rounded-r-lg inline-flex  items-center px-3 border-t bg-white border border-gray-300 text-gray-500 shadow-sm text-sm">
                          <FaUserAlt />
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
                              className=" rounded-l-md flex-1 appearance-none  w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent ring-0 bg-white border-t border-l border-b  border-gray-300 transition duration-500 ease-in-out transform"
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
                              className=" rounded-l-md flex-1 appearance-none  w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent ring-0 bg-white border-t border-l border-b  border-gray-300 transition duration-500 ease-in-out transform"
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
                    <div className="flex flex-col mb-2">
                      <div class="flex items-center justify-center w-full">
                        <label
                          for="dropzone-file"
                          class={`flex items-center justify-center w-full h-20  rounded-lg cursor-pointer bg-gray-50 ${
                            imgPath?.imgSrc
                              ? "bg-transparent flex-row justify-center gap-x-5"
                              : "flex-col"
                          }`}
                        >
                          {imgPath?.imgSrc ? (
                            <>
                              <img
                                src={imgPath?.imgSrc}
                                alt=""
                                className={
                                  "w-20 h-20 rounded-full object-cover"
                                }
                              />
                              <span
                                className="flex items-center justify-center px-5 py-2 text-sm font-medium text-center text-green-500 transition duration-500 ease-in-out transform border border-green-700 rounded hover:bg-green-800 hover:text-white focus:outline-none focus:border-transparent ring-0"
                                onClick={() => setImgPath(null)}
                              >
                                Reselect
                              </span>
                            </>
                          ) : (
                            <>
                              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <FiUploadCloud
                                  className={"h-6 w-6 text-gray-600"}
                                />
                                <p class="mb-2 text-sm text-gray-600">
                                  <span class="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                </p>
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                class="hidden"
                                onChange={handleImgPath}
                              />
                            </>
                          )}
                        </label>
                      </div>
                    </div>
                    {location.pathname !== "/profile-edit" && (
                      <div>
                        <button
                          type="submit"
                          className="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-700 rounded hover:bg-green-800 focus:outline-none focus:border-transparent ring-0"
                        >
                          {state === "loading" ? (
                            <Spinner />
                          ) : (
                            "Create an Account"
                          )}
                        </button>
                      </div>
                    )}
                  </form>
                  {location.pathname === "/profile-edit" && (
                    <div>
                      <button
                        type="submit"
                        onClick={editProfile}
                        className="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-700 rounded hover:bg-green-800 focus:outline-none focus:border-transparent ring-0 mt-7"
                      >
                        {state === "loading" ? <Spinner /> : "Update Profile"}
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
