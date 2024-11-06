const elementsParent = document.getElementsByClassName("about-credentials")[0];

// Get Element Children
const elements = Array.from(elementsParent.children);

// Opacity on Mouse Over
Array.from(elements).forEach(element => {
    element.onmouseover = (event) => {
        event.target.style.opacity = "1";
    };
    element.onmouseleave = (event) => {
        event.target.style.opacity = "";
    }
}); 

