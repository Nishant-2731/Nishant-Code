var cursor = document.querySelector("#cursor");
var blurr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x-10,
        y: dets.y-10,
        duration: 0.2,
        ease: "power2.out",
    });
    gsap.to(blurr, {
        x: dets.x-300,
        y: dets.y-300,
        duration: 4,
        ease: "power2.out",
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // marker: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 1,
    }
});

function cursorEnter(elem)
{
    elem.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale: 4,
            backgroundColor: "transparent",
            boxShadow: "0 0 0 0.35px white",
            // border: "0.1px solid white"
        })
    })
}
function cursorLeave(elem)
{
    elem.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "#95C11E",
            boxShadow: "0 0 0 0 transparent",
            // border: "0px solid transparent"
        })
    })
}

var arrowAll = document.querySelectorAll(".arrow")
arrowAll.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursorEnter(elem);
        gsap.to(elem, {
            scale: 0.31,
            backgroundColor: "#95C11E",
        })
        gsap.to(".arrow i", {
            scale: 3.225806451612903            
        })
    })
    elem.addEventListener("mouseleave", function(){
        cursorLeave(elem);
        gsap.to(elem, {
            scale: 1,
            backgroundColor: "transparent",
        })
        gsap.to(".arrow i", {
            scale: 1            
        })
    })
})

var h4All = document.querySelectorAll("#nav h4");
h4All.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursorEnter(elem);
    })
    elem.addEventListener("mouseleave", function(){
        cursorLeave(elem);
    })
})

var cardAll = document.querySelectorAll(".card .overlay")
cardAll.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursorEnter(elem);
    })
    elem.addEventListener("mouseleave", function(){
        cursorLeave(elem);
    })
})

gsap.from("#about-us", {
    y: 70,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 75%",
        scrub: 1
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 75%",
        scrub: 1
    }
})

gsap.from("#colon1", {
    x: -70,
    y: -70,
    duration: 4,
    scrollTrigger: {
        trigger:"#page3",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 35%",
        scrub: 2,
    }
})
gsap.from("#colon2", {
    x: 70,
    y: 70,
    duration: 4,
    scrollTrigger: {
        trigger:"#page3",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 35%",
        scrub: 2,
    }
})

var elemAll = document.querySelectorAll(".elem h2")
elemAll.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursorEnter(elem);
    })
    elem.addEventListener("mouseleave", function(){
        cursorLeave(elem);
    })
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
    }
})

var aAll = document.querySelectorAll("#footer a");

aAll.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursorEnter(elem);
        gsap.to(elem, {
            color: "white"
        })
    })
    elem.addEventListener("mouseleave", function(){
        cursorLeave(elem);
        gsap.to(elem, {
            color: "black"
        })
    })
})

var iAll = document.querySelectorAll("#footer i");

iAll.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursorEnter(elem);
        gsap.to(elem, {
            color: "white"
        })
    })
    elem.addEventListener("mouseleave", function(){
        cursorLeave(elem);
        gsap.to(elem, {
            color: "black"
        })
    })
})

var imgAll = document.querySelectorAll("#footer #content img");

imgAll.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursorEnter(elem);
        gsap.to(elem, {
            scale: 0.9
        })
    })
    elem.addEventListener("mouseleave", function(){
        cursorLeave(elem);
        gsap.to(elem, {
            scale: 1
        })
    })
})