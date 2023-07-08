const arr3 = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

arr3.push("ultraviolet");
console.log(arr3);

arr3.pop();
console.log(arr3);

console.log("###################");

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

console.log("###################");

for (const color of arr3) {
  console.log(color);
}

console.log("###################");
const product_price = [100, 200, 300, 500, 100, 3990, 5830, 2930, 2000, 8500];
let sum = 0;
for (const price of product_price) {
  sum += price;
  avg = sum / product_price.length;
}

console.log(sum, avg);
