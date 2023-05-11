import { Link } from "react-router-dom";
import { useDeleteAssignmentMutation } from "../../features/assignment/assignmentApi";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

export const AssignmentTable = ({ assignments = [] }) => {
  const [deleteAssignment, { isSuccess }] = useDeleteAssignmentMutation();
  // console.log(isSuccess);
  return (
    <>
      <div className="overflow-x-auto mt-4 bg-gray-800">
        <table className="divide-y-1 text-base divide-gray-600 w-full text-white">
          <thead>
            <tr>
              <th className="py-4 px-4">Title</th>
              <th className="py-4 px-4">Video Title</th>
              <th className="py-4 px-4">Mark</th>
              <th className="py-4 px-4">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-600/50">
            {assignments?.map((assignment) => (
              <tr class="bg-gray-800 ">
                <th class="px-6 py-4 font-medium text-white text-left">
                  <p className="truncate w-8/12">{assignment?.title}</p>
                </th>
                <td class="px-6 py-4 text-white">
                  <p className="truncate w-64">{assignment?.video_title}</p>
                </td>
                <td class="px-6 py-4 text-white">
                  <span className="line-clamp-1">{assignment?.totalMark}</span>
                </td>
                <td class="px-6 py-4 flex gap-x-2 items-center text-white">
                  {" "}
                  <span
                    className="hover:text-red-600 transition-all duration-200 cursor-pointer"
                    // onClick={() => handleDeleteVideo(video?.id)}
                  >
                    <AiOutlineDelete className="text-2xl" />
                  </span>
                  <Link
                    className="hover:text-green-600 transition-all duration-200"
                    to={`/admin/assignment/edit/${assignment?._id}`}
                  >
                    <FiEdit className="text-xl" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
