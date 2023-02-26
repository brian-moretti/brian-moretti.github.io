import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";
import hero from "./mockup/hero-image.png";
import footer from "./mockup/footer-image.png";
import service from "./mockup/service-image.png";
import projectIn from "./mockup/project-in-image.png";
import projectOut from "./mockup/project-out-image.png";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Tassi);
  divArr[0].innerHTML = Tassi.details;
  divArr[1].innerHTML = Tassi.job;
  divArr[2].innerHTML = Tassi.goal;
  divArr[3].innerHTML = Tassi.design;
  divArr[4].innerHTML = Tassi.responsive;
  divArr[5].innerHTML = Tassi.seo;
});

let Tassi = new Work(
  ["Dettagli", "Il mio Lavoro", "Obiettivi", "Design", "Responsive", "Seo"],
  `<strong>Studio Tassi</strong> è uno studio di restauro e progettazione architettonica che opera sul territorio di Roma. Offre servizi di ristrutturazione e arredo d'interni, e restauro, consolidamento e manutenzione di edifici esistenti.<span><strong>Visita il sito</strong></span> <a href="https://www.studiotassi.com/" target="_blank">https://www.studiotassi.com/</a>`,
  `<ul>
  <li>Progettazione e realizzazione del Design, studio della User Experience, del percorso di navigazione utente e gestione dell'architettura delle informazioni</li>
  <li>Realizzazione del Sito Web sul CMS Wordpress</li>
  <li>Manutenzione costante del Sito Web, incluse modifiche di testi e immagini</li>
  </ul>`,
  `<ul>
  <li>Presentare lo Studio Tassi: chi sono, i loro servizi e i progetti realizzati</li>
  <li>Essere trovati da nuovi clienti, in modo organico, grazie al posizionamento sui motori di ricerca</li>
  <li>Mostrare le capacità, le competenze e anche la creatività dello Studio</li>
  </ul>`,
  `<h2>Home Page</h2>
  La User Experience è sviluppata su un sito multi-pagina.L'obiettivo della Home Page è quello di mostrare lo Studio Tassi attraverso i suoi punti di forza, i servizi offerti e i progetti realizzati.
  <h3>Header</h3>
  La sezione "Header" include il logo e il menu di navigazione.
  <br>
  Il menu di navigazione è composto da tutte le pagine principali del Sito Web. Ciascuna conduce alla pagina di riferimento e al passaggio del mouse ogni link ha un'animazione <em>hover</em>.
  <h3>Hero Section</h3>
  La prima sezione visibile all'utente che atterra sul sito richiama i colori della <em>Brand Identity</em>, ed è composta da una "slideshow" di 3 immagini che cambiano ad un intervallo regolare di 5 secondi. Una scritta di un celebre architetto compare insieme alla prima immagine per poi sparire dopo 5 secondi e ricomparire quando ricomincia il ciclo.
  <br>
  Questa celebre frase rappresenta il <strong><em>valore</em></strong> e <strong><em>l'obiettivo ultimo</em></strong> dello Studio Tassi. 
  <br>
  La Home Page è composta da alcune sezioni informative sugli ambiti in cui lo Studio Tassi opera, i servizi offerti e infine un carosello di immagini di alcuni dei loro lavori. In fondo sono presenti 2 pulsanti che permettono all'utente di spostarsi direttamente sulla pagine dei progetti realizzati. 
  <div class="image-example"><img src="${hero}" alt="header image"></div>
  <h3>Footer</h3>
  Il "Footer" include il logo, tutte le informazioni di contatto dello Studio e il copyright. Ciascun elemento è cliccabile e rimanda al contatto scelto agevolando e migliorando l'esperienza utente.
  <div class="image-example"><img src="${footer}" alt="footer image"></div>
  <h3>Servizi</h3>
  La pagina "Servizi" mostra un lista ben approfondita di tutti gli ambiti di competenza e operatività, suddivisi per macro-aree.
  <div class="image-example"><img src="${service}" alt="service image"></div>
  <h3>Progetti</h3>
  La pagina "Progetti" si divide in 2 sotto-pagine, "Esterni" e "Interni". Ciascuna pagina mostra una selezione ben curata dei progetti che lo Studio Tassi ha realizzato. Vengono forniti i luoghi di intervento e alcune immagini del lavoro ultimato.
  <div class="image-example">
  <img src="${projectOut}" alt="service image">
  <img src="${projectIn}" alt="service image">
  </div>
  `,

  /*
  ! DA INSERIRE APPENA POSSIBILE
  <h3>L'Ambulatorio</h3>
  La pagina "Chi siamo"

  <h3>Contatti</h3>
  La pagina "Contatti" contiene tutte le informazioni per contattare lo Studio Tassi, incluso un form di contatto. Vi ho incluso anche una mappa Google, grazie alla quale l'utente può verificare l'esatta ubicazione ed ottenerne le indicazioni stradali. <br>
  <div><img alt="contact image"></div>
/*/

  `Il sito web ha un Design Responsive: significa che la sua struttura si adatta alla visita da dispositivi mobili come smartphone e tablet di tutte le misure.
  <div><img alt="responsive image"></div>
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
