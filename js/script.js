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
