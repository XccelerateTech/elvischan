const EventEmitter = require('events');


class Player extends EventEmitter {
    constructor(a) {
        super();
        this.status = a;
    }


    start(){
        this.emit('player',this.status);
    }

}

const player = new Player("rock");

player.on('player', function (data) {
        console.log("player : " + data);
        return(data);
    });

module.exports = player;