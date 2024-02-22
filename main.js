import { feladat1 } from "./fuggveny.js";

// console.log(feladat1(2));
/* var változó esetén is működik a hoisting, úgy működik mintha  a hatóköre tetjén hoztuk volna létre. Ha deklarációkor nem adunk értéket, akkor automatikusan az undefined ÉRTÉKET kapja. Lokális változó a függvényen kívül nem értelmezhető, fordítva viszont igen.*/

/* lehet fájl színtű, lehet lokális függvény szintű, és lehet lokális blokk szintű */

// var szam = 12; /* globális, fájl színtű */
// var a = 11111;

// console.log(szam);

// function fv1() {
//   var szam; /* lokális, fgv színtű */
//   szam += 2;
//   console.log(szam);
//   szam = 24;
//   var szam2 = 34;
//   console.log(szam2);
//   console.log(a);
// }

// fv1();
// // console.log(szam2); /* hibaüzenet */
// console.log(szam);

// let szam = 12;
// function fv2() {
//   let szam2 = 24;
//   {
//     let szam2 = 33; /* let hatóköre block szintű */
//     console.log(szam2);
//   }
//   console.log(szam2);
// }

// fv2();
// console.log(szam2); /* undefined */

for (let index = 0; index < 3; index++) {
  console.log(index);
}

// console.log(index);

const NEV = "Béla";
// nev = "Jenő"; NEM VÁLTOZTATHATÓ
console.log(NEV);

/* lista összetett adatszerkezet */
/* Minden elemnek van egy indexe, határozatlan számú elem */

let lista = ["első", "második", "harmadik"];

console.log(lista);
console.log(lista[0]);

console.log(`A lista hossza: ${lista.length}`);

lista[10] = "tizenegyedik";
console.log(lista);
console.log(lista[5]);
lista.push("következő elem"); /* lista végére beteszi a követketző elemet */
console.log(lista);
lista.pop(); /* eltávolítja a lista végéről az elemet */
console.log(lista);

lista = ["a", "b", "c"];
console.log(lista);

const lista2 = [11, 12, 13, 14];
// lista2 = [23, 24, 25]; hibaüzenet

lista2[0] = 11111;
lista2.push(22222);
console.log(lista2);
/* A lista memóriacíme konstans, ezért az nem változtatható meg, viszotn az értékei megváltoztathatóak */

const SZEMELYLISTA = [
  {
    nev: "Gabi",
    tel: "06-20-402-4200",
    kor: 12,
  },
  {
    nev: "Béla",
    tel: "06-30-422-6205",
    kor: 30,
    barat: false,
  },
];
console.log(SZEMELYLISTA[0].kor);

/* javascript objektum egy olyan összetett adatszerkezet, ami összetett adatokat kezel egyben. tulajdonság értékpárokból áll, a kulcsok jelentik az adott objektumok tulajdonságait, az értékek pedig a kulcshoz tartozó értékeket, kapcsos zárójelek közé: {} */
