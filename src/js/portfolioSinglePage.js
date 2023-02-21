//! FILE QUESTO CON FUNZIONE GENERICA DI CREAZIONE DESIGN
//* IN OGNI CARTELLA WORK, FILE JS CON CLASSE E IMPORT FUNZIONE

import { menu } from "./sidebarMenu";
import { createElement } from "./createElement";
import { footer } from './copyright';


window.addEventListener("DOMContentLoaded", () => {
  menu.style.transform = "translateY(0)";

  for (let i = 0; i < document.querySelectorAll(".showing").length; i++) {
    document.querySelectorAll(".showing")[i].style.transitionDelay =
      i * 0.1 + "s";
    document.querySelectorAll(".showing")[i].style.opacity = 1;
    document.querySelectorAll(".showing")[i].style.marginRight = 0;
  }
});

class Work {
  constructor(title, details, job, goal, design, responsive, seo) {
    this.title = title;
    this.details = details;
    this.job = job;
    this.goal = goal;
    this.design = design;
    this.responsive = responsive;
    this.seo = seo;
  }
}

let divArr = [];

//! FUNZIONE CREA DIV
function createDetails(work) {
  const fullDetails = document.querySelector(".work-details");
  for (let i = 0; i < work.title.length; i++) {
    const singleDetail = createElement("div", "single-detail", fullDetails);
    let scope = createElement("div", "scope", singleDetail);
    let titleDetails = createElement("h2", "title-detail", scope);
    titleDetails.textContent = work.title[i];
    let explained = createElement("div", "explained", singleDetail);
    divArr.push(explained);
  }
}

//! FUNZIONE CREA DETTAGLI DEL DIV .EXPLAINED

export { createDetails, Work, divArr };
