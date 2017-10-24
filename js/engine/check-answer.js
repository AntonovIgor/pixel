export const checkAnswer = (answersArray, question) => {
  const rightAnswersArray = question.answers.map((answer) => {
    return answer.type;
  });
  return answersArray.join(``) === rightAnswersArray.join(``);
};
