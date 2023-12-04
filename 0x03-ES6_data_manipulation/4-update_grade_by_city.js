/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!newGrades || newGrades.length === 0) {
    newGrades = [{ studentId: 'N/A', grade: 'N/A' }];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrades = newGrades.filter((grade) => grade.studentId === student.id);

      if (matchingGrades.length > 0) {
        student.grade = matchingGrades[0].grade;
      } else {
        student.grade = 'N/A';
      }

      return student;
    });
}
