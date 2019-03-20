// carousel timer
$('.carousel').carousel({
  interval: 4000
});

//rainbow footer
$(".rainBowBox input").keydown(function () {
  var color = ["#ea609e", "#6aa2d2", "#59b56d", "#eb923b", "#7b1bc2"];
  var ans = $(".rainBowBox input").val();
  ans = ans.toString();
  ans = ans.split("");
  var words = "";
  for (var i = 0; i < ans.length; i++) {
    words += `<span style='color: ${color[i % 5]}'>${ans[i]}</span>`;
  }
  $("#marquee").html(words);
});

//NavBar Starting----------------------------------------------------------------
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});

(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function (partial) {
  
      var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
  
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
  
  })(jQuery);
  
  
  //change the nav bar from transparent to solid - vice versa
  $(document).ready(function () {
    $(window).scroll(function () { // check if scroll event happened
      if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('solid');
        $('.navbar-brand').addClass('navbar-brandActive')
  
      } else if ($(document).scrollTop() < 50 ) { //if the scrollbar is less than 50 px from the top it goes back to transparency 
        $('.navbar').removeClass('solid');
        $('.navbar-brand').removeClass('navbar-brandActive')
        $('.navbar').addClass('navbar-light');
      }
  
  
    });
  });
//NavBar End----------------------------------------------------------------


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
  var colorArray = ["#ea609e", "#6aa2d2", "#59b56d", "#eb923b", "#7b1bc2"];
  var randomNum = Math.floor((Math.random() * 4) + 0);
  var row = `<div class="commentRow${commentRow}"<h5 style="color:${colorArray[randomNum]}"> ${$("#commentBox-name").val()} :<h5><p>${$("#commentBox-comment").val()}</p></div>`;
  $("#comment-box").append(row);
  $("#commentBox-name").val('');
  $("#commentBox-comment").val('');
  $("#comment-box").animate({ scrollTop: $(document).height()-$(window).height() })
}