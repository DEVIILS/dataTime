// console.log(new Date());
const now = new Date();
const start = new Date(1000 * 60 * 60 * 24 * 365);
const date = new Date(2011, 0, 1, 12, 42, 12);

// let counter = 0;
// const date2 = setInterval(() => {
//   if (counter === 20) {
//     console.log("completion date");
//     clearInterval(date2);
//   } else {
//     console.log(
//       //   `${++counter}: Time: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
//       `${++counter}: Time: ${new Date().toLocaleTimeString()}`
//     );
//   }
// }, 1000);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

// now.setFullYear(2055);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString()); //... только дата
console.log(now.toLocaleTimeString()); //... только время
