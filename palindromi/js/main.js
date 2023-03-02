let parolaUtente = prompt('inserisci una parola palindroma');


let risultato = trovaPalindromo(parolaUtente);




function trovaPalindromo (parolaInserita) {

    let parolaSenzaSpazi = parolaInserita.split(" ").join("");      //stringa
    let lunghezzaParolaSenzaSpazi = parolaSenzaSpazi.length;      //numero
    let valoreCrescente = 0;
    let valoreDecrescente = lunghezzaParolaSenzaSpazi - 1;

    if (lunghezzaParolaSenzaSpazi % 2 == 0){            //SE PARI
    
    } else {                                   //DISPARI
       
        mezzaParola = (lunghezzaParolaSenzaSpazi - 1) / 2     //escludiamo la lettera centrale e abbiamo due parti uguali
        let element = true
        console.log(mezzaParola);

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

} 


