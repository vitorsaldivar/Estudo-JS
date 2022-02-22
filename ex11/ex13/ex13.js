/*function takenum() {
    let num = document.getElementById('numero')
    if (num.value.length == 0 || num.value < 1 || num.value > 100) {
        alert('Número invalido ou não preenchido')
    }
    else {
        let list = document.getElementById('lista')
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        let valor = []
        valor.push(num.value)
    }
}
function analise(valor) {
    alert(`os valores do vetor são ${valor[2]}`)
}

*/
let num = document.querySelector('input#numero')
let list = document.querySelector('select#lista')
let res = document.getElementById('res')
let valores = []
function takenum() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    }
    else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else {
        return false
    }
}
function analise() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    }
    else {
        let total = valores.length
        res.innerHTML = ''
        valores.sort()
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
        }
        let media = soma / total
        res.innerHTML += `<p>O total de números cadastrados é ${total}</p>`
        res.innerHTML += `<p>O maior valor é ${valores[total-1]}`
        res.innerHTML += `<p>O menor valor é ${valores[0]}`
        res.innerHTML += `<p>A soma dos valores é igual a ${soma}`
        res.innerHTML += `<p> A média dos valores é igual a ${media}`
    }
}