import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Cogesca);
  divArr[0].innerHTML = Cogesca.details;
});

let Cogesca = new Work(
  ["Dettagli", "Il mio Lavoro", "Design", "Responsive", "Seo"],
  ``,
  ``
);
