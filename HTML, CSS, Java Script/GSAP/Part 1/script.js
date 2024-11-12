// gsap.to("#box1", {
//     x:1000,
//     duration: 4,
//     delay: 2,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
// })
// gsap.from("#box2", {
//     x:1000,
//     duration: 4,
//     delay: 2
// })
// gsap.to("#box2", {
//     x:1000,
//     y:200,
//     duration: 5,
//     delay: 1
// })
// gsap.from("h1", {
//     opacity: 0,
//     y:30,
//     duration:1,
//     // stagger:-1, This makes it work in reverse
//     stagger:1
// })
// gsap.to("#box", {
//     x:600,
//     duration:1,
//     delay:1,
//     rotate:360,
//     repeat:1,
//     yoyo:true,
// })


// gsap.to("#box1", {
//     x:600,
//     duration:1.5,
//     delay:1,
//     rotate:360,
// })
// gsap.to("#box2", {
//     x:600,
//     duration:1.5,
//     delay:2.5,
//     backgroundColor: "yellow"
// })
// gsap.to("#box3", {
//     x:600,
//     duration:1.5,
//     delay:4,
//     scale:0.5,
//     rotate: 360,
//     borderRadius: "50%"
// })

// var tl = gsap.timeline()

// tl.to("#box1", {
//     x:600,
//     duration:1.5,
//     delay:1,
//     rotate:360,
// })
// tl.to("#box2", {
//     x:600,
//     duration:1.5,
//     backgroundColor: "yellow"
// })
// tl.to("#box3", {
//     x:600,
//     duration:1.5,
//     scale:0.5,
//     rotate: 360,
//     borderRadius: "50%"
// })

var tl = gsap.timeline()

tl.from("h2", {
    y:-20,
    duration:0.5,
    delay:0.5,
    opacity: 0
})
tl.from("h4", {
    y:-20,
    duration:1,
    delay:0.5,
    opacity: 0,
    stagger:0.3
})
tl.from("h1", {
    y: 20,
    duration: 0.5,
    opacity: 0,
    scale: 0.2,
})