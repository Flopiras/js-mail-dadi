console.log('js ok')

//0 RACCOLGO GLI ELEMENTI DA DOM
const emailOutput = document.getElementById('user-mail');
const welcomeOutput = document.getElementById('welcome');

//1 CREARE UN ARRAY DI EMAIL
const emailList = [];

//AGGIUNGERE EMAIL ALLA LISTA
emailList.push('darth.vader@obiwan.com' , 'mylittlepony@fairyland.com' , 'super.mario@nintendo.com' , 'link&zelda4ever@hyrule.com' , 'hatake.kakashi@hokage.com');
//FARE VERIFICA
console.log(emailList)

//2 CHIEDERE ALL'UTENTE LA PROPRIA MAIL
const userEmail = prompt('Inserisci qui la tua email', 'darth.vader@obiwan.com').trim();

//Creare una costante collegata alla mail dell'utente (fuori dal ciclo)
console.log(userEmail);

//3. Creare una variabile di "saluto"
let result = 'Accesso negato';

//4  CREARE UN CICLO DI CONTROLLO PER GLI ELEMENTI DELL'ARRAY
for(let i = 0; i<emailList.length; i++){
     let emailItem = emailList[i];    
     
     //SE la mail è già presente nel ciclo, mandiamo un messaggio di bevenuto
     if(userEmail == emailItem){
        result = 'Benvenuto!';
    }
}

//6. Stampare il messaggio
console.log(result)

//7 STAMPARE IN PAGINA
emailOutput.innerText = userEmail;

welcomeOutput.innerText = result;