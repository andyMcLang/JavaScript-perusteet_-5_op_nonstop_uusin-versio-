function tervehdi() {
  console.log("Moikka!");
}

function lisaaPainike() {
  const uusiPainike = document.createElement("button");
  uusiPainike.innerHTML = "Tervehdi konsolissa!";
  uusiPainike.setAttribute("id", "luotuPainike");
  uusiPainike.setAttribute("onclick", "tervehdi()");
  document.body.appendChild(uusiPainike);
}
