






const costoKm = 0.21;
let costoTot = 0; 
const scontoMin = 0.20;
const scontoAnz = 0.40;

//Definisco il valore che prendo dal bottone clickato

//Btn-1
let sendBtnElement = document.getElementById("btn-send");

//Btn-2
let nullBtnElement = document.getElementById("btn-null");

//Definisco le due variabile che conterranno rispettivamente i chilometri e l'età dell'utente

//MILESTONE 1 VAR 
let userKm;
let userAge;

//MILESTONE 2 VAR
let userName;
let userSurname;


//Comportamento al Click su "Genere"
sendBtnElement = sendBtnElement.addEventListener("click", function(){

    let userData = document.getElementById("name-surname");
    userData = userData.value;
    let userArr = userData.split(' '); //Utilizzo la funzione split, che al primo spazio mi divide i nomi e li mette all'interno di un array

    console.log(userArr); // (2) ['Mario', 'Rossi']

    //Assegno i valori nell'array alle variabili
    userName = userArr[0];
    console.log(userName);

    userSurname = userArr[1];
    console.log(userSurname);

    document.getElementById("user-NameSur").innerHTML = `${userName} ${userSurname}`

    //Prendo il valore dei Km
    userKm = document.getElementById("number");
    userKm = userKm.value; //string
    console.log(userKm, typeof userKm);
    userKm = parseInt(userKm); //number
    console.log(userKm, typeof userKm);

    //Prendo il valore della fascia d'età
    userAge = document.getElementById("age");
    userAge = userAge.value; //usando select Restituisce come valore il valore della option
    console.log(userAge, typeof userAge); 

//Faccio partire la condizione
if( userAge === 'underage') {
    costoTot = userKm * costoKm;
    let scontoTot = costoTot * scontoMin;
    costoTot = costoTot - scontoTot;
    document.getElementById("user-Cost").innerHTML = `${costoTot.toFixed(2)} €`;
} else if( userAge === 'over') {
    costoTot = userKm * costoKm;
    let scontoTot = costoTot * scontoAnz;
    costoTot = costoTot - scontoTot;
    document.getElementById("user-Cost").innerHTML = `${costoTot.toFixed(2)} €`;
} else if( userAge === 'adult'){
    costoTot = userKm * costoKm;
    document.getElementById("user-Cost").innerHTML = `${costoTot.toFixed(2)} €`;
} else {
    alert('Seleziona la tua età ! Non fare il furbo. ');
}

})

/* MILESTONE 1
//Aggiungo l'evento al click
sendBtnElement = sendBtnElement.addEventListener("click", function(){

    userAge = document.getElementById("age");
    userAge = userAge.value; //prendo il valore scritto nell'input
    console.log(userAge);

    userKm = document.getElementById("number");
    userKm = userKm.value; //prendo il valore scritto nell'input
    console.log(userKm);

    userKm = parseInt(userKm);                         
    userAge = parseInt(userAge); 
    
     if(userAge < 18 ){
        costoTot = userKm * costoKm; //number
        console.log(costoTot, typeof costoTot);
        let scontoTot = (costoTot) * scontoMin;
        console.log(scontoTot);
        costoTot = costoTot - scontoTot;
        console.log(costoTot);
        document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)} grazie allo Sconto Minorenne`;
    } else if(userAge > 65 ){
        costoTot = userKm * costoKm; //number
        console.log(costoTot, typeof costoTot);
        let scontoTot = (costoTot) * scontoAnz;
        console.log(scontoTot);
        costoTot = costoTot - scontoTot;
        console.log(costoTot);
        document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)} grazie allo Sconto Over 65`;
    } else{
        costoTot = userKm * costoKm;
        console.log(costoTot);
        document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)}, purtroppo non hai accesso a sconti in quanto non sei né Minorenne né Over 65`;
    }
    
    //document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)}`; Se voglio stampare solo OUTPUT ALLA FINE E NON PER CONDIZIONE SINGOLA
})

*/


