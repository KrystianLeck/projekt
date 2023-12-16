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
            wynik = "Nieznany rodzaj badania.";
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
    const odksztalcenie = (dlugosck - dlugosc) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 100) {
  wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 100 && naprezenie_pr < 195) {
         wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia, przy której materiał przechodzi w stan plastyczny a odkształcenie staje się nieodwracalne. Materiał zaczyna ulegać trwałemu odkształceniu, które nie zniknie po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else if (naprezenie_pr >= 195 && naprezenie_pr < 320) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną granicę plastyczności stali. Gdy stal przekroczy tę wartość, zaczyna płynąć, a odkształcenie staje się trwałe i nieodwracalne. W tym punkcie, materiał zaczyna płynąć, co oznacza, że odkształcenie jest trwałe, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną wartość wytrzymałości na rozciąganie dla danego materiału. Po przekroczeniu wartości tej wartości, materiał osiąga maksymalne naprężenie, jakie może wytrzymać przed zerwaniem. W tym punkcie, materiał jest najbardziej rozciągnięty i najprawdopodobniej dojdzie do zerwania.`;
    }

    return wynik;
}

function obliczSt3s(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosck - dlugosc) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 120) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 120 && naprezenie_pr < 235) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia, przy której materiał przechodzi w stan plastyczny a odkształcenie staje się nieodwracalne. Materiał zaczyna ulegać trwałemu odkształceniu, które nie zniknie po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else if (naprezenie_pr >= 235 && naprezenie_pr < 380) {
       wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną granicę plastyczności stali. Gdy stal przekroczy tę wartość, zaczyna płynąć, a odkształcenie staje się trwałe i nieodwracalne. W tym punkcie, materiał zaczyna płynąć, co oznacza, że odkształcenie jest trwałe, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną wartość wytrzymałości na rozciąganie dla danego materiału. Po przekroczeniu wartości tej wartości, materiał osiąga maksymalne naprężenie, jakie może wytrzymać przed zerwaniem. W tym punkcie, materiał jest najbardziej rozciągnięty i najprawdopodobniej dojdzie do zerwania.`;
    }

    return wynik;
}

   

function obliczSt4s(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosck - dlugosc) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 130) {
         wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 130 && naprezenie_pr < 275) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia, przy której materiał przechodzi w stan plastyczny a odkształcenie staje się nieodwracalne. Materiał zaczyna ulegać trwałemu odkształceniu, które nie zniknie po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else if (naprezenie_pr >= 275 && naprezenie_pr < 440) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną granicę plastyczności stali. Gdy stal przekroczy tę wartość, zaczyna płynąć, a odkształcenie staje się trwałe i nieodwracalne. W tym punkcie, materiał zaczyna płynąć, co oznacza, że odkształcenie jest trwałe, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else {
       wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną wartość wytrzymałości na rozciąganie dla danego materiału. Po przekroczeniu wartości tej wartości, materiał osiąga maksymalne naprężenie, jakie może wytrzymać przed zerwaniem. W tym punkcie, materiał jest najbardziej rozciągnięty i najprawdopodobniej dojdzie do zerwania.`;
    }

    return wynik;
}
  
function obliczSt5(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosck - dlugosc) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 145) {
         wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 145 && naprezenie_pr < 295) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia, przy której materiał przechodzi w stan plastyczny a odkształcenie staje się nieodwracalne. Materiał zaczyna ulegać trwałemu odkształceniu, które nie zniknie po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
		} else if (naprezenie_pr >= 295 && naprezenie_pr < 490) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną granicę plastyczności stali. Gdy stal przekroczy tę wartość, zaczyna płynąć, a odkształcenie staje się trwałe i nieodwracalne. W tym punkcie, materiał zaczyna płynąć, co oznacza, że odkształcenie jest trwałe, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else {
       wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną wartość wytrzymałości na rozciąganie dla danego materiału. Po przekroczeniu wartości tej wartości, materiał osiąga maksymalne naprężenie, jakie może wytrzymać przed zerwaniem. W tym punkcie, materiał jest najbardziej rozciągnięty i najprawdopodobniej dojdzie do zerwania.`;
    }

    return wynik;
}
 
function obliczSt6(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosck - dlugosc) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 160) {
         wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 160 && naprezenie_pr < 335) {
		wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia, przy której materiał przechodzi w stan plastyczny a odkształcenie staje się nieodwracalne. Materiał zaczyna ulegać trwałemu odkształceniu, które nie zniknie po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
    } else if (naprezenie_pr >= 335 && naprezenie_pr < 590) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną granicę plastyczności stali. Gdy stal przekroczy tę wartość, zaczyna płynąć, a odkształcenie staje się trwałe i nieodwracalne. W tym punkcie, materiał zaczyna płynąć, co oznacza, że odkształcenie jest trwałe, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną wartość wytrzymałości na rozciąganie dla danego materiału. Po przekroczeniu wartości tej wartości, materiał osiąga maksymalne naprężenie, jakie może wytrzymać przed zerwaniem. W tym punkcie, materiał jest najbardziej rozciągnięty i najprawdopodobniej dojdzie do zerwania.`;
    }

    return wynik;
}
     
 function obliczSt7(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosck - dlugosc) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 175) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 175 && naprezenie_pr < 365) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia, przy której materiał przechodzi w stan plastyczny a odkształcenie staje się nieodwracalne. Materiał zaczyna ulegać trwałemu odkształceniu, które nie zniknie po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else if (naprezenie_pr >= 365 && naprezenie_pr < 690) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną granicę plastyczności stali. Gdy stal przekroczy tę wartość, zaczyna płynąć, a odkształcenie staje się trwałe i nieodwracalne. W tym punkcie, materiał zaczyna płynąć, co oznacza, że odkształcenie jest trwałe, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną wartość wytrzymałości na rozciąganie dla danego materiału. Po przekroczeniu wartości tej wartości, materiał osiąga maksymalne naprężenie, jakie może wytrzymać przed zerwaniem. W tym punkcie, materiał jest najbardziej rozciągnięty i najprawdopodobniej dojdzie do zerwania.`;
    }

    return wynik;
}
 
function oblicz10(obciazenie, dlugosck, dlugosc, przekroj) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const przekroj1 = przekroj / 1000000;
    const naprezenie_pr = (obciazenie / przekroj1)/1000000;
    const odksztalcenie = (dlugosck - dlugosc) / dlugosc;
    const modul = naprezenie_pr / odksztalcenie;
    if (naprezenie_pr < 105) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa<br>`;
        wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
        wynik += `<b>Moduł Younga</b> wynosi: ${modul.toFixed(2)} Mpa <br>`;
    } else if (naprezenie_pr >= 105 && naprezenie_pr < 205) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło wartość naprężenia, przy której materiał przechodzi w stan plastyczny a odkształcenie staje się nieodwracalne. Materiał zaczyna ulegać trwałemu odkształceniu, które nie zniknie po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else if (naprezenie_pr >= 205 && naprezenie_pr < 335) {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną granicę plastyczności stali. Gdy stal przekroczy tę wartość, zaczyna płynąć, a odkształcenie staje się trwałe i nieodwracalne. W tym punkcie, materiał zaczyna płynąć, co oznacza, że odkształcenie jest trwałe, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Odkształcenie materiału</b> wynosi: ${odksztalcenie.toFixed(2)} <br>`;
	} else {
        wynik += `<h1>Statyczna próba rozciągania</h1><b>Naprężenie rozciągające</b> wynosi: ${naprezenie_pr.toFixed(2)} MPa więc przekroczyło minimalną wartość wytrzymałości na rozciąganie dla danego materiału. Po przekroczeniu wartości tej wartości, materiał osiąga maksymalne naprężenie, jakie może wytrzymać przed zerwaniem. W tym punkcie, materiał jest najbardziej rozciągnięty i najprawdopodobniej dojdzie do zerwania.`;
    }

    return wynik;
	
} 
