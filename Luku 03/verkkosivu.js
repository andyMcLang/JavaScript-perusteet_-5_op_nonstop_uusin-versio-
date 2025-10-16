function tarkistaTila() {
  const valintaruutu = document.getElementById("checkbox");
  const tulosElementti = document.getElementById("tulos");

  if (valintaruutu.checked) {
    tulosElementti.innerHTML = "ON";
  } else {
    tulosElementti.innerHTML = "OFF";
  }
}
