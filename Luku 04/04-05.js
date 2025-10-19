function sum(...numerot) {
  const tulos = numerot.reduce((acc, curr) => acc + curr, 0);
  console.log(tulos);
}

sum(1, 4, 3, 8, 11);
sum(10);
