export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const studentsGrade = newGrades.find((grade) => grade.studentId === obj.id);
      const grade = studentsGrade === undefined ? 'N/A' : studentsGrade.grade;

      return { ...obj, grade };
    });
}
