
// 클래스 이용
class Product{
    constructor(name, price){
        this.name=name
        this.price=price
    }

    printInfo(){
        console.log(`name: ${this.name}, price:${this.price}`)
    }
}

const product1 = new Product('콜라', 1600)

product1.printInfo()

// 객체 리터럴
const product2={
    name: 'macbook',
    price: 200000,
    printInfo: function() {
        console.log(`name: ${this.name}, price: ${this.price}`)
    }
}

product2.printInfo()