// import { DataNotFound } from "../../../components/DataNotFound/DataNotFound";
// import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";
// import { Loader } from "../../../components/Loader/Loader";
import DashboardLayout from "../../../Layout/DashboardLayout";
import { AssignmentTable } from "../../../components/AssignmentTable/AssignmentTable";
import { useGetAssignmentsQuery } from "../../../features/assignment/assignmentApi";

export const Assignment = () => {
  const { data: assignments, isLoading, isError } = useGetAssignmentsQuery();
  let content;
  if (isLoading) {
    content = "<Loader />";
  } else if (!isLoading && isError) {
    content = "<ErrorMessage />";
  } else if (!isLoading && !isError && assignments?.length === 0) {
    content = '<DataNotFound message={"Assignments not found"} />';
  } else if (!isLoading && !isError && assignments?.length > 0) {
    content = <AssignmentTable assignments={assignments} />;
  }
  return (
    <>
      <DashboardLayout>{content}</DashboardLayout>
    </>
  );
};
