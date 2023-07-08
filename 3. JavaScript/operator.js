// 스파르타 코딩클럽 javascript 연산자

console.log("My" + "app");
console.log("1" + 2);
console.log(1 + 2);

const shoesPrice = 20000;
console.log(`이 신발의 가격은 ${shoesPrice} 입니다.`);
console.log("이 신발의 가격은 " + shoesPrice + " 입니다.");

console.log(2 + 1);
console.log(2 - 1);
console.log(2 * 3);
console.log(2 / 3);
console.log(10 % 3);

let count = 1;
const preIncrement = ++count;
console.log(count, preIncrement);

let count2 = 1;
const preIncrement2 = count++;
console.log(count2, preIncrement2);

const shirts = 100000;
const shoes = 80000;
let totalPrice = 0;

totalPrice += shirts;
console.log(totalPrice);

totalPrice += shoes;
console.log(totalPrice);

totalPrice -= shirts;
console.log(totalPrice);

console.log(1 < 2);
console.log(2 <= 2);
console.log(1 > 2);
console.log(1 >= 2);

let True1 = true;
let True2 = true;

console.log(True1 && True2);
console.log(True1 || True2);
console.log(!True1 && True2);

console.log(1 === 1);
console.log(2 === 1);
console.log("javascript" === "javascript");
console.log("JAVASCRIPT" === "javascript");

console.log("#######################################");
const banana = 1000;
const apple = 1500;
let total = banana + apple;
console.log(`총 ${total*0.8}원에 물건을 구입합니다.`)