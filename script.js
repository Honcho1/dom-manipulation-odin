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

container.appendChild(containerHeading);
container.appendChild(containerParagraph);

body.appendChild(paragraph);
body.appendChild(heading);
body.appendChild(container);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
