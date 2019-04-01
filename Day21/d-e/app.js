var timer = require('./timer')

    timer.timing1();

setTimeout(function() {
    timer.start();
}, 5000);

setTimeout(function() {
    timer.parse();
}, 10000);

setTimeout(function() {
    timer.start();
}, 15000);

setTimeout(function() {
    timer.stop();
}, 20000);

setTimeout(function() {
    timer.start();
}, 25000);