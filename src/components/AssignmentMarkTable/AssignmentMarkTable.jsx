import { useState } from "react";
import { useUpdateAssignmentMarkMutation } from "../../features/assignmentMark/assignmentMarkApi";

const getDateAndTime = (date) => {
  const dateAndTime = new Date(date).toLocaleString();
  return dateAndTime;
};

export const AssignmentMarkTable = ({ assignmentMarks = [] }) => {
  const [assignmentMark, setAssignmentLink] = useState(0);
  const [updateAssignmentMark] = useUpdateAssignmentMarkMutation();
  // getting pending assignment
  const pendingAssignment = assignmentMarks?.filter(
    (mark) => mark?.status === "pending"
  );
  const publishAssigmentHandler = (id) => {
    // find selected student assignment
    const selectedAssignment = assignmentMarks?.find(
      (mark) => mark?._id === id
    );

    // update assignment mark
    const newAssignmentMark = {
      ...selectedAssignment,
      mark: Number(assignmentMark),
      status: "published",
    };

    updateAssignmentMark({
      id: selectedAssignment?._id,
      data: newAssignmentMark,
    });
  };
  return (
    <>
      <div className="px-3 py-10 bg-gray-800">
        <ul className="flex gap-x-2">
          <li className="bg-gray-500 rounded-3xl px-3 py-1">
            Total <span>{assignmentMarks?.length}</span>
          </li>
          <li className="bg-teal-500 rounded-3xl px-3 py-1">
            Pending <span>{pendingAssignment?.length}</span>
          </li>
          <li className="bg-green-500 rounded-3xl px-3 py-1">
            Mark Sent{" "}
            <span>{assignmentMarks?.length - pendingAssignment?.length}</span>
          </li>
        </ul>
        <div className="overflow-x-auto mt-4 bg-gray-800">
          <table className="divide-y-1 text-base divide-gray-600 w-full text-left text-white">
            <thead>
              <tr>
                <th className="px-6 py-4">Assignment</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Student Name</th>
                <th className="px-6 py-4">Doc Link</th>
                <th className="px-6 py-4">Mark</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-600/50 text-white">
              {assignmentMarks?.map((mark, i) => (
                <tr key={i}>
                  <td className="px-6 py-4">{mark?.title}</td>
                  <td className="px-6 py-4">
                    {getDateAndTime(mark?.created_at)}
                  </td>
                  <td className="px-6 py-4">{mark?.student_name}</td>
                  <td className="px-6 py-4">{mark?.repo_link}</td>
                  {mark?.status === "published" && (
                    <td className="px-6 py-4">{mark?.mark}</td>
                  )}
                  {mark?.status === "pending" && (
                    <td className="px-6 py-4 flex gap-x-2">
                      <input
                        max="100"
                        defaultValue={0}
                        className="w-10 p-1 h-8 rounded-md text-gray-800"
                        onChange={(e) => setAssignmentLink(e.target.value)}
                      />

                      <span onClick={() => publishAssigmentHandler(mark?._id)}>
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
