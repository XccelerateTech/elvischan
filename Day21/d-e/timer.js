const EventEmitter = require('events');
const process = require('process');

class Timer extends EventEmitter {
    constructor() {
        super();
        this.counter = 10;
        this.timing = 'Time remaining:';
        this.status = false;
    }

    timing1() {
        // important
        const that = this;
        setInterval(emitInterval, 1000);

        function emitInterval() {
            if (that.status) {
                console.log(`${that.timing} ${that.counter}`);
                that.emit('tick');
            }
        }
    }

    start(){
        this.status = true;
    }

    parse(){
        this.status = false;
    }

    stop(){
        this.status = false;
        this.counter = 10;
    }


}

const timer = new Timer();

timer.on('tick', function () {
    if (this.counter == 0) {
        console.log(`kaboom`);
        process.exit();
    }
    this.counter--;
});

module.exports = timer;

// setTimeout(function(){timer.timing1(1);} , 1000);
