//Exercises: Level 1

/* 1. Explain the difference between forEach, map, filter, and reduce.

 Foreach : you use when you want to do something with that array.
Map : you use when you want to do something to that array.*/

a = [1, 2, 3, 4, 5]
a = a.map(num => num * 2)
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const products = [
    {product: 'banana', price: 3},
    {product: 'mango', price: 6},
    {product: 'potato', price: ' '},
    {product: 'avocado', price: 8},
    {product: 'coffee', price: 10},
    {product: 'tea', price: ''}
]

console.log(a)

let newArray = [1, 2, 3, 4, 5]
newArray.map(doubleEven)

function doubleEven(ele, index, array) {

    if (ele % 2 === 0) {
        return ele * 2
    }

}

console.log(newArray) //[undefined, 4, undefined, 8, undefined] (map, IF nothing is returned, undefined gets added tto array, always returns new array)

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nums.map(num => {
    console.log(num);
    return 10;
}))//Foreach gives undefined as return value, map always gives a new array.

// 3. Use forEach to console.log each country in the countries array.
countries.forEach(item => console.log(item))

// 4.Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

function callback(name, index, prev_array) {
    console.log(name, index, prev_array)
    return 'chitra'
}

chitra_list = names.map(callback)
console.log(chitra_list)

//7. Use map to create an array of countries length from countries array.
console.log(countries.map(item => item.toUpperCase()))

//11. Use filter to filter out countries containing land
// land =[]
// land = countries.filter(item => {
//     return item.includes('land')
// })
console.log(countries.filter(item => {
    return item.includes('land')
}))

//Use filter to filter out only prices with values.
price_list = products.filter(item => {
    return /^\d+$/.test(item.price) //The test() method executes a search for a match between a regular expression and a specified string
    // if (!(isNaN(item.price))){
    //     return item
    // }

})
console.log(price_list)

//16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(item) {

    if (typeof item === 'string') {
        return item
    }else{

    }
}
let noms = [1, 2, 3, "chi"]
p = noms.filter(getStringLists)
console.log(p)
//Use reduce to sum all the numbers in the numbers array.
function sum(acc, num) {
    return acc + num
}

console.log(nums.reduce(sum))

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const con_str = countries.reduce((con, country, ind, arr) => {
    if (arr.length - 1 === ind) {
        return  con + ', ' + 'and ' + country + ' are north European countries'
    } else {
        return con + ',' +country
    }

})
console.log(con_str)
//some: Check if some of the elements are similar in one aspect. It returns boolean
//20. Use some to check if some names' length greater than seven in names array
console.log(names.some(item => item.length > 7));
//Use find to find the first country containing only six letters in the countries array
six = countries.find(item => item.length === 6)
console.log(six)
console.log(countries.findIndex(item => item.includes('Norway')))