const EventEmitter = require('events');


class Player extends EventEmitter {
    constructor(a) {
        super();
        this.status = a;
    }


    start(){
        this.emit('tick',this.status);
    }

}

const player = new Player("rock");

player.on('tick', function (data) {
        console.log("player : " + data);
});

module.exports = player;