export default function divideFunction(numerator, denominator) {
  try {
    const divide = numerator / denominator;
    if (denominator === 0) {
      throw new Error();
    }
    return divide;
  } catch (err) {
    throw Error('cannot divide by 0');
  }
}
