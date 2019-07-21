const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function (event) {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    const widthValue = window.scrollY/3
    audrey.style.width = `${widthValue}px`
    
    
    /*
    Adjust the height of audrey to be 1/4 the value of
    `window.scrollY`. No lower than 100px, though.
    */
    const heightValue = window.scrollY/4
    audrey.style.height = `${heightValue}px`

  })
  
