//A
var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

console.log(asia.countries.India.Mumbai.population);
console.log(asia.countries.China["Hong Kong"].population);
console.log(asia.countries.China.Beijing.population);

var familyBankValues = {

    familyMembers: {

        Mother: {

            "account number": 8096291,

            accountBalance: 10000000

        },

        Father: {

            "account number": 8096292,

            accountBalance: 9999999

        },

        Sister: {

            "account number": 8096293,

            accountBalance: 10000

        },

        "Step Brother": {

            "account number": 8096292,

            accountBalance: 15000

        }

    }

    }

console.log(familyBankValues.familyMembers['Step Brother']);

var stepBro = [];
stepBro.push(familyBankValues.familyMembers['Step Brother']["account number"]);
stepBro.push(familyBankValues.familyMembers['Step Brother'].accountBalance);

console.log(stepBro);
console.log(familyBankValues.familyMembers['Step Brother'][0]);
console.log(asia[1]);

//B
function reverse(a){
    var b = a.toString();
    var numArray = b.split("");
    var numArray = numArray.reverse();
    return numArray;
}
console.log(reverse(12345));

reverse(12345).forEach(function(n){
    console.log(n);
});


//C
var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

var result = players.filter(function(a){
    return a.club !== "FC Barcelona";
})

var result02 = [];
players.forEach(function(a){
    result02.push(a.name);
})
console.log(result02);

//D
var marks = [

    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },

    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
    ]

function gg(a){
    var sum4 = a.reduce(function (accumulator, currentValue, currentIndex, array) {
        var sum2;
        sum2 = array.length;
        return sum2;
    });
    var sum1 = a.reduce(function (accumulator, currentValue, currentIndex, array) {
        var sum2;
        sum2 = accumulator + currentValue.mark;
        return sum2;
    },0);
return Math.floor(sum1/sum4);
}
console.log(gg(marks));

//E
function kk(a,b){
var sum5 = b.reduce(function (accumulator, currentValue, currentIndex, array) {
    if(array[0]>array[1]){
        return 0;
    }
    else if(array[0]<array[1]){
        return 1;
    } 
    else{
        return 2;
    }
});
var teamWin = a.reduce(function (accumulator, currentValue, currentIndex, array){
    if(sum5 == 1){
        return "At match ".concat(array[0]).concat("-").concat(array[1]).concat(", ").concat(array[1]).concat(" gg lol")
    }
    else if (sum5 == 0){
        return "At match ".concat(array[0]).concat("-").concat(array[1]).concat(", ").concat(array[0]).concat(" gg lol")
    }
    else {
        return "At match ".concat(array[0]).concat("-").concat(array[1]).concat(", ").concat(" teams played draw lol")
    }
});

return teamWin;

}


console.log(kk(['Germany', 'Ukraine'],[2, 0]));
console.log(kk(['Belgium', 'Italy'],[0, 2]));
console.log(kk(['Portugal', 'Iceland'],[1, 1]));

//F
function transform(a){
    var b = a.split("");
    console.log(b);
    var d = "";
    var c =['j','a','b','c','d','j','f','e','h','i'];
    for(i=0; i<b.length; i++){
        console.log(parseInt(b[i]));
        console.log(c[parseInt(b[i])]);
        d+=c[parseInt(b[i])];
    }
    return d;
}

console.log(transform('213'));

//G
function middle(a){
    // var sum8 = a.reduce(function (accumulator, currentValue, currentIndex, array) {
    //     return array;
    // },0);
    // console.log(sum8);
    // var sum5 = a.reduce(function (accumulator, currentValue, currentIndex, array) {
    //     return array.sort();
    // },0);
    // console.log(sum5);
    // console.log(sum8);
    // var sum6 = sum8.reduce(function(a,b,c,d){
    //         if(b==sum5[1]){
    //             console.log(c);
    //         }
        
    // },0);
    for(i=0;i<a.length;i++){
        if(a[i]!=Math.min(...a)&&a[i]!=Math.max(...a)){
            console.log(a[i]);
            console.log(a.indexOf(a[i]));
        }
    };
}

middle([2,4,1]);

//H
//I