function log(a){
    if((a%3==0)&&(a%5==0)){
        return "Hong Kong";
    }
    else if (a%3==0){
        return "Hong"
    }
    else if (a%5==0){
        return "Kong"
    }
    else{
        return a;
    }
}
var i;
console.log("\n \nexcersie I")
for(i=1; i<30; i++){
    console.log(log(i));
}

function multiplyByTen(a){
    if (a >= 1000000){
        return a;
    }
    else {
        return multiplyByTen(a*10);
    }
}

function multiplyNumber(a){
    if(isNaN(a)){
        return "Error";
    }
    else{
        return multiplyByTen(a)
    }

}
console.log("\n \nexcersie J")
console.log(multiplyNumber('hello'));
console.log(multiplyNumber(10));
console.log(multiplyNumber(66));

var wards = ['o','b','l','i','e','t','a','d','n','m'];

var num = 1234;
var arr = Array.from(String(num), Number);
console.log(arr[0]); // [1, 2, 3, 4]