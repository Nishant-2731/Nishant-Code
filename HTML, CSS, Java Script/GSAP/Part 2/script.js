// gsap.from("#page1 #box", {
//     scale: 0,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
// })
// gsap.from("#page2 #box", {
//     scale: 0,
//     duration:2,
//     rotate:360,
//     backgroundColor:"blue",
//     scrollTrigger: {
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })


// gsap.from("#page2 h1", {
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     }
// })
// gsap.from("#page2 h2", {
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
//     }
// })


// gsap.from("#page2 #box", {
//     scale: 0,
//     duration:2,
//     rotate:1440,
//     borderRadius:"50%",
//     backgroundColor:"yellow",
//     scrollTrigger: {
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2,
//         pin:true
//     }
// })


gsap.to("#page2 h1", {
    transform: "translateX(-155%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 1,
        // Whenever we use pin, we use it's parent in the trigger property
        pin:true,
    }
})