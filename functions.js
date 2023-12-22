class Students {
  constructor(
    nome,
    idade,
    sexo,
    anoLetivo,
    matricula,
    n1,
    n2,
    n3,
    media,
    status
  ) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.anoLetivo = anoLetivo;
    this.matricula = matricula;
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
    this.media = media;
    this.status = status;
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

let alunoNotas = [];
mediaNotas = 0;
alunoNotas.length = 3;
mediaEscolar = 6;

for (let aluno = 0; aluno < students.length; aluno++) {
  for (let notas = 1, i = 0; notas < alunoNotas.length + 1; notas++, i++) {
    alunoNotas[i] = Number(prompt(`Digite a nota da prova ${notas}:`));
    switch (notas) {
      case 1:
        students[aluno].n1 = alunoNotas[i];
        break;
      case 2:
        students[aluno].n2 = alunoNotas[i];
        break;
      case 3:
        students[aluno].n3 = alunoNotas[i];
        break;
      default:
        break;
    }

    mediaNotas += alunoNotas[i] / alunoNotas.length;

    if (i === 2) {
      students[aluno].media = mediaNotas;
      mediaNotas = 0;

      if (students[aluno].media < mediaEscolar) {
        students[aluno].status = "recuperação";
      } else {
        students[aluno].status = "aprovado";
      }
    }
  }

  console.log(`Dados finais do aluno ${students[aluno].nome}:\n
  idade: ${students[aluno].idade}\n
  sexo: ${students[aluno].sexo}\n
  anoLetivo: ${students[aluno].anoLetivo}\n
  matricula: ${students[aluno].matricula}\n
  n1: ${students[aluno].n1}\n
  n2: ${students[aluno].n2}\n
  n3:"${students[aluno].n3}\n
  media ${students[aluno].media}\n
  status: ${students[aluno].status}\n
  A Escola Técnica Estadual do Estado de São Paulo deseja ao aluno boas festas!`);
}
