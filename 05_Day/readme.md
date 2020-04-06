An array allows storing duplicate elements and different data types.

 It is very common to use const instead of let to declare an array variable. If you ar using const it means you do not use that name again.
 
### Methods to manipulate array

fill: Fill all the array elements with a static value

```js
const arr = Array() // creates an an empty array
console.log(arr)
```

Getting index an element in arr array

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
```

Check an element if it exist in an array.
- Check items in a list
  
```js
// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index != -1){
   console.log('This fruit does exist in the array')  
} else {
    console.log('This fruit does not exist in the array')
}
```
includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false
```
#### Checking array

Array.isArray:To check if the data type is an array

```js
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false
```
#### Converting array to string

toString:Converts array to string

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
```
Slice array elements
Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

#### Splice method in array

Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

```js
  const numbers = [1, 2, 3, 4, 5]

  console.log(numbers.splice())                // -> remove all items

```

```js
  const numbers = [1, 2, 3, 4, 5]
  console.log(numbers.splice(0,1))            // remove the first item
```

```js
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.splice(3, 3, 6, 7, 8))  // -> [1, 2, 3, 6, 7, 8] //it removes two item and replace three items
```
Push: adding item in the end. To add item to the end of an existing array we use the push method.

```js
// syntax
const arr  = ['item1', 'item2','item3']
arr.push('new item')

console.log(arr)
// ['item1', 'item2','item3','new item']
```

#### Removing an element from the beginning

shift: Removing one array element in the beginning of the array.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning

console.log(numbers) // -> [2,3,4,5]
```

unshift: Adding array element in the beginning of the array.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning

console.log(numbers) // -> [0,1,2,3,4,5]
```
