var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var img = document.querySelector("#image");

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x-10,
        y: dets.y-10,
        // ease: "elastic.out",
        // duration: 2
    })
})
img.addEventListener("mouseenter", function(){
    cursor.innerHTML = "view more"
    gsap.to(cursor, {
        scale: 4,
    })
})
img.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
    })
})