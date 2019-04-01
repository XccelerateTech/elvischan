const EventEmitter = require('events');


class Computer extends EventEmitter {
    constructor(a) {
        super();
        this.status = a;
    }


    start(){
        this.emit('tick',this.status);
    }
    
}

const computer = new Computer("rock");

computer.on('tick', function (data) {
        console.log("computer : " + data);
});

module.exports = computer;