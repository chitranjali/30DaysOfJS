A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop etc)

The scope let and const is the same. The difference is only reassigning. We can not change or reassign the value of const variable.
I would strongly suggest you to use let and const, by using let and const you will writ clean code and avoid hard to debug mistakes. 
As a rule of thumb, you can use let for any value which change, const for any constant value, array, object, arrow function and
function expression.

### Objects

Everything can be an object and objects do have properties and properties have values, so an object is key value pair