import { useSelector } from "react-redux";

export const LoggedInPosition = ({ studentsMark = [] }) => {
  // find LoggedIn user mark
  const { user } = useSelector((state) => state.user);
  const loggedInUserRank = studentsMark?.find((std) => std?.id === user?._id);
  const { name, rank, assignmentMark, quizMark, totalMark } =
    loggedInUserRank || {};
  return (
    <>
      <div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-300">
          Your Position in Leaderboard
        </h3>
        <table className="text-gray-800 dark:text-gray-300 w-full border border-slate-600/50 dark:border-gray-500 rounded-md my-4">
          <thead>
            <tr>
              <th className="py-2 !text-center">Rank</th>
              <th className="py-2 !text-center">Name</th>
              <th className="py-2 !text-center">Quiz Mark</th>
              <th className="py-2 !text-center">Assignment Mark</th>
              <th className="py-2 !text-center">Total</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-2 border-green-600/50">
              <td className="py-2 text-center font-bold">{rank}</td>
              <td className="py-2 text-center font-bold">{name}</td>
              <td className="py-2 text-center font-bold">{quizMark}</td>
              <td className="py-2 text-center font-bold">{assignmentMark}</td>
              <td className="py-2 text-center font-bold">{totalMark}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
