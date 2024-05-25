'use strict';

//Elementi della Pagina
const formCalculator = document.getElementById('calculator-form');
const resultElement = document.getElementById('result');
const userName = document.getElementById('firstName');
const userSurname = document.getElementById('lastName');
const userEmail = document.getElementById('email');
const userCountry = document.getElementById('country');

//Elementi della traccia
const workerBackend = 20.50;
const workerFrontend = 15.30;
const workerAnalysis = 33.60;
const variableTime = 60;
const promotionalCode = document.getElementsById('formGroupExampleInput');
const workHours = 10;

// COSE DA FARE ALL'INVIO DEL FORM
formCalculator.addEventListener('submit', function (event) {
    // Impedisco il  ricaricamento della pagina
    event.preventDefault();

    // Raccolgo i dati nel form
    const country = userCountry.value;
    const promo = parseInt(promotionalCode.value);

    //VALIDATION 
    // Se qualcosa non va, non proseguo
    if (isNaN(country)) {
        resultElement.innerText = 'sono stati inseriti dati non validi';
            resultElement.classList.add('text-danger');
            return;
    }

     // Calcolo il prezzo base
     let preventiveBackend = workerBackend * variableTime;
     let preventiveFrontend = workerFrontend * variableTime;
     let preventiveAnalysis = workerAnalysis * variableTime;


     //PROGETTO IN STANDBY
     //CONTINUARE COL CALCOLO E LA STAMPA RILEGGENDO BENE I CAMPI SCRITTI

});