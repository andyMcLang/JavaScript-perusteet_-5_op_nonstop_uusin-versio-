/*
2-3: Alkulukujen tarkistaminen

Tee ohjelma, joka käy läpi luvut välillä 1 ja 60, ja tulostaa vain alkuluvut. Alkuluku on luku, jonka osamäärä on kokonaisluku vain 1:n ja itsensä kanssa. Tulosta lopuksi vielä löydettyjen alkulukujen kokonaismäärä.

Esimerkiksi 7 on alkuluku, koska vain 7/1=5 ja 7/7=1 ovat kokonaislukuja. Sen sijaan 8 ei ole alkuluku, koska sen voi jakaa myös luvuilla 2 ja 4, eikä 9, koska sen voi jakaa myös luvulla 3. Alkuluvun testaamiseksi on luku jaettava kaikilla arvoilla luvusta 2 ylöspäin aina kyseiseen lukuun asti. Tämä onnistuu kahdella sisäkkäisellä toistorakenteella.

Vinkki: Esittele yhteismäärän sisältävä muuttuja vaikkapa jo heti alussa. Koodilohkon ulkopuolella esiteltyyn muuttujaan tehdyt muutokset ovat pysyviä, vaikka ne tapahtuisivat lohkon sisällä, ja muuttujan sisältöä käsiteltäisiin myöhemmin lohkon ulkopuolella.


Esimerkkituloste:
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
Alkulukuja löydetty yhteensä: 17
Ohjelman tulostuksen täytyy olla täsmälleen sama kuin esimerkkitulostus (tarkin vertailutaso)
*/

var laskuri = 0

function isPrime(num) {
  if (num < 2) {
    return false
  }

  for (var i = 2; i <= Math.sqrt(num); i++) {
    console.log(`numeron ${num} neliöjuuri on ${Math.sqrt(num)} kohdassa ${i}`)
    if (num % i === 0) {
      return false
    }
  }

  return true
}

for (i = 1; i <= 60; i++) {
  if (isPrime(i)) {
    console.log(i)
    laskuri++
  }
}

console.log('Alkulukuja löydetty yhteensä: ' + laskuri)
