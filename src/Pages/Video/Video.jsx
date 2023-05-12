import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetVideoQuery } from "../../features/videos/videosApi";
import { useSelector } from "react-redux";
import { useGetAssignmentsQuery } from "../../features/assignment/assignmentApi";
import {
  useGetAssignmentMarkQuery,
  useSubmitAssignmentMutation,
} from "../../features/assignmentMark/assignmentMarkApi";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import { VideoList } from "../../components/VideoList/VideoList";
import { FormModal } from "../../components/Modal/FormModal";
export const Video = () => {
  const { videoId } = useParams();
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId);
  const { user } = useSelector((state) => state.user);
  const { data: assignments } = useGetAssignmentsQuery();
  const [submitAssignment, { isSuccess, isError: submissonErr }] =
    useSubmitAssignmentMutation();
  const { data: assignmentMarks } = useGetAssignmentMarkQuery();
  const [showModal, setShowModal] = useState(false);
  const [assignmentLink, setAssignmentLink] = useState("");

  // find assignments for this video
  const assignment = assignments?.find(
    (assignment) => assignment?.video_id === videoId
  );

  // check user assignment submisson
  const assignmentSubmisson = assignmentMarks?.some(
    (assignmentMark) =>
      assignmentMark?.student_id === user?._id &&
      assignmentMark?.assignment_id === assignment?._id
  );

  // submit assigenment
  const handleSubmitAssignment = () => {
    const userAssigenment = {
      student_id: user?._id,
      student_name: user?.name,
      assignment_id: assignment?._id,
      title: assignment?.title,
      totalMark: 100,
      mark: 0,
      repo_link: assignmentLink,
      status: "pending",
    };
    console.log(userAssigenment);
    submitAssignment(userAssigenment);
  };
  useEffect(() => {
    if (isSuccess) setShowModal(false);
    if (submissonErr) console.log("There wan an error in assignment submisson");
  }, [isSuccess, submissonErr]);
  return (
    <>
      <section className="py-6 bg-gray-800">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <VideoPlayer
              video={video}
              setShowModal={setShowModal}
              assignmentSubmisson={assignmentSubmisson}
              assignment={assignment}
            />

            <VideoList />
          </div>
        </div>
      </section>
      <FormModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleSubmitAssignment={handleSubmitAssignment}
        setAssignmentLink={setAssignmentLink}
        assignment={assignment}
      />
    </>
  );
};
