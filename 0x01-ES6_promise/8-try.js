/* eslint-disable-next-line */
export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw (Error('cannot divide by 0'));
    } else {
      return numerator / denominator;
    }
  } catch (error) {
    console.log(error);
  }
}