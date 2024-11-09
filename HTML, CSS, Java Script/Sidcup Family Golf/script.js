var cursor = document.querySelector("#cursor");
var blurr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (event) {
    gsap.to(cursor, {
        x: event.clientX-10,
        y: event.clientY-10,
        duration: 0.2, // Adjust this value for smoothness
        ease: "power2.out",
    });
    gsap.to(blurr, {
        x: event.clientX-300,
        y: event.clientY-300,
        duration: 4, // Adjust this value for smoothness
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