export default function getStudentsByLocation(students, city) {
  return students.filter((studentsObj) => studentsObj.location === city);
}
