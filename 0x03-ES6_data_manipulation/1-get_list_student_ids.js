export default function getListStudentIds(listStudents) {
  if (listStudents instanceof Array) {
    return listStudents.map((element) => element.id);
  }
  return [];
}
