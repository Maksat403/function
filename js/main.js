// let a = 5;
// let b = 8;
// let res = a + b;

// console.log(res);

//! function declaration --- имеет хойстинг
// function sayHello() {
//   console.log("hello");
// }
// sayHello();

// function summFunc(a = 5, b = 1) {
//   console.log(a + b);
//   return a + b;
//   console.log(a, "a");
//   console.log(b, "b");
// }
// summ(5, 3);
// summ(65, 28);

// function mulFunc(a, b) {
//   return a * b;
// }

// let sum = summFunc(7, 5);
// console.log(sum);

// let mult = mulFunc(2, 3);
// console.log(mult);

// summFunc();

// function congrats(firstName = "тебя", secondName = "дорогой") {
//   console.log(`Поздравдяю ${firstName} ${secondName} с победой`);
// }

// // congrats("Vova", "Pupkin");
// congrats();

// function multArray(arr) {
//   let arr2 = [];
//   for (let elem of arr) {
//     arr2.push(elem * 2);
//   }
//   return arr2;
// }
// console.log(multArray([1, 2, 3, 4, 5]));

// function givePremium(salary, percent) {
//   return (salary * percent) / 100;
// }

// const person = {
//   name: "Jhon",
//   salary: "30000",
// };
// person.premium = givePremium(person.salary, 20);
// person.age = 10;
// console.log(person);

// function sayHello() {
//   console.log("hello");
// }
// sayHello();

// //! function expression (анонимная функция) - нету хойстинга
// let helloFunc = function () {
//   console.log("Hello expression");
// };

// helloFunc();

// function addName(name) {
//   document.write(`<p>${name}</p>`);
// }

// addName("Andrey");

let studentsDB = [];

function addStudent(firstName, lastName, age) {
  let student = {
    firstName,
    lastName,
    age,
  };
  console.log(student);
  studentsDB.push(student);
}
addStudent("Ivan", "Lolkin", 23);
console.log(studentsDB);

while (true) {
  let name = prompt("Введите имя:");
  let lastName = prompt("Введите фамилию:");
  let age = prompt("Ваш возраст:");
  addStudent(name, lastName, age);
  let ans = confirm("Хотите продожить добавление?");
  if (ans === false) {
    break;
  }
}

console.log(addStudent);
