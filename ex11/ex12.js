function parimpar(n) {
    if(n % 2 == 0){
        return 'par'
    }
    else {
        return 'impar'
    }
}
let res = parimpar(11)
console.log(`11 é um número ${res}`)

//RECURSIVIDADE
function fatorial(n) {
    if(n == 1){
        return 1
    }
    else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(2))