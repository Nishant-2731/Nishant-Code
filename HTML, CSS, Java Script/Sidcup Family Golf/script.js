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

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            
        })
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1;
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        markers: true,
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
        marker: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 1,
    }
});