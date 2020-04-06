### for of loop

We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index.

```js
for (const element of arr) {
  // code goes here
}
```

```js
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num) //1 2 3 4 5
}

for (const num of numbers) {
  console.log(num * num) //1 4 9 16 25
}

// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum += sum + num  // can be also shorten like this, sum += num
}
console.log(sum) // 15
```