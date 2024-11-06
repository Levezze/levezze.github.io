// Projects Container
const menuElements = Array.from(document.getElementsByClassName("menu-item"));

menuElements.forEach((element) => {
    element.onmouseover = () => {
        element.style.animation = "menu 0.3s ease forwards";
    };
    element.onmouseleave = () => {
        element.style.animation = "menu-reverse 0.3s ease forwards";
    };
});