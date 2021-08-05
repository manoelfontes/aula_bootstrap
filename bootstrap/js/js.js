// let valor = 1;
// valor = parseInt(gets());
// for(let num = 1; num <= valor; num+=1){
//	if(num%2 == 0){
//	print(num);
//  }
//}

/* numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();
function par(value) {
    if(value%2 ==0){
           return value; 
    }
}
pares = numero.filter(par);
function impar(value) {
    if(value%2 ==1){
           return value; 
    }
}
impares = numero.filter(   impar                );

function positivo(value) {
    if(value>0){
           return value; 
    }
}
positivos = numero.filter(  positivo                  );
function negativo(value) {
    if(value<0){
           return value; 
    }
}
negativos = numero.filter(  negativo                               );

print( pares + " valor(es) par(es)");
print( impares + " valor(es) impar(es)");
print( positivos + " valor(es) positivo(s)");
print( negativos + " valor(es) negativo(s)"); */

/* let valor1 = parseInt(gets());
let valor = valor1;
let n100 = 0;
let n50 = 0;
let n20 = 0;
let n10 = 0;
let n5 = 0;
let n2 = 0;
let n1 = 0;
if(valor/100>0){
    n100 = parseInt(valor / 100);
    valor = valor - (n100 * 100);
} else n100 = 0;

if(valor/50>0){
    n50 = parseInt(valor / 50);
    valor = valor - (n50 * 50);
} else n50 = 0;

if(valor/20>0){
    n20 = parseInt(valor / 20);
    valor = valor - (n20 * 20);
} else n20 = 0;

if(valor/10>0){
    n10 = parseInt(valor / 10);
    valor = valor - (n10 * 10);
} else n10 = 0;

if(valor/5>0){
    n5 = parseInt(valor / 5);
    valor = valor - (n5 * 5);
} else n5 = 0;

if(valor/2>0){
    n2 = parseInt(valor / 2);
    valor = valor - (n2 * 2);
} else n2 = 0;

if(valor/1>0){
    n1 = parseInt(valor / 1);
    valor = valor - (n1 * 1);
} else n1 = 0;

print(valor);
print(n100+" nota(s) de R$ 100,00");
print(n50+" nota(s) de R$ 50,00");
print(n20+" nota(s) de R$ 20,00");
print(n10+" nota(s) de R$ 10,00");
print(n5+" nota(s) de R$ 5,00");
print(n2+" nota(s) de R$ 2,00");
print(n1+" nota(s) de R$ 1,00"); */

let entrada = Array(2);
entrada[0] = gets();
entrada[1] = gets();
let distancia = parseInt(entrada[0]);
let litros = parseFloat(entrada[1]).toFixed(1);
let consumo = distancia / litros;
print(consumo.toFixed(3) + " km/l");