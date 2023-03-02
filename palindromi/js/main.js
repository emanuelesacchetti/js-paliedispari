parolaUtente = prompt('inserisci una parola palindroma');




let valoreCrescente = 0;
let valoreDecrescente = lunghezzaParolaSenzaSpazi - 1;


function trovaPalindromo (parolaInserita) {

    parolaSenzaSpazi = parolaInserita.split(" ").join("");      //stringa
    lunghezzaParolaSenzaSpazi = parolaSenzaSpazi.length;      //numero

    if (lunghezzaParolaSenzaSpazi % 2 == 0){            //SE PARI
    
    } else {                                   //DISPARI
       
        mezzaParola = (lunghezzaParolaSenzaSpazi - 1) / 2     //escludiamo la lettera centrale e abbiamo due parti uguali

        console.log(mezzaParola);

            for ( let i = 0; i < mezzaParola; i++){
                
                if (parolaSenzaSpazi[valoreCrescente] == parolaSenzaSpazi[valoreDecrescente]){
                    console.log('ok');
                    valoreCrescente++
                    valoreDecrescente--
                }
            }
        }
} 


