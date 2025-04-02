let obecneZdjecie = 1;

function poprzednie() {
    if(obecneZdjecie == 1) {
        obecneZdjecie = 7;
    } else {
        obecneZdjecie--;
    }

    aktualizacja();
}

function nastepne() {
    if(obecneZdjecie == 7) {
        obecneZdjecie = 1;
    } else {
        obecneZdjecie++;
    }

    aktualizacja();
}

function aktualizacja() {
    document.querySelector('#srodkowy-blok img').src = obecneZdjecie + '.jpg';
}