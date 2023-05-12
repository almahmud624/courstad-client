export const calculateMark = (students, marks, markType) => {
  return students?.map((student) => {
    const findMultipleMark = marks?.filter(
      (mark) => mark.student_id === student._id
    );
    const totalAssignmentMark = findMultipleMark?.reduce(
      (acc, cur) => acc + cur?.mark,
      0
    );
    return {
      id: student._id,
      name: student.name,
      [markType]: totalAssignmentMark,
    };
  });
};
