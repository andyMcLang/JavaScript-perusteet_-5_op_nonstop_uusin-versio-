let alkulukuja = 0;

for (let luku = 1; luku <= 60; luku++) {
  let onkoAlkuluku = true;
  for (let jaettava = 2; jaettava <= luku - 1; jaettava++) {
    if (luku % jaettava == 0) {
      onkoAlkuluku = false;
      break;
    }
  }
  if (onkoAlkuluku && luku > 1) {
    console.log(luku);
    alkulukuja++;
  }
}

console.log("Alkulukuja löydetty yhteensä: " + alkulukuja);
