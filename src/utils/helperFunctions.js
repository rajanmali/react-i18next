export const findDateDifference = () => {
  const lastEatenDate = new Date('2021-03-07');
  const dateDifference = new Date() - lastEatenDate;

  return Math.floor(dateDifference / (1000 * 60 * 60 * 24));
};
