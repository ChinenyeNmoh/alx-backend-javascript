export default function createIteratorObject(report) {
  const newarray = [];
  const reportReturn = report.allEmployees;
  for (const item of reportReturn) {
    newarray.push(...item);
  }

  return newarray;
}
