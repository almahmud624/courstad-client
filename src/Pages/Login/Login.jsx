import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import toast from "react-hot-toast";
import { useVerifyUserMutation } from "../../features/user/userApi";
import { Spinner } from "../../components/Spinner/Spinner";

const Login = () => {
  const { userLogIn, resetPassword } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const [verifyUser] = useVerifyUserMutation();
  const [state, setState] = useState("initial");
  // login with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    setState("loading");
    setErr("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogIn(email, password)
      .then((res) => {
        verifyUser({ email }).then((res) => {
          if (res?.data?.role === "admin") {
            navigate("/admin");
          } else {
            setState("success");
            navigate(from, { replace: true });
          }
        });
        setErr("");
        form.reset();
      })
      .catch((error) => {
        setState("error");
        setErr(error.code);
      });
  };

  // password reset
  const handleResetPassword = () => {
    resetPassword(userEmail)
      .then(() => {
        setErr("");
        toast.success("Password reset email sent to your email");
      })
      .catch((error) => {
        setErr(error.code);
      });
  };

  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-200 bg-white">
        <div className="flex overflow-hidden justify-center items-center">
          <div className="flex flex-col justify-center items-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
              <div>
                {from.includes("/admin") && (
                  <small className="-mt-3 text-red-600">
                    Currently, you trying to access Admin Dashboard
                  </small>
                )}
                <h2 className="mt-6 text-3xl font-bold text-neutral-600 dark:text-gray-200">
                  {from.includes("/admin")
                    ? "Login as Admin"
                    : "Login Your Account"}
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
                          type="email"
                          id="email"
                          name="email"
                          className=" rounded-l-md flex-1 appearance-none  w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent ring-0 bg-white border-t border-l border-b  border-gray-300 transition duration-500 ease-in-out transform"
                          placeholder="Your email"
                          required
                          onBlur={(e) => setUserEmail(e.target.value)}
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
                        />
                        <span className="rounded-r-lg inline-flex  items-center px-3 border-t bg-white border border-gray-300 text-gray-500 shadow-sm text-sm">
                          <RiLockPasswordFill />
                        </span>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-700 rounded hover:bg-green-800 focus:outline-none focus:border-transparent ring-0"
                      >
                        {state === "loading" ? <Spinner /> : "Login"}
                      </button>
                    </div>
                  </form>
                  <div className="text-sm text-center mt-5">
                    <button
                      onClick={handleResetPassword}
                      className="font-base text-gray-400 hover:text-gray-500"
                    >
                      {" "}
                      Forgot your password?{" "}
                    </button>
                  </div>

                  <div className="flex justify-center items-center mt-3 p-4">
                    <p className="text-gray-500 dark:text-gray-200 text-sm text-center">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="text-green-500 hover:text-green-600 active:text-green-700 transition duration-100"
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
