class Clothes {
  constructor(color, size, price) {
    this.color = color;
    this.size = size;
    this.price = price;
  }

  printInfo() {
    console.log(
      `color: ${this.color}, size: ${this.size}, price: ${this.price}`
    );
  }
}

const clothes1 = new Clothes("red", "90", 10000);
clothes1.printInfo();
