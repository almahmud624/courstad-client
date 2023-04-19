export const getAvarageCourseRating = (course) => {
  return course?.rating
    ? course?.rating
        ?.reduce((acc, cur) => acc + cur.userRating / course?.rating?.length, 0)
        .toFixed(1)
    : 0;
};
