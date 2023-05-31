import { Link } from "react-router-dom";
import {
  useDeleteVideoMutation,
  useGetVideosQuery,
} from "../../../features/videos/videosApi";
import DashboardLayout from "../../../Layout/DashboardLayout";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { AlertModal } from "../../../components/Modal/AlertModal";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

import { NotFound } from "../../../components/NotFound/NotFound";
const override = {
  display: "block",
  margin: "0 auto",
  height: "100vh",
};
export const VideoTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const {
    data: videos,
    isLoading,
    isError: patchError,
  } = useGetVideosQuery({});
  const [deleteVideo, { isSuccess, isError }] = useDeleteVideoMutation();
  const handleDeleteVideo = () => {
    deleteVideo(selectedVideo?._id);
  };
  useEffect(() => {
    if (isSuccess) {
      setShowModal(false);
      setSelectedVideo("");
    }
  }, [isSuccess]);
  return (
    <>
      <DashboardLayout>
        {isLoading ? (
          <HashLoader color="#36d7b7" cssOverride={override} />
        ) : isError ? (
          <span>There was an error</span>
        ) : videos?.length === 0 ? (
          <NotFound
            message={"Assignments not found"}
            link={"/admin/assignment/add"}
            linkText={"Add Assignment"}
          />
        ) : (
          <div className="overflow-x-auto mt-4 bg-gray-800">
            <table className="divide-y-1 text-base divide-gray-600 w-full text-white text-left">
              <thead>
                <tr>
                  <th className="py-4 px-6">Video Title</th>
                  <th className="py-4 px-6">Description</th>
                  <th className="py-4 px-6">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-600/50">
                {videos?.map((video) => (
                  <tr key={video?.id}>
                    <td className="px-6 py-4 font-medium">
                      <p className="truncate w-8/12">{video?.title}</p>
                    </td>
                    <td className="px-6 py-4 ">
                      <p className="truncate w-64">{video?.description}</p>
                    </td>
                    <td className="px-6 py-4 flex gap-x-2 items-center">
                      <span
                        className="hover:text-red-600 transition-all duration-200 cursor-pointer"
                        onClick={() => {
                          setShowModal(true);
                          setSelectedVideo(video);
                        }}
                      >
                        <AiOutlineDelete className="text-2xl" />
                      </span>
                      <Link
                        className="hover:text-green-600 transition-all duration-200"
                        to={`/admin/video/edit/${video?._id}`}
                      >
                        <FiEdit className="text-xl" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <AlertModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedTarget={selectedVideo}
          action={handleDeleteVideo}
        />
      </DashboardLayout>
    </>
  );
};
