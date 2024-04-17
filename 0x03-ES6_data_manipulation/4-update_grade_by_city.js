/* eslint-disable no-param-reassign */

export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  if (!(listStudents instanceof Array)) return [];

  if (!(newGrades instanceof Array)) newGrades = [];

  return listStudents
    .filter((element) => element.location === city)
    .map((element) => {
      const match = newGrades.find((obj) => obj.studentId === element.id);

      if (match) {
        element.grade = match.grade;
      } else {
        element.grade = 'N/A';
      }

      return element;
    });
}
