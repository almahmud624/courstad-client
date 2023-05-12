export const LeaderboardTopPosition = ({ studentsMark = [] }) => {
  return (
    <>
      <div className="my-8">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-300">
          Top 20 Result
        </h3>
        <table className="text-gray-800 dark:text-gray-300 w-full border border-slate-600/50 dark:border-gray-500 rounded-md my-4">
          <thead>
            <tr className="border-b border-slate-600/50 dark:border-gray-500">
              <th className="py-2 !text-center">Rank</th>
              <th className="py-2 !text-center">Name</th>
              <th className="py-2 !text-center">Quiz Mark</th>
              <th className="py-2 !text-center">Assignment Mark</th>
              <th className="py-2 !text-center">Total</th>
            </tr>
          </thead>

          <tbody>
            {studentsMark?.slice(0, 20)?.map((stdMark, i) => (
              <tr
                key={i}
                className="border-b border-slate-600/50 dark:border-gray-500"
              >
                <td className="py-2 text-center">{stdMark.rank}</td>
                <td className="py-2 text-center">{stdMark.name}</td>
                <td className="py-2 text-center">{stdMark.quizMark}</td>
                <td className="py-2 text-center">{stdMark.assignmentMark}</td>
                <td className="py-2 text-center">{stdMark.totalMark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
