let sum = (...args) => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

class Students {
  constructor(nome, idade, sexo, anoLetivo, matricula) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.anoLetivo = anoLetivo;
    this.matricula = matricula;
  }
}

let students = [
  (F2401 = new Students(
    "Leonardo Henrique Gabriel da Silva",
    20,
    "M",
    3,
    true
  )),
  (F0512 = new Students("Beatriz Moniele da Silva", 25, "F", 2, false)),
];

let mediaAlunos = () => {
  let totalIdades = 0;

  for (i = 0; i < students.length; i++) {
    totalIdades += students[i].idade;
  }
  let mediaIdade = totalIdades / students.length;

  return mediaIdade;
};

console.log(mediaAlunos());
