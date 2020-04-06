### Function with unlimited number of parameters

Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaration(regular function) and arrow function.Let us see examples both in function declaration and arrow function.

#### Unlimited number of parameters in regular function

 A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

 ```js
// Let us access the arguments object
​
function sumAllNums() {
  console.log(arguments)
}

sumAllNums(1, 2, 3, 4)) 
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

#### Unlimited number of parameters in arrow function

 Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name.  Any thing we passed as argument in the function can be accessed as array in the arrow function. Let us see an example

 ```js
// Let us access the arguments object
​
const sumAllNums = (...args) => {
  // console.log(arguments), arguments object not found in arrow function
  // instead we use an a parameter followed by spread operator
  console.log(args)
}

sumAllNums(1, 2, 3, 4))
// [1, 2, 3, 4]

```
### Anonymous Function

Anonymous function or without name

```js
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
```

### Expression Function

Expression functions are anonymous functions. After we create a function without a name and with assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

```js
//Declaration function
function square(n) {
  return n * n
}

console.log(square(2)) // -> 4

// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4
```
### Self Invoking Functions

Self invoking functions are anonymous functions which do not need to be called to return a value.

```js
(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```
### Arrow Function

Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

```js
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2)) // -> 4
// if we have only one line, it can be written as follows, explicit return
const square = n => n * n // -> 4
```

/*An additional cause of this can be ES2015 arrow functions. They cannot be used as constructors.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const f = () => {};
new f(); // This throws "f is not a constructor"
 */