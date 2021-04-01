window.onscroll = function () {
  if (window.scrollY > 50) {
    document.getElementById('header-top').classList.add('header-top2');
    document.getElementById('header-top').classList.remove('header-top');
    document.getElementById('scrollup').style.display = "block"


  } else {
    document.getElementById('header-top').classList.add('header-top');
    document.getElementById('header-top').classList.remove('header-top2');
    document.getElementById('scrollup').style.display = "none"
  }
}
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
// function clickhere() {


//   document.getElementById("menu-bar").style.width = "250px";


// }
// function clickhere() {
//   // document.getElementById('nav-toggle').classList.toggle("fas fa-times")

//   var x = document.getElementById('menu-bar');


//   if (x.style.width == 0) {

//     x.style.width = "250px";
//   } else if (x.style.width == "250px") {
//     x.style.width = 0;
//   }
// }
// function closeNav() {
//   document.getElementById("menu-bar").style.width = "0";
//   var x = document.getElementById('nav-toggle')

//   var y= document.getElementById('nav-toggle2')
  
//   if(x.style.display=="block"){
//     x.style.display="none"
//     y.style.display ="block"
//   }
  
//   else{
//     y.style.display="block"
//     x.style.display ="none"
//     document.getElementById('nav-toggle2').classList.add('class')
//     document.getElementById('nav-toggle2').classList.remove('kk')
   
//   }
// }
// window.onscroll =function(){
//   if(window.scrollY<100){
//     document.getElementById('scrollup').style.display="none"
//   }else{
//     document.getElementById('scrollup').style.display="block"
//   }
// }
function scrolTo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
$(document).ready(function () {
  "use strict";
  $(".buttons button").click(function () {
    $(this)
      .addClass("active-btn")
      .siblings()
      .removeClass("active-btn");
    if ($(this).data("filter") === "all") {
      $(".images .col-md-4").fadeIn();
    } else {
      $(".images .col-md-4").fadeOut();
      $($(this).data("filter"))
        .parent()
        .fadeIn();
    }
  });
  //   $(function() {
  //     $(".circlechart").circlechart();
  //   });
});
