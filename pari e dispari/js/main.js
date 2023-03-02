let sceltaPariDispari = prompt('scegli pari o dispari');
console.log(`hai scelto ${sceltaPariDispari}`);
let sceltaNumero = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(`il numero scelto è ${sceltaNumero}`);


let numeroCreato = generaNumero();
console.log(`il numero generato è ${numeroCreato}`);

let somma = sommaTraNUmeri(sceltaNumero, numeroCreato);
console.log(`la somma è ${somma}`);


let vincitore = pariDispari(somma);




function generaNumero (){
    let numeroCasuale = Math.floor(Math.random() * 4) + 1;
    
    return numeroCasuale;
}

function sommaTraNUmeri (primoNumero, secondoNumero){
    let somma = primoNumero + secondoNumero;
    return somma
}

function pariDispari (valore){
    if(valore % 2 == 0){
        if(sceltaPariDispari == 'pari'){
            console.log('è pari ed hai vinto!')
        }else {
            console.log('è pari ed hai perso!!')
        }
    }else if( valore % 2 != 0){
        if(sceltaPariDispari == 'dispari'){
            console.log('è dispari ed hai vinto!')
        }else {
            console.log('è disapri ed hai perso!!')
        }
    }
}