/*
2-2: Toistorakenne

Tee toistorakenne, joka tulostaa konsoliin parittomat luvut välillä 1-10, mutta alkaen luvusta 10 ja pienenevään suuntaan.

Vinkki: luvun parittomuuden voi tarkistaa sen ja luvun 2 jakojäännöksen avulla.


Esimerkkituloste:
9
7
5
3
1
Ohjelman tulostuksen täytyy olla täsmälleen sama kuin esimerkkitulostus (tarkin vertailutaso)

*/

for (var i = 10; i > 0; i--) {
  if (i % 2 != 0) {
    console.log(i)
  }
}
