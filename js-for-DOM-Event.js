let area = window.document.querySelector('div#interact')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    area.innerText = 'Clicou!'
    area.style.background = 'black'
}
function entrar() {
    area.innerText = 'Entrou!'
}
function sair() {
    area.innerText = 'Saiu!'
    area.style.background = 'rgba(0, 255, 255, 0.37)'
}