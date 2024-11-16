var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.5,
})
tl.from("#full h4", {
    x: 150,
    duration: 0.6,
    stagger: 0.2,
    opacity: 0,
})
tl.from("#full i", {
    opacity: 0
})

// This function is used to pause animation so that it doesn't just automatically play at the starting loading of the page
tl.pause();

menu.addEventListener("click", function(){
    // This function is used to play the animation whenever the user wishes
    tl.play();
})
cross.addEventListener("click", function(){
    tl.reverse();
})