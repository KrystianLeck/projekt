function generujRaport() {
    const material = document.getElementById("material").value;
    const obciazenie = parseFloat(document.getElementById("obciazenie").value);
    const dlugosc = parseFloat(document.getElementById("dlugosc").value);
    const kat = parseFloat(document.getElementById("kat").value);
    const srednica = parseFloat(document.getElementById("srednica").value);
		if (!material || isNaN(obciazenie) || isNaN(dlugosc) || isNaN(kat) || isNaN(srednica)) {
    alert("Proszę wypełnić wszystkie pola formularza.");
    return;
}
if (obciazenie <= 0 || dlugosc <= 0 || kat <= 0 || srednica <= 0) {
    alert("Proszę wypełnić wszystkie pola formularza poprawnymi danymi. Wartości nie mogą być mniejsze niż 0.");
    return;
}    let wynik = '';
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
    const moment = obciazenie * dlugosc; // Moment skręcający w Nm
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
    const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 32).toFixed(10); // Moment bezwładności polarny w m^4
	const mom_bez_I = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // Moment bezwładności w m^4
 const naprezenie = (((moment * (srednicaM / 2)) / mom_bez)/1000000).toFixed(2); // Naprężenie styczne w MPa
    if (naprezenie < 65) {
     wynik += `<h1>Próba skręcania</h1>`;
		wynik += `<b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
            } else if (naprezenie >= 65) {
        wynik += `<h1>Próba skręcania</h1><b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
	}
    return wynik;
}
function obliczSt3s(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
       let wynik = '';
    const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Moment skręcający w Nm
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
    const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 32).toFixed(10); // Moment bezwładności polarny w m^4
	const mom_bez_I = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // Moment bezwładności w m^4
    const naprezenie = (((moment * (srednicaM / 2)) / mom_bez)/1000000).toFixed(2); // Naprężenie styczne w MPa
    if (naprezenie < 75) {
      wynik += `<h1>Próba skręcania</h1>`;
		wynik += `<b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
            } else if (naprezenie >= 75) {
       wynik += `<h1>Próba skręcania</h1><b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
	}
    return wynik;
}
function obliczSt4s(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
       let wynik = '';
    const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Moment skręcający w Nm
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
    const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 32).toFixed(10); // Moment bezwładności polarny w m^4
	const mom_bez_I = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // Moment bezwładności w m^4
    const naprezenie = (((moment * (srednicaM / 2)) / mom_bez)/1000000).toFixed(2); // Naprężenie styczne w MPa
    if (naprezenie < 85) {
        wynik += `<h1>Próba skręcania</h1>`;
		wynik += `<b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
            } else if (naprezenie >= 85) {
      wynik += `<h1>Próba skręcania</h1><b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
  	}
    return wynik;
}
function obliczSt5(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
       let wynik = '';
    const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Moment skręcający w Nm
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
    const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 32).toFixed(10); // Moment bezwładności polarny w m^4
	const mom_bez_I = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // Moment bezwładności w m^4
     const naprezenie = (((moment * (srednicaM / 2)) / mom_bez)/1000000).toFixed(2); // Naprężenie styczne w MPa
    if (naprezenie < 90) {
        wynik += `<h1>Próba skręcania</h1>`;
		wynik += `<b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
            } else if (naprezenie >= 90) {
        wynik += `<h1>Próba skręcania</h1><b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
	}
    return wynik;
}
function obliczSt6(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
       let wynik = '';
    const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Moment skręcający w Nm
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
    const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 32).toFixed(10); // Moment bezwładności polarny w m^4
	const mom_bez_I = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // Moment bezwładności w m^4
     const naprezenie = (((moment * (srednicaM / 2)) / mom_bez)/1000000).toFixed(2); // Naprężenie styczne w MPa
    if (naprezenie < 105) {
        wynik += `<h1>Próba skręcania</h1>`;
		wynik += `<b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
            } else if (naprezenie >= 105) {
       wynik += `<h1>Próba skręcania</h1><b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
	}
    return wynik;
}
function obliczSt7(obciazenie, kat, dlugosc, srednica) {
    // Obliczenie naprężenia (MPa)
    let wynik = '';
    const katRad = kat * (Math.PI / 180); // Konwersja kąta na radiany
    const moment = obciazenie * dlugosc; // Moment skręcający w Nm
    const srednicaM = srednica / 1000; // Konwersja średnicy na metry
    const mom_bez = (Math.PI * Math.pow(srednicaM, 4) / 32).toFixed(10); // Moment bezwładności polarny w m^4
	const mom_bez_I = (Math.PI * Math.pow(srednicaM, 4) / 64).toFixed(10); // Moment bezwładności w m^4
     const naprezenie = (((moment * (srednicaM / 2)) / mom_bez)/1000000).toFixed(2); // Naprężenie styczne w MPa
    	if (naprezenie < 115) {
		wynik += `<h1>Próba skręcania</h1>`;
		wynik += `<b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
            } else if (naprezenie >= 115) {
        wynik += `<h1>Próba skręcania</h1><b>Naprężenie styczne</b> wynosi: ${naprezenie} MPa, więc przekroczyło wartość naprężenia dopuszczalnego na skręcanie. Materiał zacznie ulegać odkształceniu plastycznemu, co oznacza, że odkształcenie będzie trwałe i nieodwracalne, nawet po usunięciu obciążenia.<br>`;
		wynik += `<b>Moment skręcający</b> wynosi: ${moment.toFixed(2)} Nm <br>`;
		wynik += `<b>Moment bezwładności polarny</b> wynosi: ${mom_bez} m<sup>4</sup> <br>`;
		wynik += `<b>Moment bezwładności</b> wynosi: ${mom_bez_I} m<sup>4</sup> <br>`;
	}
    return wynik;
}
