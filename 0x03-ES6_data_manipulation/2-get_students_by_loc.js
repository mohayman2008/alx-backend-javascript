export default function getStudentsByLocation(listStudents, city) {
  if (listStudents instanceof Array) {
    return listStudents.filter((element) => element.location === city);
  }
  return [];
}
