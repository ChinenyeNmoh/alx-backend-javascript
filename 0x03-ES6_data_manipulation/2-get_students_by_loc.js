/* eslint-disable consistent-return */
export default function getStudentsByLocation(students, city) {
  const check = (i) => {
    if (i.location === city) {
      return i;
    }
  };
  return students.filter(check);
}
