function func() {
  console.log(document.getElementById("teksti").innerHTML);

  let teksti = "JavaScript on helppoa ja hauskaa!";
  document.getElementById("teksti").innerHTML = teksti;

  console.log(document.getElementById("teksti").innerHTML);
}
