$(function(){
  $(".name").typed({
    strings: ["I'm a photographer.", "I'm a web developer.", "I'm an adrenaline junkie.", "I'm Edward ^250 Yu ^400 :)"],
    typeSpeed: 20,
    callback: function(ev) {
      $(".description").fadeIn();
    }
  });
});
