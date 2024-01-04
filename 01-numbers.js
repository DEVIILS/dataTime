/*
const num = 42; //...integer
const float = 42.42; //...float
const pow = 10e3; //...
const big = 1_000_000;
const negative = -10;

// console.dir(Number);
// console.log("pow:", pow);
// console.log("big:", big);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(1 / 0);
console.log(Number.isFinite(Infinity));

const weird = 23 / undefined;
console.log(Number.isNaN(weird)); //... проверка на Nan
console.log(Number.isNaN(12));
*/
//...####################################

/*
const strInt = "42";
const strFloat = "42.42";
console.log("Number(strInt): ", Number(strInt));
console.log("Number(strFloat): ", Number(strFloat));
console.log("Number.parseInt(strInt): ", Number.parseInt(strInt));
console.log("Number.parseFloat(strFloat): ", Number.parseFloat(strFloat));
console.log("+strInt, +strFloat: ", +strInt, +strFloat); //... альтернативный способ привести значение к числу

const fixed = (0.1 + 0.2).toFixed(1);
console.log("parseFloat((0.1 + 0.2).toFixed(1)): ", parseFloat(fixed)); //... {toFixed} - кол-во символов после запятой

//... Big int
console.log(
    "BigInt(Number.MAX_SAFE_INTEGER) + 94224980n: ",
    BigInt(Number.MAX_SAFE_INTEGER) + 94224980n
    );
    console.log("-42n: ", -42n);
    // console.log(10n - 4); error
console.log("parseInt(10n) - 4: ", parseInt(10n) - 4);
console.log("10n - BigInt(4)4: ", 10n - BigInt(4));
console.log("5n / 2n: ", 5n / 2n);
console.log("5 / 2: ", 5 / 2);
*/
//...####################################

//Math
/*
const myNum = 4.9;
console.log("Math.E: ", Math.E);
console.log("Math.PI: ", Math.PI);
console.log("Math.sqrt(25): ", Math.sqrt(25)); //... возвращает квадратный корень числа
console.log("Math.pow(2,3): ", Math.pow(2, 3)); //... возводит в степень
console.log("Math.abs(-42): ", Math.abs(-42)); //... делает число всегда положительным
console.log("Math.max(2, 5, 42, 199, 0): ", Math.max(2, 5, 42, 199, 0)); //... находит MAX число
console.log("Math.min(2, 5, 42, 199, 0): ", Math.min(2, 5, 42, 199, 0)); //... находит MIN число
console.log("Math.floor(myNum): ", Math.floor(myNum)); //... округляет в меньшую сторону
console.log("Math.ceil(myNum): ", Math.ceil(myNum)); //... округляет в большую сторону
console.log("Math.round(myNum): ", Math.round(myNum)); //... округляет в ближайюшую сторону
console.log("Math.trunc(myNum): ", Math.trunc(myNum)); //... только цело число выводит
console.log("Math.random(): ", Math.random()); //... псевдорандомное число

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const num1 = getRandomNumber(10, 100);
console.log(num1);
*/
