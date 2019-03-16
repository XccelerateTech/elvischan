//a
function person(a,b){
    this.name = a ;
    this.age = b ;
  }
  
  var gg = new person('elvis', 16);
  
  console.log(gg.name);
  console.log(gg.age);
  
  //b
  console.log("\n\nexercise bbbbbbbbbbbbbbbb")
  function player(a,b){
    this.name = a;
    this.health =  b;
    this.attack = function attack(a){
      a.health -=10;
    }
  }
  
  player.prototype.addHp = function(a) {
      console.log(a.name + " added hp");
      a.health += 5;
  };
  
  var player1 = new player('elvis',100);
  var player2 = new player('tom',100);
  
  console.log(player1)
  console.log(player1.attack(player1))
  console.log(player1.health)
  console.log(player2.addHp(player2))
  console.log(player2.health)
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  console.log(getRandomInt(2));
  var attackCount1=0;
  var attackCount2=0;
  while(player1.health>0 && player2.health>0){
    var condition = getRandomInt(2);
    if(condition == 0){
      player2.attack(player1);
      console.log(player2.name+ " won")
      attackCount1 += 1;
      if(attackCount1 == 3){
        attackCount1 -= 3;
        player2.addHp(player2)
      }
    }
    else{
      player1.attack(player2);
      console.log(player1.name +" won")    ;
        attackCount2 += 1;
      if(attackCount2 == 3){
        attackCount2 -= 3;
        player1.addHp(player1)
      }
    }
  
  }
  
  if(player1.health<=0){
    console.log("player1 lose");
  }
  else{
    console.log('player2 lose');
  }

//d
console.log("\n\nex DDDDDDDDDDDDDD")
class Monster {
    constructor(a) {
        this.health = a;
        // this.name;
    }

    set wounded(a) {
        this.health -= a;
        if(this.health<=0){
          console.log("monster dead");
        }
    }

    set Name(a) {
        this.name = a;
    }
}

var monster = new Monster(100);
console.log(monster);
monster.name = "elvis";
console.log(monster);
monster.wounded=5;
console.log(monster);

function hero(){
  var monster1 = new Monster(100);
  monster1.name = "elvis";
  console.log(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
  while(monster1.health>0){
    monster1.wounded=Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    console.log(monster1);
  }
}
hero();

//e
console.log('\n\nexercise EEEEEEEEEEEEEEEEEEEEE' )

class Personn {
      constructor(a) {
        this.age = a.age;
        this.name = a.name;
    }
       info() {
        return `I am ${this.age} years old and ${this.name}.`
    }

    get gg(){
      return `I am gg years old and ${this.name}.`
    }
}

// const personn = new Personn( {age: 44, name: 'Tom' });
const personn = new Personn( {age: 44,name: 'Tom'});
personn.info();
 console.log(personn.info()); // The person is called Tom and is 44 years old
console.log(personn.gg);
console.log(personn);

//g
console.log("\n\n ex GGGGGGGGGGGGGG")
class Birds {
    constructor(a) {
      this.name=a;
    }

    fly() {
        return `${this.name} can fly.`
    }
}


class Bat extends Birds {

  feed(){
    return`${this.name} feed milk.`
  }
}

const Batt = new Bat('bat111');
console.log(Batt);
console.log(Batt.fly());
console.log(Batt.feed());

class Fishs {
  constructor(a){
    this.name=a;
  }
  swim(){
    return `${this.name} can swim`
  }
}

class Fish extends Fishs{
  egg(){
    return `${this.name} can eggs`
  }
}

const fishh = new Fish('fish111')
console.log(fishh);
console.log(fishh.swim());
console.log(fishh.egg());

console.log("\n\ncomposition parttttttttttt")

class Milks {
    constructor(a) {
      this.name=a;
    }

    milk() {
        return `${this.name} can milk.`
    }
}

class Battttt{
    constructor(a) {
        this.milks = new Milks(a)
        this.birds = new Birds(a);
    }

    feed(){
        return this.milks.milk();
    }

    flyy(){
        return this.birds.fly();
    }

}

const battt1 = new Battttt('bat');
console.log(battt1.feed());
console.log(battt1.flyy());

class Eggs {
    constructor(a) {
      this.name=a;
    }

    eggs() {
        return `${this.name} can eggs.`
    }
}

class whale{
    constructor(a) {
        this.swim = new Fishs(a)
        this.birds = new Eggs(a);
    }

    swim1(){
        return this.swim.swim();
    }

    eggs1(){
        return this.birds.eggs();
    }

}

const whale111 = new whale('whale');
console.log(whale111.swim1());
console.log(whale111.eggs1());

//c
console.log('\n\n ex ccccccccccccccccccccccc');
class Gamer {
    constructor(a,b) {
        this.name = a;
        this.money = b;
    }

    lose() {
        this.money -=Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    }
}

const peter = new Gamer('peter',100);
console.log(peter)
peter.lose();
console.log(peter)
const cable = new Gamer('cable',100);
 function gamming(){
   console.log("game start");
   var round =1;
   var result="";
   while(peter.money>0||cable.money>0){
     var peterPlay = getRandomInt(2);
     var cablePlay = getRandomInt(2);
     console.log("round: "+ round);
     if(peterPlay==1&&peter.money>0){
     peter.lose();
     if(peter.money<=0){
       result+="peter lose "
     }
     console.log("peter losing , has money" +peter.money);
     }
    if(cablePlay==1&&cable.money>0){
     cable.lose();
     if(cable.money<=0){
       result+="cable lose "
     }
     console.log("cable losing , has money" +peter.money);
     }
     round +=1;
   }
   console.log(result);
 }
gamming();