function breakTheText()
{
    var h1 = document.querySelector("h1")

    var h1Text = h1.textContent
    
    var clutter = "";
    
    var splittedText = h1Text.split("");
    var halfVal = Math.floor(splittedText.length / 2);
    
    splittedText.forEach(function(elem, idx){
        if(idx < halfVal)
        {
            clutter += `<span class= "a">${elem}</span>`;
        }
        else
        {
            clutter += `<span class= "b">${elem}</span>`;
        }
    });
    
    h1.innerHTML = clutter;
}

breakTheText();

gsap.from(".a", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15
})
gsap.from(".b", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: -0.15
})