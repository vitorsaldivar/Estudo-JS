function tabuada() {
    let dados = document.getElementById('mult')
    if (dados.value.length == 0 || dados.value == 0) {
        alert('[ERRO] insira um número válido')
    }
    else {
        let tab = document.getElementById('tab')
        let num = Number(dados.value)
        tab.innerHTML = '' //limpa o select para que não fique infinito a cada apertar do botão 'Gerar Tabuada'
        for (let c = 1; c <= 10; c++) {
            //mul = num * c
            let item = document.createElement('option') //cria elemento option da tag html <select> por meio de JS
            item.text = `${c} x ${num} = ${c*num}` //adiciona texto ao <option>
            tab.appendChild(item) //endereça a option criada ao <select> envolvido na variável 'tab'
            //res.innerHTML += `${c} x ${num} = ${mul}<br>`
        }
    }
}