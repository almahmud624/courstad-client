export const showingCourseNameConditionally = (courseName, isShowing) => {
  return courseName.length > 50 ? (
    isShowing ? (
      <>
        {courseName.slice(0, 45)}
        {"..."}
      </>
    ) : (
      courseName
    )
  ) : (
    courseName
  );
};
