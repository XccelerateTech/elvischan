var myArray = [4, 8, 2, 7, 5];

function processArray(myArray, cb) {
    var newArray = [];
    for (var i = 0; i < myArray.length; i++) {
        newArray.push(cb(myArray[i]));
    }
    return newArray;
}

console.log(processArray(myArray, times2));


console.log(processArray(myArray, function (a) {
    return a + 8
}))

console.log(processArray(myArray, function (a) {
    return a / 2
}))

function times2(a) {
    return a * 2
}

function plus8(a) {
    return a + 8
}

function div2(a) {
    return a / 8
}

function processArrayV2(myArray, cb, cb2, cb3) {
    var newArray = [];
    for (var i = 0; i < myArray.length; i++) {
        newArray.push(cb(cb2(cb3(myArray[i]))));
    }
    return newArray;
}

console.log(processArrayV2(myArray, plus8, plus8, times2));

function processArray(myArray, cb) {
    var newArray = [];
    for (var i = 0; i < myArray.length; i++) {
        newArray.push(cb(myArray[i]));
    }
    return newArray;
}


