function contar() {
    let n1 = document.getElementById('start')
    let n2 = document.getElementById('stop')
    let inc = document.getElementById('increment')
    let res = document.getElementById('resultado')

    if (n1.value.length == 0 || n2.value.length == 0 || inc.value.length == 0){
        window.alert('ERRO faltam dados')
    }
    else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let count = Number(inc.value)

        if (count <= 0) {
            alert('[ERRO] contador inválido')
        }
        if (i > f) {
            for (let x = i; x >= f; x -= count){
                res.innerHTML += `${x} \u{1F449}`
            }
        }
        else {
            for (let x = i; x <= f; x += count) {
                res.innerHTML += `${x} \u{1F448}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}