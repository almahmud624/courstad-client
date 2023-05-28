import { FaMoon, FaSun } from "react-icons/fa";
export const DarkMode = ({ darkSwitch, switchTheme, display }) => {
  return (
    <>
      <span
        className={`ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 ${display}`}
        onClick={darkSwitch}
      >
        {switchTheme === "dark" ? (
          <FaMoon className="text-xl cursor-pointer" />
        ) : (
          <FaSun className="text-xl cursor-pointer" />
        )}
      </span>
    </>
  );
};
