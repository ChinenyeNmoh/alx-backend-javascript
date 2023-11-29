/* eslint-disable guard-for-in */
export default function createIteratorObject(report) {
  const newarray = [];
  const reportReturn = report.allEmployees;
  for (const item in reportReturn) {
    newarray.push(...reportReturn[item]);
  }

  return newarray;
}
