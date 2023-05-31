**ESERCIZIO 1**

Mail

- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)

**TO DO**

1. Creare un array di email con email
   - Fare una verifica
   - Creare una variabile per gli elementi della lista
2. Chiedere all'utente la propria mail (fuori dal ciclo)
   - Creare una costante collegata alla mail dell'utente (fuori dal ciclo)
3. Creare una variabile di "saluto"
4. Creare un ciclo di controllo per gli elementi nell'array
5. Verificare se la mail dell'utente è già presente tra gli elementi del ciclo (all'interno del ciclo)
   - **SE** la mail è già presente nel ciclo, mandiamo un messaggio di bevenuto
6. Stampare il messaggio

**BONUS**

0. Raccogliere gli elementi dal DOM
1. Stampare in pagina

<hr>

**ESERCIZIO 2**

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare (in console)

**TO DO**

1. Creare un ciclo che contenga MASSIMO due numeri
2. Creare una generatore di numeri casuali (da 1 a 6) [all'interno del ciclo]
   - Generare due numeri casuali (il PRIMO per l'utente e l'ULTIMO per il pc)
   - Pushare i numeri generati all'interno del ciclo
     - **SE** il primo numero < del secondo, la vittoria va all'utente
     - **SE INVECE** i numeri sono uguali, si è in parità
     - **ALTRIMENTI** la vittoria è del PC
