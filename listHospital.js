class Paciente {
  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }
}

let pacientes = [] 
pacientes.push((leonardo = new Paciente("Leonardo", 20, 75, 170)))

for (i=0; i<pacientes.length; i++) {
  alert(`
  Ficha do paciente ${pacientes[i].nome}:
    Idade: ${pacientes[i].idade}
    Peso: ${pacientes[i].peso}
    Altura: ${pacientes[i].altura}
  `)
}
