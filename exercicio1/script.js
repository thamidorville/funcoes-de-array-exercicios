
// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto (o objeto está pronto no arquivo JS).

// 1. A primeira deve retornar o objeto, alterando as 
// propriedades dele para que os **valores** deste objeto 
// fiquem em CAIXA ALTA.
// saída esperada:
// `{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`
// 3. Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. 
// A funcão deve passar o objeto como argumento da funcão de callback, 
// e em seguida imprimir o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, 
// e a funcão 1.
// Repita o processo para a funcão 2

// function multiplicarPor3(array) {
//     const novoArray = []
//     for (numero of array) {
//       novoArray.push(numero * 3)
//     }
//     return novoArray
//   }

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
//função com parametro objeto
//retornar o objeto com os valores em caixa alta
const exibirCaixaAlta = (objeto) => {
    for (let i in objeto){
       objeto[i] = objeto[i].toUpperCase()
}
return objeto
}

console.log(exibirCaixaAlta(objeto)) //{nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}
// 2. A segunda deve retornar os valores do objeto como texto corrido.
// const objeto = {
//     nome: "astrodev",
//     profissao: "Dev das estrelas",
//     username: "astrodev_labenu",
//     senha: "melhorDeTodos"
// }
const exibirTextocorrido = (objeto) => {
    let textoCorrido = ``
    for (let i in objeto){
        textoCorrido = textoCorrido + objeto[i] + ``//textoCorrido += objeto[i]
    }
    return textoCorrido
}
console.log(exibirTextocorrido(objeto))
//3. crie uma funcão que recebe o objeto e um callback como parâmetros. 
// A funcão deve passar o objeto como argumento da funcão de callback, 
// e em seguida imprimir o valor retornado.
// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, 
// e a funcão 1.
// Repita o processo para a funcão 2
const funcaoReceber = (objeto, callback) => {
const valor = callback(objeto)
console.log(valor)
}
funcaoReceber(objeto, exibirCaixaAlta)
funcaoReceber(objeto, exibirTextocorrido)
