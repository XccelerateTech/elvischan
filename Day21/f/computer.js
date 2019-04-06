const EventEmitter = require('events');


class Computer extends EventEmitter {
    constructor() {
        super();
        this.status;
    }


    start(){
        const choices = ['rock', 'paper', 'scissors']
        const num = Math.floor(Math.random() * 3);
        this.status = choices[num];
        this.emit('computerPlay',this.status);
    }
    
}

const computer = new Computer();

computer.on('computerPlay', function (data) {
        console.log("computer : " + data);
        return (data);
});

module.exports = computer;