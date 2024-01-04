/*
//... Function Declaration может быть вызван всегда
function greet(name) {
  console.log(`1: Hello - ${name}`);
}
//... Function Expression может быть вызвана после инициализации
const greet2 = function (name) {
  console.log(`2: Hello - ${name}`);
};

greet("Artyom");
greet2("Artyom");

// console.dir(greet);

// setTimeout(() => {
//   greet("Artyom2");
//   //   console.log("Timeout");
// }, 1500);

let counter = 0;
const interval = setInterval(() => {
  //   if (counter === 5) {
  //     clearInterval(interval);
  //   } else {
  //     console.log(++counter);
  //   }
  console.log(++counter);
}, 1000);
*/

//... Arrow Functions
/*
const firstName = "Artyom";
const age = 11;
function greet(name) {
  console.log(`1: Hello - ${name}`);
}

const arrow = (name, age) => {
  console.log(`2: Hello - ${name}, Age: ${age}`);
};
const arrow2 = (name, age) => console.log(`3: Hello - ${name}, Age: ${age}`);
const arrow3 = (name) => console.log(`3: Hello - ${name}, Age: ${age}`);
arrow(firstName, age);
arrow2(firstName, age);
arrow3(firstName);

function pow(num, exp) {
  return Math.pow(num, exp);
}
const pow2 = (num, exp) => Math.pow(num, exp);

console.log("1: Pow -", pow(2, 3));
console.log("2: Pow -", pow2(2, 4));

// ========= Default Paramenters
const sum = (a = 40, b = 2) => a + b;
console.log("sum(40, 2):", sum(40, 2));
console.log("sum():", sum());

function sumAll(...numbers) {
  //   let res = 0;
  //   for (let num of numbers) {
  //     res += num;
  //   }
  //   return res;
  return numbers.reduce((acc, cur) => (acc += cur), 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

//...Closures
function createPerson(name) {
  return function (lastName) {
    console.log(name + " " + lastName);
  };
}
const addLastName = createPerson("Artyom");
addLastName("Smirnov");
*/
