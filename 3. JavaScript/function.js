function knowavg(price1, price2){
    const sum = price1+price2
    return sum/2
}

const avg1 = knowavg(10000, 20000)
const avg2 = knowavg(1000, 2000)

console.log(avg1)
console.log(avg2)