function generujRaport() {
    const material = document.getElementById("material").value;
    const obciazenie = parseFloat(document.getElementById("obciazenie").value);
    const przekroj = parseFloat(document.getElementById("przekroj").value);

    const dlugosc = parseFloat(document.getElementById("dlugosc").value);
    const dlugosck = parseFloat(document.getElementById("dlugosck").value);
   
    let wynik = '';

    switch (material) {
        case "St0s":
            wynik = obliczSt0s(obciazenie, dlugosck, dlugosc, przekroj);
            break;
        case "St3s":
            wynik = obliczSt3s(obciazenie, dlugosck, dlugosc, przekroj);
            break;
        case "St4s":
            wynik = obliczSt4s(obciazenie, dlugosck, dlugosc, przekroj);
            break;
        case "St5":
            wynik = obliczSt5(obciazenie, dlugosck, dlugosc, przekroj);
            break;
        case "St6":
           wynik = obliczSt6(obciazenie, dlugosck, dlugosc, przekroj);
            break;
        case "St7":
          wynik = obliczSt7(obciazenie, dlugosck, dlugosc, przekroj);
            break;
        case "10":
            wynik = oblicz10(obciazenie, dlugosck, dlugosc, przekroj);
            break;
        default:
            wynik = "Nieznany rodzaj materiału.";
    }
    document.getElementById("raport").style.display = "block";
    document.getElementById("wynik").innerHTML = wynik;
	const raportSection = document.getElementById("raport");
    raportSection.scrollIntoView({ behavior: "smooth" });
}

function obliczSt0s(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosc - dlugosck) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 120) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 120 && naprezenie_pr < 195) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia dopuszczalnego na ściskanie , materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
   } else if (naprezenie_pr >= 195 && naprezenie_pr < 320) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę plastyczności , materiał zacznie płynąć, co oznacza, że odkształcenie będzie postępować bez zwiększania naprężenia. W praktyce oznacza to, że materiał zacznie się odkształcać w sposób niekontrolowany i może ulec uszkodzeniu.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę wytrzymałości na ściskanie, materiał ulegnie zerwaniu. W przypadku próby ściskania, materiał może pęknąć lub ulec innym formom katastrofalnego uszkodzenia.`;
    }

    return wynik;
}

function obliczSt3s(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
    const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosc - dlugosck) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 145) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 145 && naprezenie_pr < 235) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia dopuszczalnego na ściskanie , materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else if (naprezenie_pr >= 235 && naprezenie_pr < 380) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę plastyczności , materiał zacznie płynąć, co oznacza, że odkształcenie będzie postępować bez zwiększania naprężenia. W praktyce oznacza to, że materiał zacznie się odkształcać w sposób niekontrolowany i może ulec uszkodzeniu.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else {
         wynik += `<h1>Próba ściskania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę wytrzymałości na ściskanie, materiał ulegnie zerwaniu. W przypadku próby ściskania, materiał może pęknąć lub ulec innym formom katastrofalnego uszkodzenia.`;
    }

    return wynik;
}

   

function obliczSt4s(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
    const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosc - dlugosck) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 155) {
         wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 155 && naprezenie_pr < 275) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia dopuszczalnego na ściskanie , materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else if (naprezenie_pr >= 275 && naprezenie_pr < 440) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę plastyczności , materiał zacznie płynąć, co oznacza, że odkształcenie będzie postępować bez zwiększania naprężenia. W praktyce oznacza to, że materiał zacznie się odkształcać w sposób niekontrolowany i może ulec uszkodzeniu.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else {
         wynik += `<h1>Próba ściskania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę wytrzymałości na ściskanie, materiał ulegnie zerwaniu. W przypadku próby ściskania, materiał może pęknąć lub ulec innym formom katastrofalnego uszkodzenia.`;
    }

    return wynik;
}
  
function obliczSt5(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
    const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosc - dlugosck) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 170) {
          wynik += `<h1>Próba ściskania</h1>Naprężenie rozciągające wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `Odkształcenie materiału wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `Moduł Younga wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 170 && naprezenie_pr < 295) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia dopuszczalnego na ściskanie , materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else if (naprezenie_pr >= 295 && naprezenie_pr < 490) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę plastyczności , materiał zacznie płynąć, co oznacza, że odkształcenie będzie postępować bez zwiększania naprężenia. W praktyce oznacza to, że materiał zacznie się odkształcać w sposób niekontrolowany i może ulec uszkodzeniu.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else {
         wynik += `<h1>Próba ściskania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę wytrzymałości na ściskanie, materiał ulegnie zerwaniu. W przypadku próby ściskania, materiał może pęknąć lub ulec innym formom katastrofalnego uszkodzenia.`;
    }

    return wynik;
}
 
function obliczSt6(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
    const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosc - dlugosck) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 195) {
         wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 195 && naprezenie_pr < 335) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia dopuszczalnego na ściskanie , materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else if (naprezenie_pr >= 335 && naprezenie_pr < 590) {
       wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę plastyczności , materiał zacznie płynąć, co oznacza, że odkształcenie będzie postępować bez zwiększania naprężenia. W praktyce oznacza to, że materiał zacznie się odkształcać w sposób niekontrolowany i może ulec uszkodzeniu.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę wytrzymałości na ściskanie, materiał ulegnie zerwaniu. W przypadku próby ściskania, materiał może pęknąć lub ulec innym formom katastrofalnego uszkodzenia.`;
    }

    return wynik;
}
     
 function obliczSt7(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
   const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosc - dlugosck) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 210) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 210 && naprezenie_pr < 365) {
       wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia dopuszczalnego na ściskanie , materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else if (naprezenie_pr >= 365 && naprezenie_pr < 690) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę plastyczności , materiał zacznie płynąć, co oznacza, że odkształcenie będzie postępować bez zwiększania naprężenia. W praktyce oznacza to, że materiał zacznie się odkształcać w sposób niekontrolowany i może ulec uszkodzeniu.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę wytrzymałości na ściskanie, materiał ulegnie zerwaniu. W przypadku próby ściskania, materiał może pęknąć lub ulec innym formom katastrofalnego uszkodzenia.`;
    }

    return wynik;
}
 
function oblicz10(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
    const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosc - dlugosck) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 125) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 125 && naprezenie_pr < 205) {
        wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia dopuszczalnego na ściskanie , materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else if (naprezenie_pr >= 205 && naprezenie_pr < 335) {
       wynik += `<h1>Próba ściskania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę plastyczności , materiał zacznie płynąć, co oznacza, że odkształcenie będzie postępować bez zwiększania naprężenia. W praktyce oznacza to, że materiał zacznie się odkształcać w sposób niekontrolowany i może ulec uszkodzeniu.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else {
         wynik += `<h1>Próba ściskania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło granicę wytrzymałości na ściskanie, materiał ulegnie zerwaniu. W przypadku próby ściskania, materiał może pęknąć lub ulec innym formom katastrofalnego uszkodzenia.`;
    }

    return wynik;
} 
