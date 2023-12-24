class Paciente {
  constructor(nome, idade, peso, altura, sexo, imc) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.sexo = sexo;
    this.imc = () => {
      const result = (peso / (altura / 100) ** 2).toFixed(2);

      if (result < 18.5) return "Classificação: Magreza, Obesidade (grau): 0";
      else if (24.9 >= result && result >= 18.5)
        return `${result}, Classificação: Normal, Obesidade (grau): 0`;
      else if (29.9 >= result && result >= 25.0)
        return `${result}, Classificação: Sobrepeso, Obesidade (grau): 1`;
      else if (40.0 >= result && result >= 30.0)
        return `${result}, Classificação: Obesidade, Obesidade (grau): 2`;
      else
        return `${result}, Classificação: Obesidade grave, Obesidade (grau): 3`;
    };
  }
}

const pacientes = [];
pacientes.push(
  new Paciente("Leonardo", 20, 75, 171, "M"),
  new Paciente("Beatriz", 24, 59, 167, "F")
);

for (i = 0, genMensage = "do"; i < pacientes.length; i++) {
  if (pacientes[i].sexo === "F") genMensage = "da";

  alert(`
    Ficha ${genMensage} paciente ${pacientes[i].nome}:
    Idade: ${pacientes[i].idade}y,
    Peso: ${pacientes[i].peso}kg,
    Altura: ${pacientes[i].altura}cm,
    IMC: ${pacientes[i].imc()}.
  `);
}
