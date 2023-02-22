import { createElement, createImage, createLink } from "./createElement";
import { menu } from "./sidebarMenu";
import {
  cogesca,
  mtp,
  odontoiatria,
  seteco,
  aura,
} from "../images/mockup-portfolio/mockup-portfolio";
import { footer } from "./copyright";

window.addEventListener("DOMContentLoaded", () => {
  menu.style.transform = "translateY(0)";

  for (let i = 0; i < document.querySelectorAll(".showing").length; i++) {
    document.querySelectorAll(".showing")[i].style.transitionDelay =
      i * 0.1 + "s";
    document.querySelectorAll(".showing")[i].style.opacity = 1;
    document.querySelectorAll(".showing")[i].style.marginRight = 0;
  }

  arrayPortfolio.forEach((element) => {
    createWork(element);
  });
});

class Portfolio {
  constructor(title, link, src, features) {
    this.title = title;
    this.link = link;
    this.src = src;
    this.features = features;
  }
}

let setecoService = new Portfolio(
  "Seteco Service Srl",
  "/portfolio/studio-seteco-service/",
  seteco,
  ["Mobile Responsive", "Sito Web One-Page", "Ottimizzazione SEO"]
);
let ambulatorioAura = new Portfolio(
  "Ambulatorio Odontoiatrico Aura",
  "/portfolio/ambulatorio-aura/",
  aura,
  ["Mobile Responsive", "Sito Web Multi-Page", "Ottimizzazione SEO"]
);
let odontoiatriaProgresso = new Portfolio(
  "Odontoiatria e Progresso",
  "/portfolio/odontoiatria-progresso/",
  odontoiatria,
  ["Mobile Responsive", "Sito Web Multi-Page", "Ottimizzazione SEO"]
);
let cogescaAppalti = new Portfolio(
  "Cogesca Appalti Srl",
  "/portfolio/cogesca-appalti/",
  cogesca,
  ["Mobile Responsive", "Sito Web One-Page", "Ottimizzazione SEO"]
);
let studioTassi = new Portfolio(
  "Studio Tassi",
  "/portfolio/studio-tassi/",
  "/",
  ["Mobile Responsive", "Sito Web One-Page", "Showroom Progetti"]
);
let mptAmbulatorio = new Portfolio(
  "MTP Ambulatorio Odontoiatrico",
  "/portfolio/mtp-ambulatorio-odontoiatrico/",
  mtp,
  ["Mobile Responsive", "Sito Web Multi-Page", "Ottimizzazione SEO"]
);
let developer = new Portfolio("Brian Moretti - Web Developer", "/", "/", "/");

let arrayPortfolio = [
  setecoService,
  ambulatorioAura,
  odontoiatriaProgresso,
  cogescaAppalti,
  studioTassi,
  mptAmbulatorio,
];

function createWork(work) {
  const workList = document.querySelector(".project-list");
  const singleWork = createElement("li", "single-work", workList);
  let titleWork = createElement("h3", "title-work", singleWork);
  titleWork.textContent = work.title;

  const wrapper = createElement("div", "work-wrapper", singleWork);

  createImage(
    work.src,
    work.title,
    createLink(work.link, createElement("div", "work-screen", wrapper))
  );

  let informationBox = createElement("div", "work-information", wrapper);
  let features = createElement("h4", "title-link", informationBox);
  features.textContent = "Caratteristiche";
  let featuresList = createElement("ul", "fa-ul", informationBox);

  for (let feature of work.features) {
    let singleFeature = createElement("li", "single-feature", featuresList);
    singleFeature.innerHTML = `<span class="fa-li"><i class="fa-solid fa-ribbon"></i></span>${feature}`;
  }
  let infoBtn = createLink(work.link, informationBox);
  infoBtn.textContent = "Approfondisci";
}
