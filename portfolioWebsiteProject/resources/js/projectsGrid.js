// Scrollable Container
const scrollContainer = document.getElementById("scroll-container");

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

// Projects container
const projectElements = Array.from(document.getElementsByClassName("grid-item"));

// Projects anchors
const projectAnchors = Array.from(document.getElementsByClassName("grid-item-project"));

// Titles
const projectTitles = Array.from(document.getElementsByClassName("grid-item-title"));

// Project Divs for Random Index
const projectsDiv = document.getElementsByClassName("grid-container")[0];
const projectChildren = projectsDiv.children; // Get Element Children
const randomIndex = Math.floor(Math.random() * projectChildren.length); // Random Index
console.log(`Random projecct display: ${randomIndex}`);

// Main Display Elements
const mainImage = document.getElementById("main-img")
const mainDisplay = document.getElementsByClassName("main-display")[0]
const mainText = document.getElementById("main-text")
const nodes = mainText.childNodes;

// Change Main Display Function
const changeDisplay = (index) => {
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
  mainDisplay.style.backgroundColor = projectIdData["color-1"];
  mainText.style.borderBottom = `1px solid ${projectIdData["color-3"]}`;
  mainText.style.borderTop = `1px solid ${projectIdData["color-3"]}`;

  // Styling per node
  nodes.forEach(node => {
      if (node.nodeName === "H2") {
          node.style.color = projectIdData["color-2"];
          node.textContent = projectIdData["title"];
      };
      if (node.nodeName === "DIV") {
          node.style.color = projectIdData["color-3"];
          node.innerHTML = projectIdData["text"];
          // Change the styling of anchors inside the <p>
          Array.from(node.children[0].children).forEach(grandchild => {
              if (grandchild.nodeName === "A") {
                  grandchild.style.color = projectIdData["color-3"];
                  grandchild.style.textDecoration = `underline ${projectIdData["color-2"]}`;
              };
          });
      };
  });
}

// Apply styles

//On Load
changeDisplay(randomIndex);

projectElements.forEach((element, index) => {
  // Mouse Over & Leave
  element.onmouseover = () => {
      projectAnchors[index].style.opacity = "0.4";
      projectTitles[index].style.display = "block";
  };
  element.onmouseleave = () => {
      projectAnchors[index].style.opacity = "";
      projectTitles[index].style.display = "";
  };
  // On Thumbnail Click
  element.onclick = () => {
      changeDisplay(index);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});