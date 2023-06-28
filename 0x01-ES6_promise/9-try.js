export default function guardrail(mathFunction) {
  const queue = [];
  const messageExpected = 'Guardrail was processed';
  try {
    const output = mathFunction();
    queue.push(output);
    queue.push(messageExpected);
  } catch (err) {
    queue.push(`Error: ${err.messageExpected}`);
    queue.push(messageExpected);
  }

  return queue;
}
