function tervehdi() {
  console.log("Moikka!");
}

function lisaaPainike() {
  const uusiNappain = document.createElement("button");
  uusiNappain.innerHTML = "Tervehdi";
  uusiNappain.setAttribute("id", "luotuPainike");
  uusiNappain.setAttribute("onclick", "tervehdi()");
  document.body.appendChild(uusiNappain);
}
