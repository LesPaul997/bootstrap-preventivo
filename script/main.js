'use strict';

//Elementi della Pagina
const form = document.querySelector('form');
const resultElement = document.getElementById('result');
const userName = document.getElementById('firstName');
const userSurname = document.getElementById('lastName');
const userEmail = document.getElementById('email');
const warningCodeText = document.getElementById('warningCode');
const selectInput = document.getElementById('select');
const codeImput = document.getElementById('code');
const warningCheckText = document.getElementById('warningCheck');
const checkElement = document.getElementById('checkbox');
const buttonInput = document.getElementById('submit');
const priceText = document.getElementById('price');
const intSpan = document.getElementById('int');
const decimalSpan = document.getElementById('decimal');

//Elementi della traccia

//Codici sconto
const code = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//Ore di lavoro e sconto
const jobHours = 10;
const discount = 25;

//Variabili prezzo finale
let userCode = "";
let selectedJob = "";
let hourPrice = 0;
let fullPrice = 0;
let intPrice = 0;
let decimalPrice = 0;

//Qui elenco delle tre selezioni 
const userJob = {
    "Sviluppo Backend": 20.50,
    "Sviluppo Frontend": 15.30,
    "Analisi Progettuale": 33.60
};

//Funzione per il popolamento dei valori
addOptions(userJob);




// COSE DA FARE ALL'INVIO DEL FORM
form.addEventListener("submit", function (event) {
    // Impedisco il  ricaricamento della pagina
    event.preventDefault();

    //Messaggi di errori
    warningCodeText.classList.add("d-none");
    warningCheckText.classList.add('d-none');

     //Controllo check privacy
     if (checkElement.checked) {
        //se la proprietà checked è true, allora si richiama la funzione di calcolo
        calculatePrice();
    }
    else {
        //Messaggio di errore nel DOM
        warningCheckText.classList.remove('d-none')
    };

});

function calculatePrice() {
    //Si estrae il valore dalla select
    selectedJob = selectInput.value;

    //Chiave associata alla variabile
    hourPrice = userJob[selectedJob];

    //Calcolo del prezzo finale
    fullPrice = hourPrice * jobHours;

    //Viene letto il codice se inserito
    userCode = codeImput.value;

    //Verifichiamo se il codice inserito è valido
    if (userCode !== "") {

        if (code.includes(userCode)){

            //Prezzo scontato
            fullPrice -= fullPrice * (discount / 100);

            //Messaggio di conferma
            warningCodeText.classList.remove("text-danger");
            warningCodeText.classList.add("text-success");
            warningCodeText.innerText = "Il codice inserito è valido";
            warningCodeText.classList.remove("d-none");

        }   else {

            //Messaggio di errore
            warningCodeText.classList.remove("text-success");
            warningCodeText.classList.add("text-danger");
            warningCodeText.innerText = "Il codice inserito non è valido";
            warningCodeText.classList.remove("d-none");
        };
    };

    //Prezzo intero
    intPrice = parseInt(fullPrice);

    //Parte decimale a 2 cifre
    decimalPrice = fullPrice.toFixed(2).split(".")[1];

    //Inserimento del prezzo intero all'interno del dom
    intSpan.innerText = `€ ${intPrice}`;
    decimalSpan.innerText = `,${decimalPrice}`;

    //A questo punto il prezzo diventa visibile
    priceText.classList.remove('d-none');
};


function addOptions(obj) {

        //variabile stringa che conterrà il codice HTML
        let htmlString = "";

        //iterazione per ogni elemento dell'array, formato dalle chiavi dell'oggetto passato come parametro alla funzione
        Object.keys(obj).forEach(function (elem) {

        //alla stringa codice viene aggiunta una option con classe e testo
        htmlString += `<option value="${elem}">${elem}</option>`;
    });
    
        //Qui vengono aggiunte le 
    selectInput.insertAdjacentHTML("beforeend", htmlString);
};