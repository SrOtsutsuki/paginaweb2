$(document).ready(function () {

    scroll();
    



});

function scroll(){

  if($(window).scrollTop() > 50){
    $("#header").css("background-color", "white");
            $(".scroll").css("color", "#070554");
            $(".btnCollapse").css("color", "#070554");
            $(".scroll, .scroll.active").css("font-weight", "bold");
            $(".scroll").hover(function() {
                $(this).css("color", "orangered");
              }).mouseout(function(){
                $(this).css("color", "#070554");
              });
            $(".scroll.active").css("color", "orangered");
  }


    $(window).scroll(function () {
      
        if ($(window).scrollTop() > 50) {
            $("#header").css("background-color", "white");
            $(".scroll").css("color", "#070554");
            $(".btnCollapse").css("color", "#070554");
            $(".scroll, .scroll.active").css("font-weight", "bold");
            $(".scroll").hover(function() {
                $(this).css("color", "orangered");
              }).mouseout(function(){
                $(this).css("color", "#070554");
              });
            $(".scroll.active").css("color", "orangered");

            
            
        } else {
            $("#header").css("background-color", "transparent");
            $(".scroll").css("color", "white");
            $(".scroll.active").css("color", "orangered");
            $(".scroll").hover(function() {
                $(this).css("color", "orangered");
              }).mouseout(function(){
                $(this).css("color", "white");
              });
        }
    });
}