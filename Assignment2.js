// DO NOT USE ARGUMENTS FOR INPUTS
// Vaiable size_ is the size of input array.
// Variable A stores all the array elements
// Interview Bit Questions
// var size_ = parseInt(readLine().trim());
// var A = [];
// for (var i = 0; i < size_; i++) {
//   var x = parseInt(readLine().trim());
//   A.push(x);
// }
// // YOUR CODE GOES HERE
// A = A.map((val) => {
//   return val * 2;
// });

// A = A.filter((val) => {
//   return val % 8 === 0 && val;
// });

// A.forEach((val) => {
//   console.log(val);
// });
//
let students = [
  {
    id: 11,
    name: 'Abhinav',
    age: 25,
  },
  {
    id: 2131,
    name: 'Raj',
    age: 21,
  },
  {
    id: 3012,
    name: 'Raj',
    age: 30,
  },
];
let idsArray = students.map((student) => student.id);
console.log(idsArray);
// /----------------- Output-----------/
// [11,2131,3012]
let ageArray = students.map((student) => student.age);
console.log(ageArray);
// /----------------- Output-----------/
//[25, 21, 30]

let students = [
  {
    id: 11,
    name: 'Abhinav',

    age: 25,
  },
  {
    id: 2131,
    name: 'Raj',
    age: 21,
  },
  {
    id: 3012,
    name: 'Raj',
    age: 30,
  },
];
let ageAbove25 = students.filter((student) => student.age >= 25);
console.log(ageAbove25);
// /----------------- Output-----------/
// [{"id": 11,"name":"Abhinav","age":25},{"id": 3012,"name":"Raj","age":30}]

let SumAge = students.reduce((a, student) => a + student.age, 0);
console.log(SumAge() / students.length);
// Error SumAge() is not a function;

const studentss = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 },
];
const studentGrades = studentss.filter((student) => student.grade >= 90);
return studentGrades;
// It will cause an error)
