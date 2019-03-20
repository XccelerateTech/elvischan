$('.carousel').carousel({
    interval: 4000
  });

// guess age game
function guessFunction(){
  var ans = $(".guess-button input").val();
  if (isNaN(ans)){
    alert("number only!!! why a idiot")
  }
  else{
    console.log("123123123123")
    if(ans > 26 && ans < 40){
      $(".section03Item p").html(`You think I m ${ans} ? I m younger`)  
    }
    else if (ans < 26 && ans > 5){
      $(".section03Item p").html(`You think I m ${ans} ? I m older`)  
    }
    else if (ans == 26)
      $(".section03Item p").html(` I m ${ans}! Bingo!`) 
    else {
      alert("idiot")
    }
  }
};

//comment box 
var commentRow=0;
function commentFunction(){
  commentRow+=1;
  var colorArray = ["red", "yellow", "blue", "green", "purple", "orange", "grey"];
  var randomNum = Math.floor((Math.random() * 6) + 0);
  var row = `<div class="commentRow${commentRow}"<h5 style="color:${colorArray[randomNum]}"> ${$("#commentBox-name").val()} :<h5><p>${$("#commentBox-comment").val()}</p></div>`;
  $("#comment-box").append(row);
  $("#commentBox-name").val('');
  $("#commentBox-comment").val('');
  $("#comment-box").animate({ scrollTop: $(document).height()-$(window).height() })
}

//BlackJack
var cards=[ "🂡","🂮","🂭","🂫","🂪","🂩","🂨","🂧","🂦","🂥","🂤","🂣","🂢"];
cards = cards.reverse();
function cardFunction(){
  var randomNum = Math.floor((Math.random() * 13) + 0);
  $(".dealer").append(`${cards[randomNum]}`);
  if(randomNum>8 && randomNum<13){
    randomNum=8;
  }
  $(".dealerScore").append(`dealer has ${randomNum+2}`)
}