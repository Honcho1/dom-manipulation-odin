const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey! I'm red!";

const heading = document.createElement("h3");
heading.style.color = "blue";
heading.textContent = "I'm a blue h3!";

const container = document.createElement("div");
container.style.cssText = "border: 1px solid black; background-color: pink";

const containerHeading = document.createElement("h1");
containerHeading.textContent = "I'm in a div.";

const containerParagraph = document.createElement("p");
containerParagraph.textContent = "ME TOO!";

const body = document.querySelector("body");

body.appendChild(paragraph);
body.appendChild(heading);

container.appendChild(containerHeading);
container.appendChild(containerParagraph);

body.appendChild(container);
