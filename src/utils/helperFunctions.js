import cardImageObj from './cardImageObj';

export const findDateDifference = () => {
  const lastEatenDate = new Date('2021-06-01');
  const dateDifference = new Date() - lastEatenDate;

  return Math.floor(dateDifference / (1000 * 60 * 60 * 24));
};

export const getUserImage = (numberOfDays) => {
  if (numberOfDays <= 5) {
    return cardImageObj.happy;
  } else if (numberOfDays > 5 && numberOfDays <= 10) {
    return cardImageObj.neutral;
  } else if (numberOfDays > 10 && numberOfDays <= 30) {
    return cardImageObj.sad;
  } else {
    return cardImageObj.crying;
  }
};
