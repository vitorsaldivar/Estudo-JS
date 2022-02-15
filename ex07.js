let botao = window.document.getElementById('botao-soma')
botao.addEventListener('click', somar)

function somar() {
    let s1 = window.document.getElementById('n1')
    let s2 = window.document.querySelector('input#n2')
    let n1 = Number(s1.value)
    let n2 = Number(s2.value)
    let res = n1 + n2
    window.alert(`O resultado da soma é ${res}`)
}