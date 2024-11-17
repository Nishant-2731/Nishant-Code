function page1Animation()
{
    var tl1 = gsap.timeline()

    tl1.from("nav h1, nav h4, nav button", {
        y: -40,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2
    })
    tl1.from(".center-part1 h1, .center-part1 p, .center-part1 button", {
        x: -300,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3
    })
    tl1.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5
    }, "-=0.5")
    tl1.from(".section1-bottom img", {
        opacity: 0,
        y: 30,
        duration: 0.4,
        stagger: 0.2,
    })
}

page1Animation();

function page2Animation()
{
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 50%",
            end: "top -75%",
            scrub: 1,
        }
    });
    tl2.from(".services", {
        opacity: 0,
        duration: 0.5,
    })
    
    // We use classes in continuation without space gap to ensure it targets a element which has all those classess
    
    // Line 1
    
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim1")
    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim1")
    
    // Line 2
    
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim2")
    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim2")
    
    // Line 3
    
    tl2.from(".elem.line3.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim3")
    tl2.from(".elem.line3.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim3")
    
    // Line 4
    
    tl2.from(".elem.line4.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim4")
    tl2.from(".elem.line4.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim4")
}

page2Animation();