import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Odontoiatria);
  divArr[0].innerHTML = Odontoiatria.details;
  divArr[1].innerHTML = Odontoiatria.job;
  divArr[2].innerHTML = Odontoiatria.goal;
  divArr[3].innerHTML = Odontoiatria.design;
  divArr[4].innerHTML = Odontoiatria.responsive;
  divArr[5].innerHTML = Odontoiatria.seo;
});

let Odontoiatria = new Work(
  ["Dettagli", "Il mio Lavoro", "Obiettivi", "Design", "Responsive", "Seo"],
  `<strong>Odontoiatria e Progresso</strong> è un Ambulatorio Odontoiatrico che opera sul territorio di Pomezia. Offre servizi di diagnosi, prevenzione e cura della salute dentale, per adulti e bambini.<span><strong>Visita il sito</strong></span> <a href="https://odontoiatriaprogresso.it/" target="_blank">https://odontoiatriaprogresso.it/</a>`,
  `<ul>
  <li>Progettazione e realizzazione del Design, studio della User Experience, del percorso di navigazione utente e gestione dell'architettura delle informazioni</li>
  <li>Trasformazione del Sito Web da mono-pagina a multi-pagina</li>
  <li>Manutenzione costante del Sito Web, incluse modifiche di testi e immagini</li>
  </ul> <br>
  <strong>PS.</strong> Il Sito Web è stato affidato ad un altro professionista a Novembre 2022`,
  `<ul>
  <li>Presentare Odontoiatria e Progresso, l'ambulatorio, i macchinari e i suoi servizi</li>
  <li>Essere trovati da nuovi clienti, in modo organico, grazie al posizionamento sui motori di ricerca</li>
  <li>Incentivare le persone a prendersi cura della propria salute dentale</li>
  </ul>`,
  `<h2>Home Page</h2>
  Prima della mia presa in carico, la User Experience era sviluppata su un sito mono-pagina. Su richiesta del cliente, ho aggiunto, in linea con gli obiettivi preposti e con i colori della <em>Brand Identity</em>, le varie pagine e aggiunto / modificato alcune sezioni della Home Page. <br> L'obiettivo della Home Page è quello di mostrare l'Ambulatorio attraverso i suoi punti di forza, le terapie offerte e le convenzioni attive.
  <h3>Header</h3>
  La sezione "Header" include tutte le principali informazioni dell'azienda: logo, indirizzo, numero di telefono, link ai profili social (Scheda Google Business, Facebook, Instagram) e il menu di navigazione. Ciascun elemento è cliccabile, con animazione <em>hover</em> e rimanda al contatto/profilo scelto agevolando e migliorando l'esperienza utente.
  <br>
  Il menu di navigazione è composto da tutte le pagine principali del Sito Web. Ciascuna conduce alla pagina di riferimento e al passaggio del mouse ogni link ha un'animazione <em>hover</em>. Quando ci si trova su una specifica pagina, il link nel menu assume un colore in accordo con la <em>Brand Identity</em>. Il pulsante "Prendi un appuntamento", se cliccato, conduce l'utente a fine pagina dove sono presenti tutte le modalità per contattare l'Ambulatorio e un form contatti.
  <div><img alt="header image"></div>
  <h3>Hero Section</h3>
  La prima sezione visibile all'utente che atterra sul sito richiama i colori della <em>Brand Identity</em>, ed è composta da una "slideshow" di 3 immagini che cambiano ad un intervallo regolare di 5 secondi.
  <br>
  La frase di benvenuto "Fai del tuo sorriso la curva più attraente del tuo corpo" spinge l'utente a visualizzare un messaggio metaforico di <em>prendersi cura della propria igiene dentale</em> <br>
  La CTA spinge l'utente visitatore a visitare il sito web oppure a contattre direttamente l'Ambulatorio.
  <br>
  <div><img alt="hero image"></div>
  <h3>Footer</h3>
  Il "Footer" include il logo, tutte le informazioni di contatto dell'Ambulatorio, i link ai canali social e il copyright. Ciascun elemento è cliccabile e rimanda al contatto/profilo scelto agevolando e migliorando l'esperienza utente.
  <div><img alt="footer image"></div>
  <h2>L'Ambulatorio</h2>
  La pagina "Ambulatorio" contiene una serie di caroselli "slideshow" che mostrano l'interno dell'Ambulatorio, le sale e i macchinari.
  <h2>Terapie</h2>
  La pagina "Terapia" mostra tutte le terapie dentistiche e i trattamenti, con una piccola descrizione informativa, che è possibile eseguire presso l'Ambulatorio. <br>
  Particolare cura abbiamo dedicato alla pagina "Igiene Dentale". All'interno vengono fornite informazioni esaustive su cosa sia l'igiene dentale e su come questa venga eseguita. Per concludere abbiamo dato importanza ad un macchinario di ultima generazione che l'Ambulatorio utilizza proprio per eseguire questa terapia.
  <div><img alt="services image"></div>
  <h3>Convenzioni</h3>
  La pagina "Convenzioni" mostra all'utente tutte le agevolazioni, in merito ai pagamenti e/o finanziamenti, da cui può trarre beneficio. Mostra tutti gli enti convenzionati e le modalità di pagamento.
  <div><img alt="convention image"></div>
  <h3>Contatti</h3>
  La pagina "Contatti" contiene tutte le informazioni per contattare l'Ambulatorio, incluso un form di contatto. È presente un doppio bottone con animazione <em>hover</em> che permette all'utente di chiamare l'Ambulatorio oppure di inviare una email. Vi ho incluso anche una mappa Google, grazie alla quale l'utente può verificare l'esatta ubicazione ed ottenerne le indicazioni stradali. <br>
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
  </ul>`
  
  /*
  ? ASSISTENZA `
  Con l'acquisto del sito web è incluso per un anno il servizio di manutenzione, assistenza e modifiche.
  
  Questo servizio è pensato per togliere ogni pensiero e preoccupazione al cliente, che avrà a disposizione un sito sempre aggiornato e performante.
  
  Inoltre, il cliente viene salvaguardato da situazioni in cui bisogna fronteggiare questioni tecniche, il che genera confusione, disagi e anche potenziali danni all'attività economica.
  
  Dopo un anno il cliente può decidere se rinnovare il servizio di assistenza e manutenzione oppure gestirlo in autonomia. In caso contrario la proprietà del sito rimane in mano al cliente.`*/
);
