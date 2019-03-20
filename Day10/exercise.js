//testing example
// setTimeout(function(){
//     console.log('I logged after 3 seconds');
// }, 3000);

// function logger() {
//     console.log('I log every 3 seconds');
// }
// setInterval(logger, 3000);

//AAAAAAAAAAA
// function minuteAlarm (a) {
//     if(a>60 || a<1){
//         console.log("input between 1 and 60")
//     }
//     else{
//     setTimeout(function(){
//             var d = new Date();
//             console.log(`Alarm ringing at ${d}`);
//     }, a*1000);
//     }
// }

// minuteAlarm(4);
// minuteAlarm(80);

//BBBBBBBBBBBBB
var tt;
function drippingTap(){
    tt=setInterval(function(){
        console.log("drop");
    },1000)
};

drippingTap();

setTimeout(function(){
    clearTimeout(tt);
}, 3000);

//CCCCCCCCCCCCCC
//i do not know.










