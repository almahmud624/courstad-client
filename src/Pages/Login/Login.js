import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaGithub, FaGoogle, FaLink, FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const { userLogIn, userGoogleSignIn, userGitHubSignIn } =
    useContext(AuthContext);
  const [err, setErr] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  // login with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogIn(email, password)
      .then((res) => {
        navigate(from, { replace: true });
        console.log(res.user);
        form.reset();
      })
      .catch((error) => {
        setErr(error.code);
      });
  };
  // login with google
  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then((res) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErr(error.code);
      });
  };

  // login with gitHub
  const handleGitHubSignIn = () => {
    userGitHubSignIn()
      .then((res) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErr(error.code);
      });
  };
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-200 bg-white">
        <div class="flex overflow-hidden justify-center items-center">
          <div class="flex flex-col justify-center items-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="w-full max-w-xl mx-auto lg:w-96">
              <div>
                <h2 class="mt-6 text-3xl font-bold text-neutral-600 dark:text-gray-200">
                  Login Your Account
                </h2>
              </div>
              {err && (
                <div
                  role="alert"
                  class="rounded border-l-4 border-red-500 bg-red-50 p-4 mt-8"
                >
                  <strong class="block capitalize font-medium text-red-700">
                    {" "}
                    {err.split("/")[1].split("-").join(" ")}{" "}
                  </strong>
                </div>
              )}

              <div class="mt-8">
                <div class="mt-6">
                  <form onSubmit={handleSubmit} method="POST" class="space-y-6">
                    <div class="flex flex-col mb-2">
                      <div class="flex relative ">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class=" rounded-l-md flex-1 appearance-none  w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 bg-white border-t border-l border-b  border-gray-300 transition duration-500 ease-in-out transform"
                          placeholder="Your email"
                          required
                        />
                        <span class="rounded-r-lg inline-flex  items-center px-3 border-t bg-white border border-gray-300 text-gray-500 shadow-sm text-sm">
                          <GrMail />
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col mb-2">
                      <div class="flex relative ">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          class=" rounded-l-md flex-1 appearance-none  w-full py-2 px-4  text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 bg-white border-t border-l border-b  border-gray-300 transition duration-500 ease-in-out transform"
                          placeholder="Your Password"
                          required
                        />
                        <span class="rounded-r-lg inline-flex  items-center px-3 border-t bg-white border border-gray-300 text-gray-500 shadow-sm text-sm">
                          <RiLockPasswordFill />
                        </span>
                      </div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          placeholder="Your password"
                          class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label
                          for="remember-me"
                          class="block ml-2 text-sm text-neutral-600 dark:text-gray-200"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>

                      <div class="text-sm">
                        <a
                          href="#"
                          class="font-medium text-blue-600 hover:text-blue-500"
                        >
                          {" "}
                          Forgot your password?{" "}
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        class="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div class="relative my-4">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white dark:bg-gray-800 dark:text-gray-200 text-neutral-600">
                        {" "}
                        Or Login with{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-8">
                    <button
                      class="inline-flex items-center justify-center rounded-md border-2 border-[#171515] bg-[#171515]  py-3 text-sm font-medium text-white dark:text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75 w-full"
                      onClick={handleGitHubSignIn}
                    >
                      GitHub <FaGithub className="ml-2" />
                    </button>
                    <button
                      class="inline-flex items-center justify-center rounded-md border-2 border-green-700 bg-green-700 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-green-700 focus:outline-none focus:ring active:opacity-75 w-full dark:text-white"
                      onClick={handleGoogleSignIn}
                    >
                      Google <FaGoogle className="ml-2" />
                    </button>
                  </div>
                  <div class="flex justify-center items-center mt-3 p-4">
                    <p class="text-gray-500 dark:text-gray-200 text-sm text-center">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        class="text-green-500 hover:text-green-600 active:text-green-700 transition duration-100"
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
