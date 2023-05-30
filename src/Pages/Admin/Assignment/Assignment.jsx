import { HashLoader } from "react-spinners";
import DashboardLayout from "../../../Layout/DashboardLayout";
import { AssignmentTable } from "../../../components/AssignmentTable/AssignmentTable";
import { useGetAssignmentsQuery } from "../../../features/assignment/assignmentApi";
import { NotFound } from "../../../components/NotFound/NotFound";
const override = {
  display: "block",
  margin: "0 auto",
  height: "100vh",
};
export const Assignment = () => {
  const { data: assignments, isLoading, isError } = useGetAssignmentsQuery();
  let content;
  if (isLoading) {
    content = <HashLoader color="#36d7b7" cssOverride={override} />;
  } else if (!isLoading && isError) {
    content = <div>There was an error</div>;
  } else if (!isLoading && !isError && assignments?.length === 0) {
    content = (
      <NotFound
        message={"Assignments not found"}
        link={"/admin/assignment/add"}
        linkText={"Add Assignment"}
      />
    );
  } else if (!isLoading && !isError && assignments?.length > 0) {
    content = <AssignmentTable assignments={assignments} />;
  }
  return (
    <>
      <DashboardLayout>{content}</DashboardLayout>
    </>
  );
};
