export default function getStudentIdsSum(studentsArg) {
  return studentsArg.reduce((sum, x) => sum + x.id, 0);
}
