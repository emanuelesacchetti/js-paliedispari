parolaUtente = prompt('inserisci una parola palindroma');

lunghezzaParola = parolaUtente.length;

console.log(lunghezzaParola);

parolaSenzaSpazi = parolaUtente.split(" ").join("").length;

console.log(lunghezzaParolaSenzaSpazi);

let primaParte = 0;
let ultimaParte = parolaSenzaSpazi - 1;

if (parolaSenzaSpazi % 2 == 0){            //SE PARI

} else {                                    //DISPARI
    mezzaParola = (parolaSenzaSpazi - 1) / 2     //escludiamo la lettera centrale

    console.log(mezzaParola);

    for ( let i = 0; i <= mezzaParola; i++){
        
        if 
    }
}