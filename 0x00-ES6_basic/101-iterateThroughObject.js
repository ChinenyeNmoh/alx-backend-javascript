export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';
  for (const [index, item] of Object.entries(reportWithIterator)) {
    employeeNames += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      employeeNames += ' | ';
    }
  }

  return employeeNames;
}
