function generujRaport() {
    const material = document.getElementById("material").value;
    const obciazenie = parseFloat(document.getElementById("obciazenie").value);
    const dlugosc = parseFloat(document.getElementById("dlugosc").value);
    const kat = parseFloat(document.getElementById("kat").value);
    const srednica = parseFloat(document.getElementById("srednica").value);
    let wynik = '';

    switch (material) {
        case "St0s":
            wynik = obliczSt0s(obciazenie, kat, dlugosc, srednica);
            break;
        case "St3s":
            wynik = obliczSt3s(obciazenie, kat, dlugosc, srednica);
            break;
        case "St4s":
            wynik = obliczSt4s(obciazenie, kat, dlugosc, srednica);
            break;
        case "St5":
            wynik = obliczSt5(obciazenie, kat, dlugosc, srednica);
            break;
        case "St6":
           wynik = obliczSt6(obciazenie, kat, dlugosc, srednica);
            break;
        case "St7":
          wynik = obliczSt7(obciazenie, kat, dlugosc, srednica);
            break;
        case "10":
            wynik = oblicz10(obciazenie, kat, dlugosc, srednica);
            break;
        default:
            wynik = "Nieznany rodzaj materiału.";
    }
    document.getElementById("raport").style.display = "block";
    document.getElementById("wynik").innerHTML = wynik;
	const raportSection = document.getElementById("raport");
    raportSection.scrollIntoView({ behavior: "smooth" });
}

function obliczSt0s(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Nm
    const modul = (moment / katRad).toFixed(2); // Nm/rad
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
    const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // m^4
    const naprezenie = (((moment * (srednicaM / 2)) / mom_bez) / 1000000).toFixed(2); // MPa
    const kirchhoff = (moment / (dlugosc * mom_bez * katRad)).toFixed(2); // Pa
    if (naprezenie < 65) {
      wynik += `<h1>Próba skręcania</h1>Naprężenie styczne wynosi: ${naprezenie} MPa<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>ztywność na skręcanie</b> wynosi: ${modul} Nm/rad <br>`;
         wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
        
    } else if (naprezenie >= 65) {
        wynik += `<h1>Próba skręcania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>Sztywność na skręcanie</b> wynosi: ${modul} Nm/rad <br>`;
         wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
	}

    return wynik;
}

function obliczSt3s(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Nm
    const modul = (moment / katRad).toFixed(2); // Nm/rad
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // m^4
    const naprezenie = (((moment * (srednicaM / 2)) / mom_bez) / 1000000).toFixed(2); // MPa
    const kirchhoff = (moment / (dlugosc * mom_bez * katRad)).toFixed(2); // Pa
    if (naprezenie < 75) {
       wynik += `<h1>Próba skręcania</h1>Naprężenie styczne wynosi: ${naprezenie} MPa<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>ztywność na skrecanie</b> wynosi: ${modul} Nm/rad <br>`;
         wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
        
    } else if (naprezenie >= 75) {
        wynik += `<h1>Próba skręcania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>Sztywność na skrecanie</b> wynosi: ${modul} Nm/rad <br>`;
       wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
	}

    return wynik;
}

function obliczSt4s(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Nm
    const modul = (moment / katRad).toFixed(2); // Nm/rad
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // m^4
    const naprezenie = (((moment * (srednicaM / 2)) / mom_bez) / 1000000).toFixed(2); // MPa
    const kirchhoff = (moment / (dlugosc * mom_bez * katRad)).toFixed(2); // Pa
    if (naprezenie < 85) {
        wynik += `<h1>Próba skręcania</h1>Naprężenie styczne wynosi: ${naprezenie} MPa<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>ztywność na skrecanie</b> wynosi: ${modul} Nm/rad <br>`;
       wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
        
    } else if (naprezenie >= 85) {
      wynik += `<h1>Próba skręcania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>Sztywność na skrecanie</b> wynosi: ${modul} Nm/rad <br>`;
         wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
  
	}
    return wynik;
}

function obliczSt5(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Nm
    const modul = (moment / katRad).toFixed(2); // Nm/rad
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // m^4
    const naprezenie = (((moment * (srednicaM / 2)) / mom_bez) / 1000000).toFixed(2); // MPa
    const kirchhoff = (moment / (dlugosc * mom_bez * katRad)).toFixed(2); // Pa
    if (naprezenie < 90) {
        wynik += `<h1>Próba skręcania</h1>Naprężenie styczne wynosi: ${naprezenie} MPa<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>ztywność na skrecanie</b> wynosi: ${modul} Nm/rad <br>`;
        wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
        
    } else if (naprezenie >= 90) {
        wynik += `<h1>Próba skręcania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>Sztywność na skrecanie</b> wynosi: ${modul} Nm/rad <br>`;
         wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
	}

    return wynik;
}

function obliczSt6(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Nm
    const modul = (moment / katRad).toFixed(2); // Nm/rad
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
 const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // m^4
    const naprezenie = (((moment * (srednicaM / 2)) / mom_bez) / 1000000).toFixed(2); // MPa
    const kirchhoff = (moment / (dlugosc * mom_bez * katRad)).toFixed(2); // Pa
    if (naprezenie < 105) {
        wynik += `<h1>Próba skręcania</h1>Naprężenie styczne wynosi: ${naprezenie} MPa<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>ztywność na skrecanie</b> wynosi: ${modul} Nm/rad <br>`;
         wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
        
    } else if (naprezenie >= 105) {
       wynik += `<h1>Próba skręcania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>Sztywność na skrecanie</b> wynosi: ${modul} Nm/rad <br>`;
         wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
	}

    return wynik;
}

function obliczSt7(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
	const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Nm
    const modul = (moment / katRad).toFixed(2); // Nm/rad
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // m^4
    const naprezenie = (((moment * (srednicaM / 2)) / mom_bez) / 1000000).toFixed(2); // MPa
    const kirchhoff = (moment / (dlugosc * mom_bez * katRad)).toFixed(2); // Pa
    if (naprezenie < 115) {
        wynik += `<h1>Próba skręcania</h1>Naprężenie styczne wynosi: ${naprezenie} MPa<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>ztywność na skrecanie</b> wynosi: ${modul} Nm/rad <br>`;
        wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
        
    } else if (naprezenie >= 115) {
        wynik += `<h1>Próba skręcania</h1><b>Naprężenie ściskające</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
        wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
        wynik += `<b>Sztywność na skrecanie</b> wynosi: ${modul} Nm/rad <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;	
        wynik += `<b>Modul Kirchhoffa</b> wynosi: ${kirchhoff} Pa <br>`;
	}

    return wynik;
}