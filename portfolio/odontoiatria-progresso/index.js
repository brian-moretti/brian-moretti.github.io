import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Odontoiatria);
  divArr[0].innerHTML = Odontoiatria.details;
});

let Odontoiatria = new Work(
  ["Dettagli", "Il mio Lavoro", "Design", "Responsive", "Seo"],
  ``,
  ``
);
