// var a="fizzbuzz";
// var b = a.split("");
// console.log(b);
// var c=0;
// for(i=0; i<b.length; i++){
//     if(b[i]=="z"){
//         c++;
//     }
// }
// console.log(c);

function countChar(a,d){
    var b = a.toLowerCase().split("");
    var c=0;
    for(i=0; i<b.length; i++){
        if(b[i]==d){
            c++;
        }
    }
    console.log(c);
}

countChar("fizzbuzz","z") ;
countChar("Fancy fifth fly aloof","f");