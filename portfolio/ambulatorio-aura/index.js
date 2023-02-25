import { createDetails, Work, divArr } from "../../src/js/portfolioSinglePage";

window.addEventListener("DOMContentLoaded", () => {
  createDetails(Aura);
  divArr[0].innerHTML = Aura.details;
  divArr[1].innerHTML = Aura.job;
  divArr[2].innerHTML = Aura.goal;
  divArr[3].innerHTML = Aura.design;
  divArr[4].innerHTML = Aura.responsive;
  divArr[5].innerHTML = Aura.seo;
});

let Aura = new Work(
  ["Dettagli", "Il mio Lavoro", "Obiettivi", "Design", "Responsive", "Seo"],
  `<strong>Aura</strong> è un Ambulatorio Odontoiatrico che opera sul territorio dei Castelli Romani. Offre servizi di diagnosi, prevenzione e cura della salute dentale, per adulti e bambini.<span><strong>Visita il sito</strong></span> <a href="https://ambulatorioodontoiatricoaura.it/" target="_blank">https://ambulatorioodontoiatricoaura.it/</a>`,
  `<ul>
  <li>Creazione della nuova favicon</li>
  <li>Progettazione e realizzazione del Design, studio della User Experience, del percorso di navigazione utente e gestione dell'architettura delle informazioni</li>
  <li>Realizzazione del Sito Web sul CMS Wordpress</li>
  <li>Manutenzione costante del Sito Web, incluse modifiche di testi e immagini</li>
  </ul>`,
  `<ul>
  <li>Presentare l'Ambulatorio Aura e i suoi servizi</li>
  <li>Essere trovati da nuovi clienti, in modo organico, grazie al posizionamento sui motori di ricerca</li>
  <li>Incentivare le persone a prendersi cura della propria salute dentale</li>
  </ul>`,
  `<h2>Home Page</h2>
  La User Experience è sviluppata su un sito multi-pagina. L'obiettivo principale del sito è quello di mostrare i servizi di diagnostica e cura dentale all'utente visitatore. I colori utilizzati rimandano alla <em>Brand Identity</em> dell'Ambulatorio. <br> La Home Page ha l'obiettivo di mostrare l'Ambulatorio attraverso i suoi punti di forza, le terapie offerte, le recensione ricevute e le convenzioni attive
  <h3>Header</h3>
  La sezione "Header" include tutte le principali informazioni dell'azienda: logo, indirizzo, numero di telefono, contatto email e link ai profili social (Scheda Google Business, Facebook, Instagram). Ciascun elemento è cliccabile, con animazione <em>hover</em> e rimanda al contatto/profilo scelto agevolando e migliorando l'esperienza utente.
  <br>
  Il menu di navigazione è composto da tutte le pagine principali del Sito Web. Ciascuna conduce alla pagina di riferimento e al passaggio del mouse ogni link ha un'animazione <em>hover</em>. 
  <div><img alt="header image"></div>
  <h3>Hero Section</h3>
  La prima sezione visibile all'utente che atterra sul sito è molto semplice e richiama i colori del brand.
  <br>
  Il testo di presentazione è un semplice "benvenuto" con un messaggio chiaro e diretto, ovvero l'apertura dell'Ambulatorio anche di Sabato, di modo tale che l'utente ne sia, fin da subito, a conoscenza ed, eventualmente, fissare degli appuntamenti anche in quel giorno. Di lato, o sotto nella versione Mobile, ho inserito alcune foto degli interni e, soprattutto, degli esterni, così che l'utente possa avere un'idea più chiara e precisa della sua ubicazione.
  <br>
  La CTA spinge l'utente visitatore a visitare il Sito per dare un'occhiata ai servizi, alle convenzioni e all'ambulatorio stesso.
  <div><img alt="hero image"></div>
  <h3>Footer</h3>
  Il "Footer" include il logo, tutte le informazioni di contatto dell'Ambulatorio, gli orari di apertura, i link ai canali social e il copyright. Ciascun elemento è cliccabile e rimanda al contatto/profilo scelto agevolando e migliorando l'esperienza utente.
  <div><img alt="footer image"></div>
  <h3>Recensioni</h3>
  All'interno del sito ci sono snippet con le recensioni dei clienti. Sono disposti in modo strategico in varie pagine (home, contatti). Questo serve per dare <em>riprova sociale</em>, condizione che aiuta ad accorciare il percorso decisionale d'acquisto dell'utente visitatore.
  <div><img alt="review image"></div>
  <h2>L'Ambulatorio</h2>
  La pagina "Ambulatorio" contiene una serie di caroselli "slideshow" che mostrano l'interno dell'Ambulatorio, le sale e i macchinari.
  <h3>Direttore Sanitario</h3>
  Nello stesso menu a tendina, la pagina del "Direttore Sanitario" mostra chi egli sia, arricchita da un'immagine, una piccola descrizione e i principali titoli e attestati ottenuti nel corso della sua carriera.
  <h2>Terapia e Diagnostica</h2>
  La pagina "Terapia" mostra tutte le terapie dentistiche e i trattamenti, con una piccola descrizione informativa, che è possibile eseguire presso l'Ambulatorio. <br>
  La pagina "Diagnostica" mostra i macchinari di ultima generazione di cui l'Ambulatorio si serve per eseguire scansioni e radiografie. All'interno è presente anche una piccola sezione che mostra i vantaggi nell'utilizzo di questi macchinari ed una "FAQ" a fisarmonica dove si risponde alle domande più comuni che i clienti si pongono.
  <div><img alt="services image"></div>
  <h3>Convenzioni</h3>
  La pagina "Convenzioni" mostra all'utente tutte le agevolazioni, in merito ai pagamenti e/o finanziamenti, da cui può trarre beneficio. Mostra tutti gli enti convenzionati e le modalità di pagamento.
  <div><img alt="convention image"></div>
  <h3>Contatti</h3>
  La pagina "Contatti" contiene tutte le informazioni per contattare l'Ambulatorio. Vi ho incluso anche una mappa Google, grazie alla quale l'utente può verificare l'esatta ubicazione ed ottenerne le indicazioni stradali. <br>
  È presente anche un modulo per conttare l'Ambulatorio e compare come popup dopo aver premuto il relativo pulsante.
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
  </ul>
  <span><em>Prova a digitare "Dentista Ariccia" sul tuo motore di ricerca</em></span>`
  /*
  ? ASSISTENZA `
  Con l'acquisto del sito web è incluso per un anno il servizio di manutenzione, assistenza e modifiche.
  
  Questo servizio è pensato per togliere ogni pensiero e preoccupazione al cliente, che avrà a disposizione un sito sempre aggiornato e performante.
  
  Inoltre, il cliente viene salvaguardato da situazioni in cui bisogna fronteggiare questioni tecniche, il che genera confusione, disagi e anche potenziali danni all'attività economica.
  
  Dopo un anno il cliente può decidere se rinnovare il servizio di assistenza e manutenzione oppure gestirlo in autonomia. In caso contrario la proprietà del sito rimane in mano al cliente.`*/
);
