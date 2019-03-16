
function maya(a){
    if (a>=100&&a<=99999){
    var n =  a;
    var digits = (String(n).split(""));
    // var digits = Array.from(String(n), Number);
    var m = "oblietadnm".split("");

    // console.log(digits);
    // console.log(m);
    // console.log(digits.length);

    var character="";

    for(i=0; i<digits.length; i++){
        digits[i]=m[digits[i]];
        character+=""+digits[i];
    }
    // return character;
    // console.log(digits.join());
    console.log(character);
    }

    else{
        console.log("Invalid Number");
    }
}

maya(1572368);
maya(15728);


