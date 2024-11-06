// Scrollable Container
const scrollContainer = document.getElementById("drag");

let isDown = false;
let startX;
let scrollLeft;

// Add mousedown event to start dragging
scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

// Add mouseleave and mouseup events to stop dragging
scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
});
scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
});

// Add mousemove event to handle dragging motion
scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return; // If not holding mouse down, do nothing
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scroll speed
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// Projects Container
const projectElements = Array.from(document.getElementsByClassName("grid-item"));

// Projects Anchors
const projectAnchors = Array.from(document.getElementsByClassName("grid-item-project"));

// Titles
const projectTitles = Array.from(document.getElementsByClassName("grid-item-title"));

const mainImage = document.getElementById("main-img")
const mainContent = document.getElementById("main-content")
const mainText = document.getElementById("main-text")
const nodes = mainText.childNodes;


// Apply Styles
projectElements.forEach((element, index) => {
    element.onmouseover = () => {
        projectAnchors[index].style.opacity = "0.4";
        projectTitles[index].style.display = "block";
    };
    element.onmouseleave = () => {
        projectAnchors[index].style.opacity = "";
        projectTitles[index].style.display = "";
    };
    element.onclick = () => {
        const projectId = projectAnchors[index].getAttribute("id");
        const styles = window.getComputedStyle(projectAnchors[index]);
        mainImage.style.backgroundImage = styles["backgroundImage"];
        if (projectId === "cties" || projectId === "final-project" || projectId === "sde-dov" || projectId === "n2y") {
            mainImage.style.backgroundSize = "";
            mainImage.style.backgroundPosition = "";
        } else if (projectId === "dystopia-now") {
            mainImage.style.backgroundSize = "";
            mainImage.style.backgroundPosition = "20% center";
        } else {
            mainImage.style.backgroundSize = "contain";
            mainImage.style.backgroundPosition = "";
        };

        const projectIdData = projectData[projectId];
        mainImage.style.backgroundColor = projectIdData["color-1"];
        mainContent.style.backgroundColor = projectIdData["color-1"];
        mainText.style.borderBottom = "1px solid " + projectIdData["color-3"];
        mainText.style.borderTop = "1px solid " + projectIdData["color-3"];

        nodes.forEach(node => {
            console.log(node);
            if (node.nodeName === "H2") {
                node.style.color = projectIdData["color-2"];
                node.textContent = projectIdData["title"]
            };
            if (node.nodeName === "P") {
                node.style.color = projectIdData["color-3"];
                node.innerHTML = projectIdData["text"]
            };
        });
        

    };
});






























// Shuffle Projects Grid

// const projectsDiv = document.getElementById("projects");

// // Get Element Children
// const projectChildren = projectsDiv.children;

// // Indexes Array
// const indexArray = [...Array(projectChildren.length).keys()];

// const shuffleArray = (array) => {
//     let arrayIndex = array.length;

//     // Fisher–Yates (aka Knuth) Shuffle
//     while (arrayIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * arrayIndex);
//         arrayIndex--;
//         // Replace Item with Random Item
//         [array[arrayIndex], array[randomIndex]] = [array[randomIndex], array[arrayIndex]];
//     }
// }

// shuffleArray(indexArray);

// console.log(indexArray)
// // console.log(shuffledIndexes)