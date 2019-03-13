//AAAAAAAAAAAAAAAAAAA
var http = new XMLHttpRequest();

http.open("GET", "/data.json")

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(JSON.parse(http.responseText));
        var a = JSON.parse(http.responseText);
        document.getElementById("demo").innerHTML=a.name;

    } else {
        console.log('error occurred' + http.status);
    }
}
// onreadystatechange should be before http.send()
http.send();

//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

function informMe(endpoint, value, callback){

var http2 = new XMLHttpRequest();
http2.open("GET", `https://restcountries.eu/rest/v2/${endpoint}/${value}`, true); //link is the url address you want to pass in

http2.onreadystatechange = function() {
    if(http2.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http2.status == 200) {
        let data = http2.responseText;
        callback(data);
        // console.log(JSON.parse(http2.responseText));
        // var a = JSON.parse(http2.responseText);
        // document.getElementById("demo2").innerHTML=a.find(x => x.name === "Afghanistan").capital;

    } else {
        console.log('error occurred' + http2.status);
    }
}

http2.send();

// callback(data); // Return the Data by calling callback with the resulting data 
}

informMe('capital','london',function(data){
    console.log(JSON.parse(data)[0].capital);
})


//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
function whoIsInSpace(){
    var http = new XMLHttpRequest();

http.open("GET", "http://api.open-notify.org/astros.json");

    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            var a = (JSON.parse(http.responseText).people);
            var key = [];
            for (var i=0; i<a.length; i++){
                key.push(a[i].name)
            }
            console.log(key);
        } else {
            console.log('error occurred' + http.status);
        }
    }
    // onreadystatechange should be before http.send()
    http.send();
}

whoIsInSpace();

//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
function whoIsInSpace1(callback){
    var http = new XMLHttpRequest();

http.open("GET", "https://randomuser.me/api/?results=50");
    console.log("running");
    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            var data = JSON.parse(http.responseText);
            callback(data);
        } else {
            console.log('error occurred' + http.status);
        }
    }
    // onreadystatechange should be before http.send()
    http.send();
}

class User {
    constructor(options) {
        this.firstName = options.name.first;
        this.lastName = options.name.last;
        this.email = options.email;
        this.dob = options.dob.date;
    }

    call(){
        console.log(`i m ${this.firstName} ${this.lastName}, my email is ${this.email}, my dob is ${this.dob}`);
    }
}

var newData="";
whoIsInSpace1(function(data){
    // console.log((data[0])); 
    // var user0 = new User(data[0]);
    // console.log(user0.call());
    // var user1 = new User(data[1]);
    // console.log(user1.call());
    console.log(data.results.map((user)=> {
        return new User(user)
    }))
    newData = data.results.map((user)=> {
        return new User(user)
    })
    console.log(newData[0]);
    // for(var i=0; i<data.length; i++){
    //     newData.push(data[i]);
    // }
    // newData = newData.concat(JSON.stringify(data));

});

// var user0 = new User(newData[0]);

// console.log(user0);


