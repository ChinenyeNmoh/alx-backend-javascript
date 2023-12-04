export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, value) => accumulator + value.id, 0);
}
