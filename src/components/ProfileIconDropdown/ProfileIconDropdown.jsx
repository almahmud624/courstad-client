import { useContext } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../Contexts/AuthProvider";
import { Link } from "react-router-dom";

export const ProfileIconDropdown = ({ showDropdown, setShowDropdown }) => {
  const { userSignOut } = useContext(AuthContext);
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div
        className={`absolute top-12 lg:-right-16 -right-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
          showDropdown
            ? "ease-out duration-300 opacity-100 z-50 translate-y-0"
            : "ease-in duration-200 opacity-0 -z-10 -translate-y-5"
        }`}
      >
        <div className="px-4 py-3 text-sm text-gray-900  dark:text-white">
          <div className="capitalize">{user?.name}</div>
          <div className="font-medium truncate">{user?.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          <li>
            <Link
              to="/profile-edit"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setShowDropdown(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/leaderboard"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setShowDropdown(false)}
            >
              Leaderboard
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <span
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
            onClick={() => {
              userSignOut();
              setShowDropdown(false);
            }}
          >
            Sign out
          </span>
        </div>
      </div>
    </>
  );
};
