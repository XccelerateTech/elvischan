//aaaaaaa bbbbbb cccccccccc
$.get("/data.json").done(function (data) {
    console.log("This function will be run if the ajax is successful");
    console.log(data);
}).fail(function (data) {
    console.log("This function will be run if the ajax if failed");
}).always(function (data) {
    console.log("This function runs no matter success or fail.");
});

function informMe(a, b) {
    $.get(`https://restcountries.eu/rest/v2/${a}/${b}`).done(function (data) {
        console.log("This function will be run if the ajax is successful");
        console.log(data);
    }).fail(function (data) {
        console.log("This function will be run if the ajax if failed");
    }).always(function (data) {
        console.log("This function runs no matter success or fail.");
    });
}

informMe("capital", "tallinn")

function informMee(a, b) {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/${a}/${b}`,
        type: "GET"
    }).done(function (data) {
        console.log("This function will be run if the ajax is successful");
        console.log(data);
    }).fail(function (data) {
        console.log("This function will be run if the ajax if failed");
    }).always(function (data) {
        console.log("This function runs no matter success or fail.");
    });
}

informMee("capital", "tallinn")

//DDDDDDDDDDDDDDDDDD
function exerciseD(a, b) {
    $.get(`https://api.sunrise-sunset.org/json?lat=${a}&lng=${b}&formatted=0`).done(function (data) {
        console.log("This function will be run if the ajax is successful");
        // console.log(new Date(data.results.sunrise));
        $("#resultD").html(`<p>${new Date(data.results.sunrise)}</p><p>${new Date(data.results.sunset)}</p>`);
        // console.log(new Date(data.results.sunset));
    }).fail(function (data) {
        console.log("This function will be run if the ajax if failed");
    }).always(function (data) {
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
function exerciseE(a, b) {
    var deferred1 = $.get(`https://api.sunrise-sunset.org/json?lat=${a}&lng=${b}&date=yesterday&formatted=0`);
    var deferred2 = $.get(`https://api.sunrise-sunset.org/json?lat=${a}&lng=${b}&date=tomorrow&formatted=0`);

    deferred1.done(function () {
        console.log("Deferred 1 done!");
    });
    deferred2.done(function () {
        console.log("Deferred 2 done!");
    });

    var combined = $.when(deferred1, deferred2).done(function
        (yesterday, tomorrow) {
        console.log("Deferred 1 and 2 done!");
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

//EEEEEEEEEEEEEEEE other method use callback

$(function () {
    $('#form').submit(function (input) {
        input.preventDefault();
        // console.log("running")
        let formData = $('#form').serialize();
        console.log(formData);
        exerciseEE(formData, "yesterday", yesterday => {
            // console.log("yesterday: "+JSON.stringify(nyesterday));
            exerciseEE(formData, "tomorrow", tomorrow => {
                // console.log("tomorrow :" + tomorrow.results.sunset);
                var yesterdaySunrise = new Date(yesterday.results.sunrise);
                var yesterdaySunset = new Date(yesterday.results.sunset);
                var tomorrowSunrise = new Date(tomorrow.results.sunrise);
                var tomorrowSunset = new Date(tomorrow.results.sunset);
                $("#resultEE").html(`<p>yesterday sunrise to now ${msToTime(new Date - yesterdaySunrise)}</p><p>yesterday sunset to now ${msToTime(new Date - yesterdaySunset)}</p><p>tomorrow sunrise to now ${msToTime(tomorrowSunrise - new Date())}</p><p>tomorrow sunset to now ${msToTime(tomorrowSunset - new Date())}</p>`);
            })
        })

    });
});

function exerciseEE(date, form, cd) {
    $.get(`https://api.sunrise-sunset.org/json?${date}&date=${form}&formatted=0`).done(function (data) {
        console.log("This function will be run if the ajax is successful exercis");
        // console.log(new Date(data.results.sunrise));
        cd(data);
        // console.log(new Date(data.results.sunset));
    }).fail(function (data) {
        console.log("This function will be run if the ajax if failed");
    }).always(function (data) {
        console.log("This function runs no matter success or fail.");
    });
}

//FFFFFFFFFFF
//same as EEEEEE, but getting day_length.
$("#btn123").on('click', function(e) { //compare the location against Hong Kong's sunrise and sun set.
    e.preventDefault();

    console.log("run");
    let formData = $('#form').serialize();
    exerciseFF(formData, otherCountry =>{
        exerciseFF("lat=22.25&lng=114.16666666",HK =>{
            console.log(otherCountry.results.day_length);
            console.log(HK.results.day_length);
            if (otherCountry.results.day_length>HK.results.day_length){
                $("#resultEE").html(`<p>other country won</p>`);
            }
            else {
                $("#resultEE").html(`<p>HK won</p>`);
            }
        }
        )
    })

});

// function exerciseF(){
//     console.log("eweeeaswasd");
//     let formData = $('#form').serialize();
//     exerciseFF(formData, otherCountry =>{
//         exerciseFF("lat=22.25&lng=114.16666666",HK =>{
//             console.log(otherCountry.results.day_length);
//             console.log(HK.results.day_length);
//             if (otherCountry.results.day_length>HK.results.day_length){
//                 $("#resultEE").html(`<p>other country won</p>`);
//             }
//             else {
//                 $("#resultEE").html(`<p>HK won</p>`);
//             }
//         }
//         )
//     })

// }

function exerciseFF(date, cd) {
    $.get(`https://api.sunrise-sunset.org/json?${date}&formatted=0`).done(function (data) {
        console.log("This function will be run if the ajax is successful exercis");
        // console.log(new Date(data.results.sunrise));
        cd(data);
        // console.log(new Date(data.results.sunset));
    }).fail(function (data) {
        console.log("This function will be run if the ajax if failed");
    }).always(function (data) {
        console.log("This function runs no matter success or fail.");
    });
}


//GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
function getCountryData(countryName, cd ) {
    $.get(`https://restcountries.eu/rest/v2/name/${countryName}`).done(function (data) {
        console.log("This function will be run if the ajax is successful exercis");
        // console.log(new Date(data.results.sunrise));
        cd(data);
        // console.log(new Date(data.results.sunset));
    }).fail(function (data) {
        console.log("This function will be run if the ajax if failed");
    }).always(function (data) {
        console.log("This function runs no matter success or fail.");
    });
}
//this function when called will return the json file received from the generated url

function getSunriseSunsetData(latLng, cd) {
    $.get(`https://api.sunrise-sunset.org/json?${latLng}&formatted=0`).done(function (data) {
        console.log("This function will be run if the ajax is successful exercis");
        // console.log(new Date(data.results.sunrise));
        cd(data);
        // console.log(new Date(data.results.sunset));
    }).fail(function (data) {
        console.log("This function will be run if the ajax if failed");
    }).always(function (data) {
        console.log("This function runs no matter success or fail.");
    });
}
    //this function when called will return the json file received from the generated url


    $(function () {
        $('#formG').submit(function (input) {
            input.preventDefault();

            var countryName1 = $('#formG').find('[name=firstCountry]').val(); //grab the input values from the form store them in variables
            var countryName2 = $('#formG').find('[name=secondCountry]').val();
            // console.log("countryName2" + countryName1);
            getCountryData(countryName1, country01=>{
                getCountryData(countryName2, country02=>{
                    console.log("country01"+JSON.stringify(country01[0]));
                    console.log("country02"+country02[0].latlng)
                    let latLng1=country01[0].latlng;
                    let latLng2=country02[0].latlng;
                    getSunriseSunsetData(`lat=${latLng1[0].toFixed(1)}&lng=${latLng1[1].toFixed(1)}`,country1=>{
                        getSunriseSunsetData(`lat=${latLng2[0].toFixed(1)}&lng=${latLng2[1].toFixed(1)}`,country2=>{
                            console.log("country1"+(new Date(country1.results.sunrise)-new Date(country1.results.sunset)));
                            console.log("country2"+country2.results.sunrise);
                            $("#resultG").html(`<p>country1 is ${(new Date(country1.results.sunrise)-new Date(country1.results.sunset))},country2 is ${(new Date(country2.results.sunrise)-new Date(country2.results.sunset))}</p>`)
                        })
                    })

                })
            })


    
        });
    });