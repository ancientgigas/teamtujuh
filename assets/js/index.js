var i = 0;
var txt = "Upload your photo and let everyone see it."; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("motto").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$("#btnExplore").on({
    mouseenter: function(){
      $(this).css("text-transform", "uppercase");
    },
    mouseleave: function(){
      $(this).css("text-transform", "capitalize");
    }
  });