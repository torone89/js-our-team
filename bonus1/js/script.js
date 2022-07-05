
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

// esercizio di oggi: Our Team
// nome repo: js-our-team
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// # MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// # BONUS 2:
// Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato

// // # DATI

// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
// Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
// Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
// Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
// Scott Estrada |	Developer            |	scott-estrada-developer.jpg
// Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 

const stampaDati = document.getElementById('dati');
console.log(stampaDati)
const team = [
    {
        nome: 'Wayne Barnett',
        lavoro: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        lavoro: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        lavoro: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        lavoro: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        lavoro: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        lavoro: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
];

// / # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// Recuperto dove stampare sul dom i dati della crew

console.log(team);

for (let i = 0; i < team.length; i++) {
    const informazioniCrew = team[i];

    // # BONUS 1:
    // Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
    stampaDati.innerHTML += `
   
    <li><img src="img/${informazioniCrew.img}" alt="Immagine Membro"></img></li>
        <li> <Strong>${informazioniCrew.nome}</strong></li >
            <li>"${informazioniCrew.lavoro} </li>`
    // console.log('---------INFORMAZIONI DELLA CREW-----------')
    // for (let key in informazioniCrew) {
    //     console.log(key + ": " + informazioniCrew[key])
    //     // / # MILESTONE 2:
    //     // Stampare le stesse informazioni su DOM sottoforma di stringhe
    //     stampaDati.innerHTML += `<li><strong>${key}:</strong></li>  <li>${informazioniCrew[key]}</li>`

    // }
}