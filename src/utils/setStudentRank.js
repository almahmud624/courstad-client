export const setStudentRank = (mergedStdMark) => {
  const sortByTotalMark = mergedStdMark?.sort(
    (a, b) => b.totalMark - a.totalMark
  );
  let rank = 1;
  let prevMark = null;
  return sortByTotalMark?.map((std, i) => {
    if (prevMark !== std.totalMark) {
      rank = i + 1;
    }
    prevMark = std.totalMark;
    return { ...std, rank };
  });
};
