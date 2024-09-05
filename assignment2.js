//array of students
const students = [
  { name: "Ade", age: 22, grade: "A" },
  { name: "John", age: 19, grade: "B" },
  { name: "Bisi", age: 18, grade: "C" },
  { name: "Tola", age: 11, grade: "D" },
  { name: "Ebube", age: 12, grade: "C" },
  { name: "Chidima", age: 11, grade: "A" },
  { name: "Ore", age: 22, grade: "B" },
  { name: "Deborah", age: 23, grade: "B" },
];

// filter by grade
function filterByGrade(studentsArray, grade) {
  console.log(studentsArray.filter((student) => student.grade === grade));
}

//find the average age
function averageAge(studentsArray) {
  const totalAges = studentsArray.reduce(
    (acc, student) => acc + student.age,
    0
  );
  return totalAges / studentsArray.length;
}

// tests
console.log("Students with grade A: ") + filterByGrade(students, "A");
console.log("Average students age is: ", averageAge(students));
