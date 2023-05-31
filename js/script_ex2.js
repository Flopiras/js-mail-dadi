console.log('js ok')

//1. Creare una lista vuota (dove andrò a mettere i numeri estratti)
const numbers = [];

//2. Creare un ciclo che contenga MASSIMO due numeri
for (let i = 0; i < 2; i++){

    //3. Creare una generatore di numeri casuali (da 1 a 6)
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    //Pushare i numeri generati all'interno della lista
    numbers.push(randomNumber);
    console.log(numbers[i])
}

let message = 'Mi dispiace, hai perso!'

//SE il primo numero > del secondo, la vittoria va all'utente
if(numbers[0] > numbers[numbers.length - 1]){
    message = 'Complimenti! Hai vinto!'
}
//SE INVECE i numeri sono uguali, si è in parità
else if (numbers[0] == numbers[numbers.length - 1]){
    message = 'Hai appena perso la tua anima'
}
console.log(message)