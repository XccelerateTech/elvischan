//appEvents.js
var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    this.greeting = 'Hello there';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet2 = function() {
    console.log(this.greeting);
    this.emit('greet1');
};

var greeter = new Greeter();

greeter.on('greet1', function() {
    console.log('Someone greeted');
});

greeter.greet2();