export const getQuizMark = (videoQuizzes, checkAns, user) => {
  let totalCorrect = 0;
  let totalWrong = 0;
  let unSelectedQuestion = 0;
  videoQuizzes?.forEach((q) => {
    const selectQuizId = checkAns?.filter((a) => a[q._id]);
    const quizId = selectQuizId?.[0] && Object.keys(selectQuizId?.[0])[0];

    if (quizId === q._id) {
      const selectedQuizAns = q?.options
        ?.filter((option) =>
          selectQuizId?.some((qId) => qId[q?._id] === option?.id)
        )
        .map((option) => option.isCorrect)
        .join(",");
      const expectedQuizAns = q?.options
        ?.filter((option) => option.isCorrect)
        .map((option) => option.isCorrect)
        .join(",");
      if (selectedQuizAns === expectedQuizAns) {
        totalCorrect++;
      } else {
        totalWrong++;
      }
    } else {
      unSelectedQuestion++;
    }
  });
  const userQuizMark = {
    student_id: user?._id,
    student_name: user?.name,
    video_id: videoQuizzes[0]?.video_id,
    video_title: videoQuizzes[0]?.video_title,
    totalQuiz: videoQuizzes?.length,
    totalCorrect,
    totalWrong,
    totalMark: videoQuizzes?.length * 5,
    mark: totalCorrect * 5,
    userAns: checkAns,
  };
  return { unSelectedQuestion, userQuizMark };
};
