/*
1-3: Matemaattiset operaattorit

Luo kaksi muuttujaa, joihin talletat kokonaislukutyyppiset arvot 17 ja 3. Luo lisäksi 5 muuttujaa, joihin talletat aiemmin luomiesi muuttujien välisen summan, erotuksen, tulon, osamäärän ja jakojäännöksen. Lopuksi, tulosta muuttujien arvot mallin mukaisesti.

Huomaa, että muuttujan nimessä ei saa olla ääkkösiä. Esimerkiksi osamäärän voisi tallentaa muuttujaan nimeltä "osamaara", muttei "osamäärä".


Esimerkkituloste:
Luvut ovat 17 ja 3
Summa on 20
Erotus on 14
Tulo on 51
Osamäärä on 5.666666666666667
Jakojäännös on 2
Ohelman tarkastus ei erottele isoja ja pieniä kirjaimia
*/

var luku1 = 17
var luku2 = 3
var summa = luku1 + luku2
var erotus = luku1 - luku2
var tulo = luku1 * luku2
var osamaara = luku1 / luku2
var jakojaannos = luku1 % luku2

console.log('Luvut ovat ' + luku1 + ' ja ' + luku2)
console.log('Summa on ' + summa)
console.log('Erotus on ' + erotus)
console.log('Tulo on ' + tulo)
console.log('Osamäärä on ' + osamaara)
console.log('Jakojäännös on ' + jakojaannos)
