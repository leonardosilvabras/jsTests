const sum = (...args) => {
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

const students = [
  (F2401 = new Students(
    "Leonardo Henrique Gabriel da Silva",
    20,
    "M",
    3,
    true
  )),
  (F0512 = new Students("Beatriz Moniele da Silva", 25, "F", 2, false)),
];

const mediaAlunos = () => {
  for (i = 0, mediaIdade = 0; i < students.length; i++) {
    mediaIdade += students[i].idade / students.length;
  }
  return mediaIdade;
};

console.log(mediaAlunos());
