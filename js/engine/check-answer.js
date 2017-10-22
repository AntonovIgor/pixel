export const checkAnswer = (answersArray, question) => {
  const rightAnswersArray = question.options.map(option => {
      return (option.isPhoto) ?  `photo` : `paint`;
  });

  return answersArray.join(``) === rightAnswersArray.join(``);
};
