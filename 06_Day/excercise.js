
/*number.toString(radix)
Convert a number to a string, using different bases:

Optional. Which base to use for representing a numeric value. Must be an integer between 2 and 36.
2 - The number will show as a binary value
8 - The number will show as an octal value
16 - The number will show as an hexadecimal value
 */
hex = '#' + Math.random().toString(16).slice(2, 8);
console.log(hex);

// generates a random rgb color number.
r = Math.floor(Math.random() * 255);
g = Math.floor(Math.random() * 255);
b = Math.floor(Math.random() * 255);
color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

console.log(color);

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

fruit = ['banana', 'orange', 'mango', 'lemon'];
rev_fruit = [];

for (let i= (fruit.length - 1);i >= 0; i-- ){

    rev_fruit.push(fruit[i]);

}
console.log(rev_fruit);

//assign an array to a const when I use non-mutating methods, and let for mutating ones

