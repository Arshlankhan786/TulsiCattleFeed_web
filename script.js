var navVar = document.querySelector(".navbar");
var lastScroll = window.pageYOffset;

window.onscroll = function() {

    var currentScroll = window.pageYOffset;

    if(currentScroll>lastScroll){
        navVar.style.top = "-200px";
        navVar.style.opacity = "0";
        navVar.style.transition = ".4s linear"
    }
    else {
        navVar.style.top = "0";
        navVar.style.opacity = "1";
        navVar.style.transition = ".4s linear";
    }

    lastScroll=currentScroll;
}
let socialpop = document.querySelector(".social");

           function openonclick() {
             socialpop.style.opacity = "1";
           }
           function closeonclick(){
            socialpop.style.opacity = "0"
           }