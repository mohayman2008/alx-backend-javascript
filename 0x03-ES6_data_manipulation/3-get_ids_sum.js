export default function getStudentIdsSum(listStudents) {
  if (listStudents instanceof Array) {
    return listStudents.reduce((sum, element) => sum + element.id, 0);
  }
  return -1;
}
