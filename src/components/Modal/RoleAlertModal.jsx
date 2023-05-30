import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

export const RoleAlertModal = ({ showModal, setShowModal }) => {
  const { userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`relative  ${
          showModal
            ? "ease-out duration-300 opacity-100 z-10"
            : "ease-in duration-200 opacity-0 -z-10"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className={`flex min-h-full items-center justify-center p-4 text-center sm:p-0 ${
              showModal
                ? "ease-out duration-300 opacity-100 translate-y-0 sm:scale-100"
                : "ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }`}
          >
            <div className="relative transform overflow-hidden rounded-lg bg-slate-800  text-center shadow-xl transition-all sm:my-8 p-5 w-full md:max-w-lg">
              <div className="bg-slate-800 px-4 pt-5 text-center sm:pb-4">
                <h2
                  className="text-base font-semibold leading-6  text-white capitalize"
                  id="modal-title"
                >
                  Currently you logged in as ADMIN.
                </h2>
              </div>

              <div className="bg-slate-800 px-4 py-3 flex flex-col-reverse md:mt-0 mt-5 md:flex-row-reverse justify-center items-center sm:px-6 gap-3">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-red-400 bg-red-600 hover:bg-red-800 sm:mt-0 sm:w-auto transition-all duration-150"
                  onClick={() => {
                    userSignOut();
                    navigate("/");
                  }}
                >
                  Logout
                </button>
                <span className="font-semibold text-white">Or</span>
                <Link
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-green-400 bg-green-600 hover:bg-green-800 sm:mt-0 sm:w-auto transition-all duration-150"
                  to="/admin"
                >
                  Continue as Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
