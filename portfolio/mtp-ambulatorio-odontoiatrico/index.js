import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";
import hero from "./mockup/hero-image.png";
import contact from "./mockup/contact-image.png";
import footer from "./mockup/footer-image.png";
import about from "./mockup/about-image.png";
import service from "./mockup/service-image.png";
import service2 from "./mockup/service-image2.png";
import mobile from "./mockup/mobile-image.png";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Mtp);
  divArr[0].innerHTML = Mtp.details;
  divArr[1].innerHTML = Mtp.job;
  divArr[2].innerHTML = Mtp.goal;
  divArr[3].innerHTML = Mtp.design;
  divArr[4].innerHTML = Mtp.responsive;
  divArr[5].innerHTML = Mtp.seo;
});

let Mtp = new Work(
  ["Dettagli", "Il mio Lavoro", "Obiettivi", "Design", "Responsive", "Seo"],
  `<strong>MTP</strong> è un Ambulatorio Odontoiatrico e Medicina Generale che opera sul territorio dei Castelli Romani. Offre servizi di diagnosi, prevenzione e cura della salute dentale, per adulti e bambini.<span><strong>Visita il sito</strong></span> <a href="https://mtpambulatorioodontoiatrico.it/" target="_blank">https://mtpambulatorioodontoiatrico.it/</a>`,
  `<ul>
  <li>Progettazione e realizzazione del Design, studio della User Experience, del percorso di navigazione utente e gestione dell'architettura delle informazioni</li>
  <li>Realizzazione del Sito Web sul CMS Wordpress</li>
  <li>Manutenzione costante del Sito Web, incluse modifiche di testi e immagini</li>
  </ul> <br>
  <strong>PS.</strong> Il Sito Web è stato affidato ad un altro professionista ad Aprile 2022.`,
  `<ul>
  <li>Presentare l'Ambulatorio MTP e i suoi servizi</li>
  <li>Essere trovati da nuovi clienti, in modo organico, grazie al posizionamento sui motori di ricerca</li>
  <li>Dare la possibilità agli utenti di poter, fin da subito, fissare una prima visita di controllo.</li>
  </ul>`,
  `<h2>Home Page</h2>
  La User Experience è sviluppata su un sito multi-pagina. L'obiettivo principale del sito è quello di mostrare i servizi di diagnostica e cura dentale all'utente visitatore. I colori utilizzati rimandano alla <em>Brand Identity</em> dell'Ambulatorio. <br> La Home Page ha l'obiettivo di mostrare l'Ambulatorio attraverso i suoi punti di forza, le terapie offerte e di permettere ai clienti di poter fissare un primo appuntamento.
  <h3>Header</h3>
  La sezione "Header" include tutte le principali informazioni dell'azienda: logo, indirizzo, numero di telefono, contatto email. Ciascun elemento è cliccabile e rimanda al contatto scelto agevolando e migliorando l'esperienza utente.
  <br>
  Il menu di navigazione è composto da tutte le pagine principali del Sito Web. Ciascuna conduce alla pagina di riferimento e, al passaggio del mouse, ogni link ha un'animazione <em>hover</em>. Quando ci si trova su una specifica pagina, il link nel menu assume un colore in accordo con la <em>Brand Identity</em>.
  <br> Il pulsante "Prenota una visita" permette all'utente di spostarsi sulla piattaforma <em>"Ilmiodottore.it"</em> dove poter fissare una prima visita con lo Studio.
  <h3>Hero Section</h3>
  La prima sezione visibile all'utente che atterra sul sito è molto semplice e richiama i colori del brand.
  <br>
  L'immagine in copertina è fissata sullo schermo e si muove in relazione allo scroll del mouse
  <br>
  La CTA spinge l'utente visitatore a visitare il Sito per dare un'occhiata ai servizi, alle convenzioni e all'ambulatorio stesso oppure a fissare un appuntamento.
  <div class="image-example"><img src="${hero}" alt="header image"></div>
  <h3>Footer</h3>
  Il "Footer" include il logo, tutte le informazioni di contatto dell'Ambulatorio, gli orari di apertura e il copyright.
  <div class="image-example"><img src="${footer}" alt="footer image"></div>
  <h2>Chi siamo</h2>
  La pagina "Chi siamo" mostra la storia dell'Ambulatorio e alcune immagini degli interni, delle sale e dei macchinari.
  <div class="image-example"><img src="${about}" alt="about image"></div>
  <h2>Terapie</h2>
  La pagina "Terapie" mostra tutte le terapie dentistiche e i trattamenti, con una piccola descrizione informativa, che è possibile eseguire presso l'Ambulatorio. <br>
  <div class="image-example">
  <div><img src="${service}" alt="service image"></div>
  <div><img src="${service2}" alt="service image"></div>
  </div>
  <h3>Contatti</h3>
  La pagina "Contatti" contiene tutte le informazioni per contattare l'Ambulatorio insieme ad un form di contatto. Vi ho incluso anche una mappa Google, grazie alla quale l'utente può verificare l'esatta ubicazione ed ottenerne le indicazioni stradali. <br>
  <div class="image-example"><img src="${contact}" alt="contact image"></div>
  `,

  `Il sito web ha un Design Responsive: significa che la sua struttura si adatta alla visita da dispositivi mobili come smartphone e tablet di tutte le misure.
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
