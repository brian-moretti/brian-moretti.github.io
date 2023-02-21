import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Tassi);
  divArr[0].innerHTML = Tassi.details;
});

let Tassi = new Work(
  ["Dettagli", "Il mio Lavoro", "Design", "Responsive", "Seo"],
  ``,
  ``
);
