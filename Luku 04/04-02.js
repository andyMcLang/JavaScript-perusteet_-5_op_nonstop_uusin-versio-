function laskeNelio() {
  const syotettyArvo = document.getElementById("luku");
  const luku = Number(syotettyArvo.value);
  console.log(luku);
  const teksti = "Luvun " + luku + " neliö on " + luku * luku;
  document.getElementById("tulos").innerHTML = teksti;
}
