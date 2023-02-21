import * as images from "../images/index.js";
let skillContainer = document.getElementById("skillContainer");
let skills = Object.entries(images);

//! Utilizzato metodo non dinamico per inserire src/alt nelle immagini. Vedere se è possibile implementare un codice specifico per inserire i values singolarmente

function createElement(tag, className, parent) {
  let element = document.createElement(tag);
  element.classList.add(className);
  parent.append(element);
  return element;
}

function createImage(value, key, parent) {
  let image = document.createElement("img");
  image.setAttribute("src", value);
  image.setAttribute("alt", key)
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

function createSkill() {
  for (let skill of skills) {
    createImage(skill[1], skill[0], createElement("span", "skill", skillContainer));
  }
}

export { createSkill, createElement, createOddElement, createImage, createLink };
