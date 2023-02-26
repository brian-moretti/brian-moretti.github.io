import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";
import hero from "./mockup/hero-image.png";
import contact from "./mockup/contact-image.png";
import footer from "./mockup/footer-image.png";
import service from "./mockup/service-image.png";
import service2 from "./mockup/service-image2.png";
import quality from "./mockup/quality-image.png";
import mobile from "./mockup/mobile-image.png";


window.addEventListener("DOMContentLoaded", () => {
  createDetails(Seteco);
  divArr[0].innerHTML = Seteco.details;
  divArr[1].innerHTML = Seteco.job;
  divArr[2].innerHTML = Seteco.goal;
  divArr[3].innerHTML = Seteco.design;
  divArr[4].innerHTML = Seteco.responsive;
  divArr[5].innerHTML = Seteco.seo;
});

let Seteco = new Work(
  ["Dettagli", "Il mio Lavoro", "Obiettivi", "Design", "Responsive", "Seo"],
  `<strong>Seteco Service</strong> è uno studio commerciale che opera da oltre 30 anni sul territorio dei Castelli Romani. Offre servizi di consulenza aziendale in ambito fiscale, amministrativo, societario, tributario e del lavoro. <span><strong>Visita il sito</strong></span> <a href="https://studiocommercialeseteco.it/" target="_blank">https://studiocommercialeseteco.it/</a>`,
  `<ul>
  <li>Creazione del nuovo logo per Seteco Service Srl</li>
  <li>Progettazione e realizzazione del Design, studio della User Experience, del percorso di navigazione utente e gestione dell'architettura delle informazioni</li>
  <li>Realizzazione del Sito Web sul CMS Wordpress</li>
  <li>Manutenzione costante del Sito Web, incluse modifiche di testi e immagini</li>
  </ul>`,
  `<ul>
  <li>Presentare lo studio commerciale Seteco Service e i suoi servizi</li>
  <li>Essere trovati da nuovi clienti, in modo organico, grazie al posizionamento sui motori di ricerca</li>
  <li>Permettere agli utenti di contattare direttamente i Dottori Commercialisti dello studio per fissare un appuntamento o per avere una consulenza</li>
  </ul>`,
  `<h2>Home Page</h2>
  La User Experience è sviluppata su un sito mono-pagina. L'obiettivo principale del sito è quello di mostrare i servizi all'utente visitatore.
  <h3>Header</h3>
  La sezione "Header" include tutte le principali informazioni dell'azienda: logo, indirizzo, numeri di telefono e contatti email. Ciascun elemento è cliccabile e rimanda al contatto scelto agevolando e migliorando l'esperienza utente.
  <br>
  Il pulsante "CONTATTACI" apre un popup che permette all'utente di compilare, senza impegno, un modulo per contattare direttamente lo Studio ed indicare le proprie necessità.
  <h3>Hero Section</h3>
  La prima sezione visibile al navigatore che atterra sul sito è molto semplice e richiama i colori del brand.
  <br>
  Il testo di presentazione, dinamico ad intervalli regolari di 5 secondi, mette subito in risalto quali sono i punti di forza e di cosa si occupa lo Studio, permettendo immediatamente all'utente visitatore di capire se questo sito può aiutarlo a risolvere il suo problema.
  <br>
  La CTA spinge l'utente visitatore a visitare la pagina dei servizi.
  <div class="image-example"><img src="${hero}" alt="header image"></div>
  <h3>Footer</h3>
  Il "Footer" include il logo, tutte le informazioni di contatto dell'azienda, il copyright e il numero d'iscrizione alla Camera di Commercio di Roma. Ciascun elemento è cliccabile e rimanda al contatto scelto agevolando e migliorando l'esperienza utente.
  <br>
  In aggiunta è presente un pulsante "Prenota una consulenza" che apre una pagina contenente un modulo specifico per fissare un appuntamento con i Dottori Commercialisti indicando su quale materia/argomento debba essere incentrato.
  <div class="image-example"><img src="${footer}" alt="footer image"></div>
  <h3>Servizi</h3>
  La sezione "Servizi" include tutte le macro-aree in cui lo Studio è specializzato, inclusi gli ambiti di competenza e operatività.
  <div class="image-example">
  <img src="${service}" alt="service image">
  <img src="${service2}" alt="service image">
  </div>
  <h3>Punti di Forza</h3>
  In questa sezione ho voluto porre l'attenzione su alcuni elementi chiave dello Studio, ovvero la lunga attività sul territorio, la professionalità e competenza dei Dottori Commercialisti e il loro modo di lavorare, semplice e chiaro <br>
  Ho realizzato la sezione con un design a "fisarmonica", in cui ciascun elemento viene aperto o chiuso singolarmente premendo i pulsanti laterali (+ | -).
  Il tutto arricchito da un'immagine e un icona, che si muove allo scroll del mouse, raffiguranti degli scacchi per visualizzare un messaggio metaforico di <strong><em>"fai la mossa giusta"</em></strong>
  <div class="image-example"><img src="${quality}" alt="quality point image"></div>
  <h3>Contatti</h3>
  La sezione "Contatti" pone l'attenzione su tutte le modalità per contattare lo Studio. Vi ho incluso anche una mappa Google, grazie alla quale l'utente può verificare l'esatta ubicazione ed ottenerne le indicazioni stradali.
  <div class="image-example"><img src="${contact}" alt="contact image"></div>
  `,

  `Il sito web ha un Design Responsive: significa che la sua struttura si adatta alla visita da dispositivi mobili come smartphone e tablet di tutte le misure. <br> In versione mobile ho aggiunto un pulsante fisso, in basso a destra, grazie al quale l'utente può inviare, tramite whatsApp, un messaggio diretto allo Studio per chiedere informazioni.
  <div class="image-example"><img src="${mobile}" alt="responsive image"></div>
  `,
  `<strong>Tutte le pagine del sito sono ottimizzate per la SEO-on-site:</strong> <br/>
  <ul>
  <li>La gerarchia dei titoli è rispettata in tutte le pagine (H1, H2, H3 ecc…);</li>
  <li>Il Tag Title delle pagine e le Meta-Descrizioni curate garantiscono degli snippet completi nella pagina dei risultati dei motori di ricerca (sia da mobile che da desktop);</li>
  <li>Google Search Console garantisce un monitoraggio costante delle performance SEO del sito e spedisce al web master un report mensile con le statistiche SEO ed eventuali errori da correggere;</li>
  <li>Il sistema di Cache e di Lazy Load delle immagini permette una caricamento più rapido delle pagine del sito.</li>
  </ul>`
  /*
  ? ASSISTENZA `
  Con l'acquisto del sito web è incluso per un anno il servizio di manutenzione, assistenza e modifiche.
  
  Questo servizio è pensato per togliere ogni pensiero e preoccupazione al cliente, che avrà a disposizione un sito sempre aggiornato e performante.
  
  Inoltre, il cliente viene salvaguardato da situazioni in cui bisogna fronteggiare questioni tecniche, il che genera confusione, disagi e anche potenziali danni all'attività economica.
  
  Dopo un anno il cliente può decidere se rinnovare il servizio di assistenza e manutenzione oppure gestirlo in autonomia. In caso contrario la proprietà del sito rimane in mano al cliente.`*/
);
