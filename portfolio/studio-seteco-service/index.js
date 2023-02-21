import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Seteco);
  divArr[0].innerHTML = Seteco.details;
  divArr[1].innerHTML = Seteco.job
  divArr[2].innerHTML = Seteco.goal
  divArr[3].innerHTML = Seteco.design
  divArr[4].innerHTML = Seteco.responsive;
  divArr[5].innerHTML = Seteco.seo;
});

let Seteco = new Work(
  ["Dettagli", "Il mio Lavoro", "Obiettivi", "Design", "Responsive", "Seo"],
  `<strong>Seteco Service</strong> è uno studio commerciale che opera da oltre 30 anni sul territorio dei Castelli Romani. Offre servizi di consulenza aziendale in ambito fiscale, amministrativo, societario, tributario e del lavoro. <span><strong>Visita il sito</strong></span> <a href="https://studiocommercialeseteco.it/" target="_blank">https://studiocommercialeseteco.it/</a>`,
  `<ul>
  <li>Creazione del nuovo logo per Seteco Service Srl</li>
  <li>Progettazione e realizzazione del Design, studio della User Experience, del percorso di navigazione utente e gestione dell'architettura delle informazioni</li>
  <li>Manutenzione costante del Sito Web, incluse modifiche </li>
  </ul>`,
  `<ul>
  <li>Presentare lo studio commerciale Seteco Service e i suoi servizi</li>
  <li></li>
  <li>Permettere agli utenti di contattare direttamente i Dottori Commercialisti dello studio per fissare un appuntamento o per avere una consulenza</li>
  </ul>`,
  `<h3>Home Page</h3>
  La User Experience è sviluppata su un sito mono-pagina. L'obiettivo principale del sito è quello di mostrare i servizi all'utente visitatore. <h4>Header</h4> <h4>Hero Section</h4> <h4>Footer</h4> <h4>Servizi</h4>
  <h4>Punti di Forza</h4> <h4>Modulo Contatti</h4>`,
  `Il sito web ha un Design Responsive: significa che la sua struttura si adatta alla visita da dispositivi mobili come smartphone e tablet di tutte le misure.`,
  `<h4>Tutte le pagine del sito sono ottimizzate per la SEO-on-site:</h4> <br/>
  <ul>
  <li>La gerarchia dei titoli è rispettata in tutte le pagine (H1, H2, H3 ecc…);</li>
  <li>Il Tag Title delle pagine e le Meta-Descrizioni curate garantiscono degli snippet completi nella pagina dei risultati dei motori di ricerca (sia da mobile che da desktop);</li>
  <li>Google Search Console garantisce un monitoraggio costante delle performance SEO del sito e spedisce al web master un report mensile con le statistiche SEO ed eventuali errori da correggere;</li>
  <li>Il sistema di Cache e di Lazy Load delle immagini permette una caricamento più rapido delle pagine del sito.</li>
  </ul>`
);
