// import { DataNotFound } from "../../../components/DataNotFound/DataNotFound";
// import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";
// import { Loader } from "../../../components/Loader/Loader";
import DashboardLayout from "../../../Layout/DashboardLayout";
import { AssignmentMarkTable } from "../../../components/AssignmentMarkTable/AssignmentMarkTable";
import { useGetAssignmentMarkQuery } from "../../../features/assignmentMark/assignmentMarkApi";

export const AssignmentMark = () => {
  const {
    data: assignmentMarks,
    isLoading,
    isError,
  } = useGetAssignmentMarkQuery();

  let content;
  if (isLoading) {
    content = "<Loader />";
  } else if (!isLoading && isError) {
    content = "<ErrorMessage />";
  } else if (!isLoading && !isError && assignmentMarks?.length === 0) {
    content = '<DataNotFound message={"Assignment Marks not found"} />';
  } else if (!isLoading && !isError && assignmentMarks?.length > 0) {
    content = <AssignmentMarkTable assignmentMarks={assignmentMarks} />;
  }
  return (
    <>
      <DashboardLayout>{content}</DashboardLayout>
    </>
  );
};
