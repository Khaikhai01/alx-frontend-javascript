export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
    throw new Error();
  }

  return numerator / denominator;
  } catch(error) {
      throw new Error('Cannot divide by 0');
  }
}
