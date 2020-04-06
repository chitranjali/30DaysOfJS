function solveLinEquation(point1, point2) {
    // console.log(point2)

    // (y1 – y2)x + (x2 – x1)y + (x1y2 – x2y1) =
    // point1.y - point2.y
    v = (point1.y - point2.y).toString() + 'x+' + (point2.x - point1.x).toString() + 'y+' + ((point1.x * point2.y) - (point2.x * point1.y).toString())
    console.log(v + '= 0')

}


function point() {
    this.x = arguments[0];
    this.y = arguments[1];

}
point1 = new point(2,2);
point2 = new point(2,4);

solveLinEquation(point1, point2);

//swapValues

function swapValues(x,y) {
    y = x + y;
    x = y - x;
    y = y - x;

    console.log(x,y)
    return x,y
}

swap = swapValues(3,4)