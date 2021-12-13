
//Exemplos de vetor
/*var num = [ 5, 1 ,2 ,3 ,4 ]
num.sort() // coloca o vetor em ordem crescente
console.log( `Nosso vetor é: ${num}`)
console.log( `o Vetor tem ${num.length} posições`)*/

// Vetor na tela

let valores = [8,1,7,4,2,9]
valores.sort()

/*for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

//Vetor simplificado

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}