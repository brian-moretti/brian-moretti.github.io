import * as images from "../images/index.js";
let skillContainer = document.getElementById("skill-container");
let skills = Object.entries(images);
let customSkillOrder = [
  "html",
  "css",
  "sass",
  "js",
  "jquery",
  "git",
  "vitejs",
  "wordpress",
];
//! Utilizzato metodo non dinamico per inserire src/alt nelle immagini. Vedere se è possibile implementare un codice specifico per inserire i values singolarmente

function createElement(tag, className, parent) {
  let element = document.createElement(tag);
  element.classList.add(className);
  parent.append(element);
  return element;
}

function createImage(src, alt, parent) {
  let image = document.createElement("img");
  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
  image.setAttribute("title", alt.toUpperCase());
  parent.append(image);
  return image;
}

function createOddElement(tag, className, parent) {
  let element = document.createElement(tag);
  element.classList.add(className);
  parent.prepend(element);
  return element;
}

function createLink(link, parent) {
  let element = document.createElement("a");
  element.setAttribute("href", link);
  element.setAttribute("target", "_blank");
  element.setAttribute("rel", "noopener noreferrer");
  parent.append(element);
  return element;
}

/* function createImage(src, alt, parent) {
  let image = document.createElement("img");
  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
  parent.append(image);
  return image;
} */

function createTitle(element, title) {
  let span = createElement("span", "skill-title", element);
  span.textContent = title.toUpperCase();
  return span;
}

function createSkill() {
  skills.sort((a, b) => {
    return customSkillOrder.indexOf(a[0]) - customSkillOrder.indexOf(b[0]);
  });

  for (let skill of skills) {
    let element = createElement("div", "skill", skillContainer);
    createImage(skill[1], skill[0], element);
    let progress = createElement("progress", "skill-progress", element);
    //progress.setAttribute("data-type", skill[0].toUpperCase());
    //createTitle(element, skill[0]);
  }
  progressAnimation();
}

function progressAnimation() {
  let progressSkills = document.querySelectorAll(".skill-progress");
  let value = 1;
  let animation;
  document.querySelectorAll(".skill").forEach((element, index) => {
    element.addEventListener("mouseenter", (e) => {
      progressSkills[index].setAttribute("value", 1);
      progressSkills[index].setAttribute("min", 1);
      progressSkills[index].setAttribute("max", 100);
      if (e.target.matches(".skill")) {
        animation = setTimeout(function animate() {
          value += 1;
          progressSkills[index].value = value;
          animation = setTimeout(animate, 5);
          if (value >= progressSkills[index].max) {
            value = 1;
            clearTimeout(animation);
          }
        }, 5);
      }
    });
    element.addEventListener("mouseleave", (e) => {
      if (e.target.matches(".skill")) {
        value = 1;
        progressSkills[index].value = 1;
        clearTimeout(animation);
      }
      return;
    });
  });
}

export {
  createSkill,
  createElement,
  createOddElement,
  createImage,
  createLink,
};
