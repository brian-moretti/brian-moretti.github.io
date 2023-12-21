//import { circularAnimation } from "./src/js/skillAnimation";
import { createSkill } from "./src/js/createElement";
import { menu } from "./src/js/sidebarMenu";
import { footer } from "./src/js/copyright";
//import { createProject, arrayProject } from "./src/js/projectPage"; //! TOLTO PER INCOMPATIBILITA'

/* const loader = "< Let's build something together >";
const loaderContainer = document.querySelector(".container");
const text = document.querySelector(".textLoader");
for (let letter of loader) {
  text.textContent += letter;
}
 */
const btnMenu = document.getElementById("showMenu");
//let skillElement = document.querySelectorAll(".skill");

window.addEventListener("DOMContentLoaded", () => {
  btnMenu.style.visibility = "hidden";
  //text.addEventListener("animationend", () => {
   // document.body.removeChild(loaderContainer);
    btnMenu.style.visibility = "visible";
    menu.style.transform = "translateY(0)";

    for (let i = 0; i < document.querySelectorAll(".showing").length; i++) {
      document.querySelectorAll(".showing")[i].style.transitionDelay =
        i * 0.1 + "s";
      document.querySelectorAll(".showing")[i].style.opacity = 1;
    }
  //});

  createSkill();
 // circularAnimation(skillElement);
});


/*arrayProject.forEach((element) => {
  createProject(element);
});*/

//! CODE FOR LOADER ANIMATION TO PUT INSIDE EVENT ABOVE
/*loader.style.display = "flex";
  loader.addEventListener("animationend", () => {
    document.body.removeChild(loader);
    document.body.style.transition = "all 0.5s ease-in";
  })*/

/*const spans = document.querySelectorAll(".showing");
const titleSection = document.getElementById("title");

function animation(e) {
  let target = e.target;
  if (target.matches("span")) {
    target.classList.toggle("active");
  }
}

titleSection.addEventListener("mouseover", (e) => {
  animation(e);
});

//*animation skill

/*
let skill = document.getElementById("skillContainer");
let x = skill.offsetLeft / 2;
let y = skill.offsetTop / 2;
let radius = 50;
let deg = 0;

function circular(deg){
  let leftX = x + radius * Math.cos(deg);
  let topY = y + radius * Math.sin(deg);

  let ski = document.querySelectorAll(".skill");
  for (let sk of ski) {
    sk.style.left = leftX + "px";
    sk.style.top = topY + "px";
  }
}

setInterval(() => {
  deg = (deg + Math.PI / 360) % (Math.PI * 2);
  circular(deg)
}, 1);
*/
