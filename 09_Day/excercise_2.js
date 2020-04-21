// Exercises: Level 2
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
  ]

//2Find the sum of price of products using only reduce reduce(callback))
total_price = products.reduce((sum, item) => {
    i = parseInt(item.price)
    return sum + ( i || 0)
}, 0)
console.log(total_price)

/*
Notes:
**turn NaN from parseInt into 0 for an empty string?
https://stackoverflow.com/questions/6736476/how-to-turn-nan-from-parseint-into-0-for-an-empty-string
var s = '';
var num = parseInt(s) || 0;

**one more interesting point about parseInt? run below both lines? first gives 40, second gives NaN ;)

  var f = parseInt("40 years") + "<br>";
  var g = parseInt("He was 40") + "<br>";

Why? It actually returns a number parsed up to that point where it encounters a character which is not a number in the specified radix(base)

** If u don't give default argument to reduce, it automatically takes the first elelmet as accumulator! uh huh :D

['a', 'b', 'c', 'd'].reduce(function(acc, cur){
  console.log(cur);
  return cur;
})
reduce gives acc values each time as a,b,c and cur as b,c,d

each time you get the pairs as a,b b,c, c,d
 */
//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
pri = products.filter(item => parseInt(item.price))
tot = pri.reduce(((acc, num) => acc + parseInt(num.price)), 0)
console.log(tot, 'total')

// Use the countries information, in the data folder. Sort countries by name, by capital, by population
// console.log(countries) //sort muttates the array alway!
h = countries.sort((a,b) => {

    if (a.population < b.population) return -1
    if (a.population > b.population) return 1
    return 0
})

// console.log(h)

//*** Find the 10 most spoken languages: //pending.
function mostSpokenLanguages(countries, num) {

    const hope = countries.flatMap(item => {
        return item.languages
    })
    var counts = {}
    var arr = []
    hope.forEach((x) => {
         [counts[x] = (counts[x] + 1) || 1]
    })

    console.log(counts.sort((a,b) => {

    }))

}
console.log(mostSpokenLanguages(countries, 10))