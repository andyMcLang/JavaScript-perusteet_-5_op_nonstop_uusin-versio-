/*
2-1: Luvun arvon tarkistus

Verkkosivulla kysytään käyttäjän ikää. Syötetty arvo on noudettu valmiiksi, mutta sinun tulee täyttää puuttuva koodi. Sivun kutsuessa funktiota tarkistaIka(), tulosta konsoliin ensin "Syötetty ikä: [ikä]", ja tämän perään seuraavien ohjeiden mukaisesti tekstiä:

18 vuotta tai yli: "Käyttäjä on täysi-ikäinen."

Yli 0 vuotta: "Käyttäjä ei ole vielä täysi-ikäinen."

Muussa tapauksessa: "Virheellinen syöte!"


Esimerkkituloste:
Syötetty ikä: 18
Käyttäjä on täysi-ikäinen.
Ohjelman tulostuksen täytyy olla täsmälleen sama kuin esimerkkitulostus (tarkin vertailutaso)
*/

function tarkistaIka() {
  var ika = document.getElementById("ika").value;

  if (ika >= 18) {
    console.log("Syötetty ikä: " + ika);
    console.log("Käyttäjä on täysi-ikäinen.");
  } else if (ika < 18 && ika > 0) {
    console.log("Syötetty ikä: " + ika);
    console.log("Käyttäjä ei ole vielä täysi-ikäinen.");
  } else {
    console.log("Syötetty ikä: " + ika);
    console.log("Virheellinen syöte!");
  }
}

// ÄLÄ MUUTA TÄMÄN ALAPUOLELLE OLEVVAA KOODIA
// Tämä koodi hakee ikä-kentän arvon ja kutsuu tarkistaIka-funktiota
document.getElementById("tarkistaNappi").addEventListener("click", tarkistaIka);
// ÄLÄ MUUTA TÄMÄN YLÄPUOLELLE OLEVVAA KOODIA
