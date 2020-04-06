if (typeof '10' === 10){
    console.log('rue')
}else{
    console.log('False')
}

if ('10'){
    console.log('True')
}

// datetoday = new Date();
// console.log(datetoday.getMonth());
// console.log(datetoday.getDay());

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);

input = prompt("enter base and height");
val = input.split(',');
area = 0.5 * val[0] * val[1];
console.log(area);

//Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
var coordinates = new Array();
coordinates.push(new coordinate(2, 2));
coordinates.push(new coordinate(6, 10));

function coordinate(x, y) {
    this.x = x;
    this.y = y;
}

m = (coordinates[1].y - coordinates[0].y) / (coordinates[1].x - coordinates[0].x)
console.log(m);


