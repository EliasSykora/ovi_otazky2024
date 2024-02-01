 // NEÚPLNÝ PODMÍNĚNÝ PŘÍKAZ = JEDNODUCHÁ PODMÍNKA

 if (cislo > 0) {
    console.log("Číslo je kladné.")
 }

 // ÚPLNÝ PODMÍNĚNÝ PŘÍKAZ = PODMÍNKA S ALTERNATIVOU

 if (cislo > 0) {
    console.log("Číslo je kladné.")
 } else {
    console.log("Číslo není kladné.")
 }

// ÚPLNÝ PODMÍNĚNÝ PŘÍKAZ = PODMÍNKA S VÍCE ALTERNATIVAMI

if (cislo > 0) {
    console.log("Číslo je kladné.")
 } else if (cislo < 0) {
    console.log("Číslo je záporné.")
 } else {
    console.log("Číslo je nula.")
 }

 // VNOŘENÁ PODMÍNKA

if (cislo > 0) {
    console.log("Číslo je kladné.")
    if(cislo>10){
        console.log("Číslo je dvouciferné.")  
    }
 }