import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Cogesca);
  divArr[0].innerHTML = Cogesca.details;
  divArr[1].innerHTML = Cogesca.job;
  divArr[2].innerHTML = Cogesca.goal;
  divArr[3].innerHTML = Cogesca.design;
  divArr[4].innerHTML = Cogesca.responsive;
  divArr[5].innerHTML = Cogesca.seo;
});

let Cogesca = new Work(
  ["Dettagli", "Il mio Lavoro", "Obiettivi", "Design", "Responsive", "Seo"],
  `<strong>Cogesca Appalti</strong> è un'impresa di scavi e demolizioni con sede a Latina e operante su tutto il territorio della Regione Lazio. Offre servizi di movimento terra e scavi, demolizioni e abbattimenti, si occupa anche di opere di urbanizzazione avendo sempre cura e attenzione alla salvaguardia ambientale.<span><strong>Visita il sito</strong></span> <a href="https://cogescaappalti.it/" target="_blank">https://cogescaappalti.it/</a>`,
  `<ul>
  <li>Progettazione e realizzazione del Design, studio della User Experience, del percorso di navigazione utente e gestione dell'architettura delle informazioni</li>
  <li>Realizzazione del Sito Web sul CMS Wordpress</li>
  <li>Manutenzione costante del Sito Web, incluse modifiche di testi e immagini</li>
  </ul>`,
  `<ul>
  <li>Presentare l'impresa Cogesca Appalti e i suoi servizi</li>
  <li>Essere trovati da nuovi clienti, in modo organico, grazie al posizionamento sui motori di ricerca</li>
  <li>Mostrare gli ambiti e i settori di operatività e competenza</li>
  </ul>`,
  `<h2>Home Page</h2>
  La User Experience è sviluppata su un sito mono-pagina. L'obiettivo principale del sito è quello di mostrare i servizi all'utente visitatore.
  <h3>Header</h3>
  La sezione "Header" include il logo dell'impresa e un pulsante "Contattaci", con animazione <em>hover</em>, che conduce alle informazioni di contatto a fine pagina.
  <div><img alt="header image"></div>
  <h3>Hero Section</h3>
  La prima sezione visibile all'utente che atterra sul sito è molto semplice e richiama i colori del brand.
  <br>
  Il testo di benvenuto è una semplice, ma chiara e incisiva frase che mette subito in primo piano il binomio opposto <strong><em>Scavo/Demolizione - Costruzione/Creazione</em></strong></strong>
  <div><img alt="hero image"></div>
  <h3>Footer</h3>
  Il "Footer" include il logo, tutte le informazioni di contatto dell'impresa e il copyright. Ciascun elemento è cliccabile e rimanda al contatto scelto agevolando e migliorando l'esperienza utente.
  <div><img alt="footer image"></div>
  <h3>Servizi</h3>
  La sezione "Servizi" include le aree di competenze in cui l'impresa è specializzata, fornendo ulteriori dettagli sui servizi stessi.
  <div><img alt="services image"></div>
  <h3>Contatti</h3>
  La sezione "Contatti" presenta 3 diverse modalità per contattare l'impresa: contatto telefonico, contatto email e contatto attraverso la compilazione di un modulo. Il modulo, una volta cliccato il pulsante, è un popup che compare a tutto schermo, che permette all'utente di inviare un messaggio ed essere ricontattato.
  <div><img alt="contact image"></div>
  `,

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
