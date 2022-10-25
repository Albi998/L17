function scrivi() {
    let budget = 1000;
    let spese = 0;

    while (budget > 0) {
        let numeroRandom = Math.floor(Math.random() * 100);
        if (numeroRandom <= budget) {
            spese += 1;
            budget -= numeroRandom;
            document.getElementById('miaSpesa').innerHTML += `<li>Ammontare della spesa: €${numeroRandom}</li>`;
            document.getElementById('miaSpesa').innerHTML += `<li>Nuovo budget aggiornato: €${budget}</li>`;
        }
        if (budget < 200) {
            break;
        }
    }

    document.getElementById('oggetti').innerHTML = `Hai acquistato ${spese} oggetti`;
    document.getElementById('resto').innerHTML = `Hai meno di 200€😅 ora basta, stai spendendo troppo!💸`;
}  