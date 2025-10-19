function laskuFunktio() {
  let luku = noudaArvo("luku");
  let eksp = noudaArvo("eksponentti");

  console.log("Luku " + luku + " potenssiin " + eksp + " on:");
  console.log(laskePotenssi(luku, eksp));
}

// Put your code here
function noudaArvo(luku) {
  return Number(document.getElementById(luku).value);
}

function laskePotenssi(kanta, eksponentti) {
  if (eksponentti === 0) {
    return 1;
  } else if (eksponentti < 0) {
    return 1 / Math.pow(kanta, -eksponentti);
  } else {
    return Math.pow(kanta, eksponentti);
  }
}
