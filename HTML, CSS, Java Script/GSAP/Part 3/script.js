var initialPath = `M 10 250 Q 500 250 950 250`

var finalPath = `M 10 250 Q 500 250 950 250`

var string = document.querySelector("#string")

function reset()
{
    gsap.to("svg path", {
        attr: {d:finalPath},
        duration: 1,
        ease: "elastic.out(1,0.2"
    })
}

string.addEventListener("mousemove", function(dets){
    // console.log(dets)
    initialPath = `M 10 250 Q ${dets.x} ${dets.y} 950 250`
    gsap.to("svg path", {
        // attr is short for attribute and is used to change attribute of element through gsap
        attr: {d: initialPath},
        duration: 0.3,
        ease: "power3.out"
    })
})
string.addEventListener("mouseleave", function(){
    reset();
})

// Self Improved Version - For moving stroke while holding down click

// let isHolding = false;
// string.addEventListener("mousedown", function(){
//     isHolding = true;

// })
// string.addEventListener("mouseup", function(){
//     isHolding = false;
// })
// string.addEventListener("mouseleave", function(){
//     if(isHolding)
//     {
//         reset()
//     }
//     isHolding = false;
// })
// string.addEventListener("mousemove", function(dets){
//     // console.log(dets)
//     if(isHolding)
//     {
//         initialPath = `M 10 250 Q ${dets.x} ${dets.y} 950 250`
//         gsap.to("svg path", {
            
//             attr: {d: initialPath},
//         })
//     }
//     else
//     {
//         reset()
//     }
// })

// string.addEventListener("mouseenter", function(){
//     console.log("enter")
// })
// string.addEventListener("mouseleave", function(){
//     console.log("leave")
// })