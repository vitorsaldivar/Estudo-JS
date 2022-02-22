let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        this.peso += p
        console.log(`Engordou ${p}kg`)
    }}
    amigo.engordar(3)
    console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
