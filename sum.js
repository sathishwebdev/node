const Sum = (num) => num[0] + num[1]

const numbers = [+process.argv[2], +process.argv[3]]

console.log(Sum(numbers))
console.log(global)