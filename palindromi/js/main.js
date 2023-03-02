let parolaUtente = prompt('inserisci una parola palindroma');
let mezzaParola;

let risultato = trovaPalindromo(parolaUtente);




function trovaPalindromo (parolaInserita) {

    let parolaSenzaSpazi = parolaInserita.split(" ").join("");      //stringa
    let lunghezzaParolaSenzaSpazi = parolaSenzaSpazi.length;      //numero
    let valoreDecrescente = lunghezzaParolaSenzaSpazi - 1;
    
    if (lunghezzaParolaSenzaSpazi % 2 == 0){
        mezzaParola = lunghezzaParolaSenzaSpazi / 2;
    } else {
        mezzaParola = (lunghezzaParolaSenzaSpazi - 1) / 2;
    }

    let element = true
    for ( let i = 0; i < mezzaParola; i++){
                
        if (parolaSenzaSpazi[i] != parolaSenzaSpazi[valoreDecrescente]){
            element = false
            break
        }else {
            valoreDecrescente--
        }
    }
    
    if(element === true){
        console.log('è palindromo');
    } else if (element === false) {
        console.log('non è palindromo');
    }
}
