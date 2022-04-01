const shoesPrice = 40000;
if (shoesPrice < 50000) {
  console.log("신발을 사겠습니다.");
}

const capPrice = 50000;
if (capPrice < 40000) {
  console.log("모자를 사겠습니다");
} else if (capPrice <= 50000) {
  console.log("고민을 해볼게요");
} else {
  console.log("모자가 너무 비싸요");
}

const distance = 1;
if (distance < 2) {
  console.log("걸어가자");
} else if (distance >= 2 && distance < 5) {
  console.log("택시를 타자");
} else {
  console.log("기차를 타자");
}
