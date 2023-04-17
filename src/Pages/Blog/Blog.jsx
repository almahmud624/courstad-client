import React from "react";

const Blog = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-gray-200">
      <div className="px-4 py-16 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 md:mx-auto md:mb-12 ">
          <h2 className="text-start mb-3 font-sans text-3xl font-bold leading-none tracking-tight text-gray-800  sm:text-4xl md:mx-auto dark:text-gray-200">
            We Think,
          </h2>
          <p className="font-semibold text-gray-700 md:text-lg dark:text-gray-400">
            Some thing you have to know
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-2 sm:grid-cols-2 ">
          <div className="duration-300 transform bg-white border-l-4 border-green-700 border-deep-purple-accent-400 dark:bg-gray-200 dark:text-gray-800">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">What is CORS?</h6>
              <p className="text-sm text-gray-800 dark:text-gray-600">
                What is CORS used for? Cross-Origin Resource Sharing (CORS) is
                an HTTP-header based mechanism that allows a server to indicate
                any origins (domain, scheme, or port) other than its own from
                which a browser should permit loading resources
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-green-700 border-deep-purple-accent-400 dark:bg-gray-200 dark:text-gray-800">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h6>
              <p className="text-sm text-gray-800 dark:text-gray-600">
                The Firebase Realtime Database lets you build rich,
                collaborative applications by allowing secure access to the
                database directly from client-side code. Data is persisted
                locally, and even while offline, realtime events continue to
                fire, giving the end user a responsive experience.
              </p>
              <p className="text-sm text-gray-800 dark:text-gray-600 mt-4">
                The other authentication I have to implement are email and
                password auth, gitHub, facebook etc.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-green-700 border-deep-purple-accent-400 dark:bg-gray-200 dark:text-gray-800">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
                How does the private route work?
              </h6>
              <p className="text-sm text-gray-800 dark:text-gray-600">
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in).
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-green-700 border-deep-purple-accent-400 dark:bg-gray-200 dark:text-gray-800">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
                What is Node? How does Node work?
              </h6>
              <p className="text-sm text-gray-800 dark:text-gray-600">
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive. Working of
                Node.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
