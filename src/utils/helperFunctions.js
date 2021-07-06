import cardImageObj from './cardImageObj';

export const findDateDifference = (lastAteDate) => {
  const dateDifference = new Date() - new Date(lastAteDate);
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

export const getTodaysDateInProperFormat = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  return yyyy + '-' + mm + '-' + dd;
};
