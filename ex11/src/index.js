// only change code below this line
function mathTest(x, y) {
    // only change code above this line
    if(x < 0 || y < 0) {
        // only change code below this line
        return undefined;
        // only change code above this line
    }
    return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
    // only change code below this line
}

console.log(mathTest(2, 2));
console.log(mathTest(-2, 2));
console.log(mathTest(2, -2));
console.log(mathTest(2, 8));
console.log(mathTest(3, 3));
console.log(mathTest(0, 0));

// only change code above this line
module.exports = mathTest;
