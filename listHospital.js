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
console.log(pacientes)
