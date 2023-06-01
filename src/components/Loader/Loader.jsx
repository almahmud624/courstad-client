import { HashLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "0 auto",
  height: "100vh",
};
export const Loader = () => {
  return (
    <>
      <HashLoader color="#36d7b7" cssOverride={override} />
    </>
  );
};
