console.log("Hello world!");
let x = 4;
console.log(x);
x = x + 2;
console.log(x);
/* 
Instructiuni de decizie
*/

let nota = 10;
if(nota === 10){
    console.log("Bravo. Ura!");
} else if(nota < 10 && nota >= 5){
    console.log("Inveti destul de bine");
}else{
    console.log("Inveti rau...");
}


console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

console.log("For");
for(let cifra = 0; cifra < 10; cifra++){
    console.log(cifra);
}

console.log("While");
let cifra = 0;
while(cifra < 10){
    console.log(cifra);
    cifra++;
}

console.log("Do While");
cifra = 0;
do{
    console.log(cifra);
    cifra++;
}while(cifra < 10);



console.log("FOR: Numere de la 100 pina la 0");
for(let numar = 100; numar >= 0; numar--){
    console.log(numar);
}

console.log("WHILE: Numere de la 100 pina la 0");
let numar = 100;
while(numar >= 0){
    console.log(numar);
    numar--;
}
console.clear();
console.log("Numere pare din intervalul 50-100");
for(let numar = 50; numar <= 100; numar+=2){
    console.log(numar);
}

console.log("IF: Numere pare din intervalul 50-100");
for(let numar = 50; numar <= 100; numar++){
    if(numar % 2 === 0){
        console.log(numar);    
    }    
}

console.log("IF: Numere impare din intervalul 50-100");
for(let numar = 50; numar <= 100; numar++){
    if(numar % 2 === 1){
        console.log(numar);    
    }    
}


console.log("IF: Numere divizibile cu 5 sau cu 2 din intervalul 50-100");
for(let numar = 50; numar <= 100; numar++){
    if(numar % 5 === 0 && numar % 10 === 0){
        console.log(numar);    
    }
}

console.log("END");