import DashboardLayout from "../../../Layout/DashboardLayout";
import { AssignmentTable } from "../../../components/AssignmentTable/AssignmentTable";
import { useGetAssignmentsQuery } from "../../../features/assignment/assignmentApi";
import { NotFound } from "../../../components/NotFound/NotFound";
import { Loader } from "../../../components/Loader/Loader";

export const Assignment = () => {
  const { data: assignments, isLoading, isError } = useGetAssignmentsQuery();
  let content;
  if (isLoading) {
    content = <Loader />;
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
