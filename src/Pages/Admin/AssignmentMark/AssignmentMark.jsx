import DashboardLayout from "../../../Layout/DashboardLayout";
import { AssignmentMarkTable } from "../../../components/AssignmentMarkTable/AssignmentMarkTable";
import { useGetAssignmentMarkQuery } from "../../../features/assignmentMark/assignmentMarkApi";
import { NotFound } from "../../../components/NotFound/NotFound";
import { Loader } from "../../../components/Loader/Loader";

export const AssignmentMark = () => {
  const {
    data: assignmentMarks,
    isLoading,
    isError,
  } = useGetAssignmentMarkQuery();

  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && isError) {
    content = <span>There was an error</span>;
  } else if (!isLoading && !isError && assignmentMarks?.length === 0) {
    content = <NotFound message={"Marks not found"} hideBtn={"hidden"} />;
  } else if (!isLoading && !isError && assignmentMarks?.length > 0) {
    content = <AssignmentMarkTable assignmentMarks={assignmentMarks} />;
  }
  return (
    <>
      <DashboardLayout>{content}</DashboardLayout>
    </>
  );
};
