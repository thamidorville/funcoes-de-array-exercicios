// # Exercício 2
// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3,
// *  Crie uma `const triplos`, e guarde o valor do array nesta const;
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. 
// * Crie uma `const metades`, e guarde o valor do array nesta const;

const arrayDenumeros = [9, 4, 2, 45, 6, 18, 7, 12];

const multiplicarPor3 = (arrayDenumeros) => {
    const triplos = arrayDenumeros.map((numero)=>{
return numero * 3
    })
    return triplos
}
console.log(multiplicarPor3(arrayDenumeros)) // (8) [27, 12, 6, 135, 18, 54, 21, 36]

// const DividirPor2 = (arrayDenumeros) => {
//     const metades = []
//    for (let numero of arrayDenumeros)
//    metades.push(numero/2)
//    return metades
// }
const dividirPor2 = (arrayDenumeros) => {
    const metades = arrayDenumeros.map((numero)=>{
return numero / 2
    })
    return metades
}


console.log(multiplicarPor3(arrayDenumeros))
console.log(dividirPor2(arrayDenumeros))//(8) [4.5, 2, 1, 22.5, 3, 9, 3.5, 6]