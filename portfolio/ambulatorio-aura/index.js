import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Aura);
  divArr[0].innerHTML = Aura.details;
});

let Aura = new Work(
  ["Dettagli", "Il mio Lavoro", "Design", "Responsive", "Seo"],
  ``,
  ``
);
