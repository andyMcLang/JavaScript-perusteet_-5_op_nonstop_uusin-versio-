function laskeNelio() {
  let num = Number(document.getElementById("numero").innerHTML);
  let luvunNelio = num * num;
  let teksti = `Luvun ${num} neliö on ${luvunNelio}`;
  document.getElementById("numero").innerHTML = teksti;
  console.log(teksti);
}
