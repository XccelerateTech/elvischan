//aaaaaaa bbbbbb cccccccccc
$.get("/data.json").done(function(data) {
    console.log("This function will be run if the ajax is successful");
    console.log(data);
}).fail(function(data) {
        console.log("This function will be run if the ajax if failed");
    }).always(function(data) {
            console.log("This function runs no matter success or fail.");
        });

function informMe(a,b){
    $.get(`https://restcountries.eu/rest/v2/${a}/${b}`).done(function(data) {
        console.log("This function will be run if the ajax is successful");
        console.log(data);
    }).fail(function(data) {
            console.log("This function will be run if the ajax if failed");
        }).always(function(data) {
                console.log("This function runs no matter success or fail.");
            });
}

informMe("capital","tallinn")

function informMee(a,b){
    $.ajax({
        url:`https://restcountries.eu/rest/v2/${a}/${b}`,
        type:"GET"
    }).done(function(data) {
            console.log("This function will be run if the ajax is successful");
            console.log(data);
        }).fail(function(data) {
                console.log("This function will be run if the ajax if failed");
            }).always(function(data) {
                console.log("This function runs no matter success or fail.");
            });
}

informMee("capital","tallinn")

//DDDDDDDDDDDDDDDDDD
function exerciseD(a,b){
    $.get(`https://api.sunrise-sunset.org/json?lat=${a}&lng=${b}&formatted=0`).done(function(data) {
        console.log("This function will be run if the ajax is successful");
        // console.log(new Date(data.results.sunrise));
        $("#resultD").html(`<p>${new Date(data.results.sunrise)}</p><p>${new Date(data.results.sunset)}</p>`);
        // console.log(new Date(data.results.sunset));
    }).fail(function(data) {
            console.log("This function will be run if the ajax if failed");
        }).always(function(data) {
                console.log("This function runs no matter success or fail.");
            });
}

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 365);
    
    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return days + ":" + hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

//EEEEEEEEEEEEEEEEEE
// if u want use callback, look at Day8 main.js
function exerciseE(a,b){
var deferred1= $.get(`https://api.sunrise-sunset.org/json?lat=${a}&lng=${b}&date=yesterday&formatted=0`);
var deferred2= $.get(`https://api.sunrise-sunset.org/json?lat=${a}&lng=${b}&date=tomorrow&formatted=0`);

deferred1.done(function() {
    console.log("Deferred 1 done!");
});
deferred2.done(function() {
    console.log("Deferred 2 done!");
});

var combined= $.when(deferred1, deferred2).done(function
    (yesterday, tomorrow) 
    {console.log("Deferred 1 and 2 done!");
    // console.log("Result 1 is", new Date(yesterday[0].results.sunrise));
    // console.log("Result 2 is", new Date(tomorrow[0].results.sunset));
    var yesterdaySunrise = new Date(yesterday[0].results.sunrise);
    var yesterdaySunset = new Date(yesterday[0].results.sunset);
    var tomorrowSunrise = new Date(tomorrow[0].results.sunrise);
    var tomorrowSunset = new Date(tomorrow[0].results.sunset);
    $("#resultE").html(`<p>yesterday sunrise to now ${msToTime(new Date - yesterdaySunrise)}</p><p>yesterday sunset to now ${msToTime(new Date - yesterdaySunset)}</p><p>tomorrow sunrise to now ${msToTime(tomorrowSunrise - new Date())}</p><p>tomorrow sunset to now ${msToTime(tomorrowSunset - new Date())}</p>`);

    // leave();
});
}

//FFFFFFFFFFF
//same as EEEEEE, but getting day_length.



