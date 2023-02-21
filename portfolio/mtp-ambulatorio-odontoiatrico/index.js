import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Mtp);
  divArr[0].innerHTML = Mtp.details;
});

let Mtp = new Work(
  ["Dettagli", "Il mio Lavoro", "Design", "Responsive", "Seo"],
  ``,
  ``
);
