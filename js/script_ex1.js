console.log('js ok')

//1 CREARE UN ARRAY DI EMAIL
const emailList = [];

//AGGIUNGERE EMAIL ALLA LISTA
emailList.push('darth.vader@obiwan.com' , 'mylittlepony@fairyland.com' , 'super.mario@nintendo.com' , 'link&zelda4ever@hyrule.com' , 'hatake.kakashi@hokage.com');
//FARE VERIFICA
console.log(emailList)

let emailItem = ('');

//2 CHIEDERE ALL'UTENTE LA PROPRIA MAIL
const userEmail = prompt('Inserisci qui la tua email', 'darth.vader@obiwan.com').trim();

let result = '';

//3  CREARE UN CICLO DI CONTROLLO PER GLI ELEMENTI DELL'ARRAY
for(let i = 0; i<emailList.length; i++){
    emailItem = emailList[i];
    
    if(userEmail != emailItem){
        result = 'Accesso negato!';
    }
    else if{ 
        result = 'Benvenuto!';
    }
}
    
console.log(result)