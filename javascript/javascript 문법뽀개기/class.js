class Notebook {
  constructor(name, price, company) {
    // 생성자
    this.name = name;
    this.price = price;
    this.company = company;
  }
}

const notebook1 = new Notebook("samsung ion2 notebook", 1200000, "samsung");

console.log(notebook1.name);
console.log(notebook1.price);
console.log(notebook1.company);
