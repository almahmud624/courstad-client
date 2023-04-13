import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useContext } from "react";
import { useStoreUserMutation } from "../../features/user/userApi";

export const SocialLogin = ({ setErr }) => {
  const { userGoogleSignIn, userGitHubSignIn } = useContext(AuthContext);
  const [storeUser] = useStoreUserMutation();
  // google signin
  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then((res) => {
        const newUser = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photoURL: res?.user?.photoURL,
          role: "student",
        };
        storeUser(newUser);
      })
      .catch((error) => {
        setErr(error.code);
      });
  };
  // login with gitHub
  const handleGitHubSignIn = () => {
    userGitHubSignIn()
      .then((res) => {})
      .catch((error) => {
        setErr(error.code);
      });
  };
  return (
    <>
      <div className="flex justify-center gap-8">
        {/* <button
          className="inline-flex items-center justify-center rounded-md border-2 border-[#171515] bg-[#171515]  py-3 text-sm font-medium text-white 
                      dark:text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75 w-full"
          onClick={handleGitHubSignIn}
        >
          GitHub <FaGithub className="ml-2" />
        </button> */}
        <button
          className="inline-flex items-center justify-center rounded-md border-2 border-red-800 bg-red-800 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-red-700 focus:outline-none focus:ring active:opacity-75 w-full dark:text-white"
          onClick={handleGoogleSignIn}
        >
          Google <FaGoogle className="ml-2" />
        </button>
      </div>
    </>
  );
};
