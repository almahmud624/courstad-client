export const getAvarageCourseRating = (courseRating) => {
  return courseRating?.length > 0
    ? courseRating
        ?.reduce((acc, cur) => acc + cur.rating / courseRating?.length, 0)
        .toFixed(1)
    : 0;
};
