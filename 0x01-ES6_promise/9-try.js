export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const mathReturn = mathFunction();
    queue.push(mathReturn);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
