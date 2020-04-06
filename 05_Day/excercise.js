// Exercise: Level 2

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar')
shoppingCart.splice(4,1);
shoppingCart[3] = 'Green Tea';

console.log(shoppingCart)