function verificar() {
    let data = new Date()
    year = data.getFullYear()
    let fano = document.querySelector('input#age')
    let res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || fano.value >= year) {
        window.alert('ERRO digite novamente o ano')
    }
    else {
        let sexo = document.getElementsByName('radsex')
        let idade = year - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else {
                img.setAttribute('src','foto-idoso-m.png')
            }
        }
        else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}