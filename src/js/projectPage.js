import {
  createElement,
  createImage,
  createLink,
  createOddElement,
} from "./createElement";
import { menu } from "./sidebarMenu";
import {
  portfolioWebsite,
  counterOfStars,
  theBookCamp,
  s2iNTTData,
  cityClue,
  flightsFootprint,
} from "../images/master-project/master-project";
//import { footer } from "./copyright";

window.addEventListener("DOMContentLoaded", () => {
  menu.style.transform = "translateY(0)";

  for (let i = 0; i < document.querySelectorAll(".showing").length; i++) {
    document.querySelectorAll(".showing")[i].style.transitionDelay =
      i * 0.1 + "s";
    document.querySelectorAll(".showing")[i].style.opacity = 1;
  }

  arrayProject.forEach((element) => {
    createProject(element);
  });
});

class Project {
  constructor(id, title, link, src, name, description, language, githubLink) {
    this.id = id;
    this.title = title;
    this.link = link;
    this.src = src;
    this.name = name;
    this.description = description;
    this.language = language;
    this.githubLink = githubLink;
    //this.createProject = createProject
  }
}

let projectHTMLCSS = new Project(
  1,
  "Progetto HTML / CSS",
  "https://project-portfolio-website.netlify.app/",
  portfolioWebsite,
  "Portfolio Website",
  `La creazione di un Sito Web (Portfolio) personale utilizzando
  solo HTML & CSS.<br/>Il progetto è strutturato in un'unica pagina.<br/>
  I link del menu sono definiti attraverso un archor tag.`,
  ["HTML", "CSS"],
  "https://github.com/brian-moretti/HTML-CSS-Project"
);

let projectCounter = new Project(
  2,
  "Progetto JavaScript Basic",
  "https://counter-of-stars.netlify.app/",
  counterOfStars,
  "Counter App",
  `Un'applicazione che funziona come counter. L'interazione con i pulsanti permettono di aumentare, diminuire o resettare il valore.<br/>Tutti gli elementi dell'applicazione sono stati implementati esclusivamente con Javascript (nessun uso di framework o librerie esterne)`,
  ["HTML", "CSS", "JAVASCRIPT"],
  "https://github.com/brian-moretti/JavaScript-Basic-Project"
);

let projectBooks = new Project(
  3,
  "Progetto JavaScript Advanced",
  "https://the-book-camp.netlify.app/",
  theBookCamp,
  "The Book Camp",
  `<em>"Un'applicazione per incentivare la lettura di libri."</em><br/>L'applicazione si collega, mediante una chiamata fetch, all'API del servizio esterno <a href="http://openlibrary.org" target="_blank" rel="noopener noreferrer">Open Library</a>, grazie al quale l'utente può cercare una specifica categoria di libri e visualizzarne, se provviste, il titolo, l'autore, la copertina, e una descrizione.`,
  ["HTML", "CSS", "JAVASCRIPT"],
  "https://github.com/brian-moretti/JavaScript-Advanced-Project"
);

let projectAngularNTTData = new Project(
  4,
  "Progetto Angular | NTT Data Partnership",
  "https://s2i-nttdata.web.app/auth",
  s2iNTTData,
  "Go Rest a Post",
  `Un'applicazione, protetta da autenticazione, che permette all'utente di visualizzare la lista di utenti, creare/cancellare "nuovi utenti", visualizzarne i dettagli, visualizzare la lista dei post, creare/cancellare dei post per ciascun utente e creare/cancellare commenti sotto ciascun post`,
  ["ANGULAR", "TYPESCRIPT", "PRIME-NG", "FIREBASE"],
  "https://github.com/brian-moretti/angular-gorest"
);

let projectAngular = new Project(
  5,
  "Progetto Angular 2",
  "https://city-clue.web.app/cities",
  cityClue,
  "City Clue",
  `Un'applicazione che permette all'utente di selezionare una città e di visualizzarne una foto, una descrizione e i punteggi sulla qualità della vita prelevati dall'API <a href="http://openlibrary.org" target="_blank" rel="noopener noreferrer"></a>`,
  ["ANGULAR", "TYPESCRIPT", "PRIMENG", "FIREBASE"],
  "https://github.com/brian-moretti/city-clue"
);

let finalFrontEndProject = new Project(
  6,
  "Progetto Finale | Master Front-End",
  "https://flights-footprint.web.app/footprint",
  flightsFootprint,
  "Flights Footprint",
  `Un'applicazione che permette all'utente di calcolare le emissioni di CO2e decidendo `,
  ["ANGULAR", "TYPESCRIPT", "CHARTJS", "CIRCLETYPEJS", "FIREBASE"],
  "https://github.com/brian-moretti/flights-footprint"
);

let phpMySqlProject = new Project(7, "Progetto PHP & MySql");

let arrayProject = [
  projectHTMLCSS,
  projectCounter,
  projectBooks,
  projectAngularNTTData,
  projectAngular,
  finalFrontEndProject,
];

function createProject(project) {
  const projectList = document.querySelector(".project-list");
  const singleProject = createElement("li", "single-project", projectList);

  //console.log(singleProject.offsetWidth);

  let titleProject = createElement("h3", "title-project", singleProject);
  titleProject.textContent = project.title;

  /*   if (project.id % 2 != 0) {
    let spanId = createOddElement("span", "number", titleProject);
    spanId.textContent = project.id;
  } else {
    let spanId = createElement("span", "number", titleProject);
    spanId.textContent = project.id;
  } */

  const wrapper = createElement("div", "project-wrapper", singleProject);

  let imageProject = createImage(
    project.src,
    project.name,
    createLink(project.link, createElement("div", "project-screen", wrapper))
  );

  let informationBox = createElement("div", "project-information", wrapper);
  let link = createLink(
    project.link,
    createElement("h4", "title-link", informationBox)
  );
  link.textContent = project.name;
  let paragraph = createElement("div", "description", informationBox);
  paragraph.innerHTML = project.description;

  let language = createElement("ul", "language-list", paragraph);
  for (let i = 0; i < project.language.length; i++) {
    let singleLanguage = createElement("li", "language", language);
    singleLanguage.textContent = project.language[i];
  }

  let socialLink = createElement("ul", "project-links", paragraph);

  let gitHubLink = createLink(
    project.githubLink,
    createElement("li", "icon", socialLink)
  );
  let deployLink = createLink(
    project.link,
    createElement("li", "icon", socialLink)
  );

  gitHubLink.innerHTML = `<i class="fa-brands fa-github"></i
  >`;
  deployLink.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i
  >`;
}

//export { createProject, arrayProject };
