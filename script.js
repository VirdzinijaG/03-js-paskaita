"use strict"; // grieztas rezimas
console.log("Pavyko");

var skaicius = 16;
var skaicius1 = 17;

 // 15 > 16
 // true/false true-salyga teisinga, false- salyga neteisinga 
 // false, salygos veiksmus nevykdo


 // 18 > 16 yra true, salygos veiksmus vykdo
 if (skaicius > skaicius1) {
    console.log("Tiesa, skaicius daugiau negu skaicius1");
}

if (skaicius < skaicius1) {
    console.log("Tiesa, skaicius maziau negu skaicius1");
}

if(skaicius == skaicius1) { // == ziurima ar yra lygu 
    console.log("Tiesa, skaicius lygus skaicius1");
}
if(skaicius >= skaicius1) { // >= daugiau arba lygu
    console.log("Tiesa, skaicius daugiau arba lygu negu skaicius1");
}
if(skaicius <= skaicius1) { // <= maziau arba lygu
    console.log("Tiesa, skaicius maziau arba lygu negu skaicius1");
}
if(skaicius != skaicius1) { // != skaicius nelygus skaicius1. 16=17 false, turetu nevykdyt bet ! yra neiginys, apvercia i true ir veiksmus vykdo, dvigubas neiginys
    console.log("Tiesa, skaicius nelygus skaicius1");
}

skaicius = 16; // var nerasoma nes jau nurodyta, tik pakeiciama kintamojo reiksme
skaicius1 = 17;
// 16=17 false  veiksmu nevykdo
// bet ziuri else atveji ir vykdo veiksmus
if(skaicius == skaicius1) { 
    console.log("Tiesa, skaicius lygus skaicius1");
} else {
    console.log("Netiesa, skaicius nelygus skaicius1");
}

//klasikinis programavimo uzdavinys: Patikrinti ar naturtalus skaicius yra lyginis ar nelyginis
// naturalieji skaiciai [1,2,3,4..]

// apsirasyti kintamaji tikrinamas skaicius 12
// patikrinti tikrinamas skaicius > 0; netikrinsim ar skaicius yra realus
// tikrinsim skaicius lyginis ar ne

// 17 % 5 = 2; % liekana jei dalinasi is 2 nelieka liekanos, jei nesidalina lieka liekana

var tskaicius = 12; // -12, 13 bandyta

if (tskaicius > 0) {
    if (tskaicius % 2 == 0) { // jei tskaicius padalinus is dvieju jo liekana lygi nuliui
        console.log("Skaicius yra lyginis " + tskaicius)
    } else {
        console.log("Skaicius yra nelyginis " + tskaicius)
    }
} else {
    console.log("Skaicius ne naturalus " + tskaicius)
}


var tSkaicius = 15; // bandyta su 13, 14, 12

// isvesti informacija tada kai musu skaicius yra 12, 13 arba 14

if (tSkaicius == 12) {
    console.log("Skaicius lygus 12");
} else if (tSkaicius == 13) {
    console.log("Skaicius lygus 13");
} else if (tSkaicius == 14) {
    console.log("Skaicius lygus 14");
} else {
    console.log("Skaicius nelygus, nei 12, nei 13, nei 14");
}

// Jeigu skaiciu1 yra lyginis, sudauginti skaiciu a ir b, jeigu skaicius1 yra nelyginis, pakeisti skaiciu1 reiksme i 14
// 151
//sandauga ? undefined sandaugai nepriskirta jokia reiksme
// 151 yra lyginis
// false
// vykdomas else 
// skaicius = 14
// sandauga ?

skaicius1 = 151; // pabandyta su 150 ir viskas gavosi 
var a,b;
var sandauga;

sandauga = 0; // kad nemestu undefined esme priskirti reiksme

a = 5;
b= 4;

if (skaicius1 % 2 == 0 ) {                    // galima rasyti ir taip, kad vykdytu jei salyga tinkama ir nemestu indefind
    sandauga = a * b; // 4 * 5 = 20           // var sandauga;
} else {                                     // sandauga = a * b;
    skaicius1 = 14                          // console.log("Sandauga: " + sandauga);
}

console.log("Sandauga: " + sandauga);
console.log("skaicius1: " + skaicius1);

const pi = 3.141;
// pi = 5; const reiksme gali buti tik viena, keisti kaip var negalima
console.log(pi);