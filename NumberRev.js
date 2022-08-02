
var number = 456
var rev = 0
while (number > 0) {
    const lastdisit = number % 10
    rev = rev * 10 + lastdisit
    number = Math.floor(number / 10)

}
console.log(rev)




// Short way
const numReverse = (num) => {

    return Number(num.toString().split('').reverse().join(''))
}
console.log(numReverse(123))
