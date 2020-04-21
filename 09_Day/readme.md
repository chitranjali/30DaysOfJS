## Higher Order Function

Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

### Callback

A callback is a function which can be passed as parameter to other function. See the example below.

```js
// a callback function, the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function take other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
```

https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number

### Empty strings
* Empty strings may be a little counter-intuitive. 
* +num converts empty strings or strings with spaces to zero, and isNaN() assumes the same:

```js
+''                // 0
+'   '             // 0
isNaN('')          // false
isNaN('   ')       // false
```

* Note that the order in which you load the script files is significant for some browsers