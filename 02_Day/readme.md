Primitive data types in JavaScript includes:

* Numbers - Integers, floats
* Strings - Any data under single or double quote
* Booleans - true or false value
* Null - empty value or no value
* Undefined - a declared variable without a value

Non-primitive data types in JavaScript includes:

* Objects
* Functions
* Arrays

Non-Primitive Data Types
* Non-primitive data types are modifiable or mutable.
* Non-primitive data types can not be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.
* Rule of thumb, we do not compare non-primitive data types. Do not compare array, function, or object. Non-primitive values are referred to as reference types because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

Math Object
* In JavaScript the Math Object provides a lots of methods to work with numbers.

Escape Sequences in string
* \n: new line
* \t: Tab means(8 spaces)
* \\: Back slash
* \': Single quote (')
* \":Double quote (")

Performance tip:

* If you have to concatenate large strings, put the string parts into an array and use the Array.Join() method to get the overall string.
This can be many times faster for concatenating a large number of strings.

* Immutables are the objects whose state cannot be changed once the object is created.

* String and Numbers are Immutable.

* Immutable means that:

* You can make a variable name point to a new value, but the previous value is still held in memory. Hence the need for garbage collection.

* var immutableString = "Hello";

*  In the above code, a new object with string value is created.

* immutableString = immutableString + "World";

* We are now appending "World" to the existing value.

* This looks like we're mutating the string 'immutableString', but we're not. Instead:

* On appending the "immutableString" with a string value, following events occur:

* Existing value of "immutableString" is retrieved
"World" is appended to the existing value of "immutableString"
The resultant value is then allocated to a new block of memory
"immutableString" object now points to the newly created memory space
Previously created memory space is now available for garbage collection.