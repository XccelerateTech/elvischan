const EventEmitter = require('events');
const player = require('./player')
const computer = require('./computer')

class Referee extends EventEmitter{
     constructor(){
         super();
            this.playerInput = player.start();
            this.computerInput = computer.start();
     }
     judge() {
        const computer = this.computerInput;
        const player = this.playerInput;
        console.log(computer);
        console.log(player);

        if (computer == player) return 'draw!';

        if (computer == 'scissors') {
            if (player == 'rock') return 'player wins';
            return 'computer wins';
        }

        if (computer == 'paper') {
            if (player == 'scissors') return 'player wins';
            return 'computer wins';
        }

        if (computer == 'rock') {
            if (player == 'paper') return 'player wins';
            return 'computer wins'
        }

        return 'player wins';
    }
}


const referee = new Referee("rock");

console.log(referee.judge());
