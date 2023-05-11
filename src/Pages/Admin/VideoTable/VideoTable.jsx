import { Link } from "react-router-dom";
import { useGetVideosQuery } from "../../../features/videos/videosApi";
import DashboardLayout from "../../../Layout/DashboardLayout";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
// import { useDeleteVideoMutation } from "../../features/videos/videosApi";

export const VideoTable = () => {
  // const [deleteVideo, { isSuccess, isError }] = useDeleteVideoMutation();
  // const handleDeleteVideo = (id) => {
  //   deleteVideo(id);
  // };
  // console.log(isSuccess);
  const { data: videos } = useGetVideosQuery({});
  return (
    <>
      <DashboardLayout>
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
                      // onClick={() => handleDeleteVideo(video?.id)}
                    >
                      <AiOutlineDelete className="text-2xl" />
                    </span>
                    <Link
                      className="hover:text-green-600 transition-all duration-200"
                      to={`/admin/video/edit/${video?.id}`}
                    >
                      <FiEdit className="text-xl" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardLayout>
    </>
  );
};
