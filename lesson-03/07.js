const numbers = [
  [1, 2, 3, 4, 5],
  [11, 20, 33, 40, 55],
  [111, 200, 333, 400, 555],
]

let arr = []
for (let value of numbers) {
  let arr1 = value.filter((el) => el % 2 === 0)
  arr.push(arr1)
}
console.log(arr)
