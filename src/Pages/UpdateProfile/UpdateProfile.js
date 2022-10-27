import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Register from "../Register/Register";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);

  return (
    <div>
      {edit ? (
        <Register />
      ) : (
        <div className="dark:bg-gray-800 bg-white py-20 px-5">
          <div className="max-w-screen-md m-auto p-3 border shadow-sm rounded-sm">
            <div className="flex items-center justify-between space-x-2 font-semibold dark:text-gray-200 leading-8 mb-5 px-4">
              <span className="tracking-wide text-gray-800 dark:text-gray-200 font-bold text-4xl">
                Profile
              </span>
              <div className="">
                <img
                  className="object-cover w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            </div>
            <div className="text-gray-700">
              <div className="text-sm">
                <div className="flex md:w-1/2  w-full justify-between">
                  <div className="px-4  py-2 font-semibold text-gray-800 dark:text-gray-200">
                    Name
                  </div>
                  <div className="px-4 capitalize py-2 text-gray-600 dark:text-gray-300">
                    {user?.displayName}
                  </div>
                </div>
                <div className="px-4 py-2 flex md:w-1/2  w-full justify-between">
                  <div className=" font-semibold text-gray-800 dark:text-gray-200">
                    Email.
                  </div>
                  <a
                    className="text-gray-600 dark:text-gray-300"
                    href="mailto:jane@example.com"
                  >
                    {user?.email}
                  </a>
                </div>
                <div className="flex md:w-1/2  w-full justify-between">
                  <div className="px-4 py-2 font-semibold text-gray-800 dark:text-gray-200">
                    Verified
                  </div>
                  <div className="px-4 py-2">
                    {user?.emailVerified ? (
                      <>
                        <span className="text-medium text-green-600">
                          Verified
                        </span>
                      </>
                    ) : (
                      <span className="text-medium text-red-600">
                        Not Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setEdit(!edit);
              }}
              className=" text-start text-blue-800 inline-block hover:underline text-sm font-semibold rounded-lg  p-4 pb-0"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
