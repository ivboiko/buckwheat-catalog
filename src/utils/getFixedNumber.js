export const getFixedNumber = (num, fixTo) =>
  Math.round(num * Math.pow(10, fixTo)) / Math.pow(10, fixTo);