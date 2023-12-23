class Student {
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

let students = [];
(Leonardo = new Student(
  "Leonardo Henrique Gabriel da Silva",
  20,
  "M",
  2,
  true
)),
  (Beatriz = new Student("Beatriz Moniele da Silva", 25, "F", 3, false)),
  (alunoNotas = []),
  (mediaNotas = 0),
  (alunoNotas.length = 3),
  (mediaEscolar = 6),
  (toFixedNumbers = 2);

students.push(Leonardo, Beatriz);

for (let aluno = 0; aluno < students.length; aluno++) {
  if (students[aluno].matricula === true) {
    for (let notas = 1, i = 0; notas < alunoNotas.length + 1; notas++, i++) {
      alunoNotas[i] = Number(prompt(`Digite a nota da prova n${notas}:`));

      if (alunoNotas[i] <= 10) {
        switch (notas) {
          case 1:
            students[aluno].n1 = alunoNotas[i].toFixed(toFixedNumbers);
            break;
          case 2:
            students[aluno].n2 = alunoNotas[i].toFixed(toFixedNumbers);
            break;
          case 3:
            students[aluno].n3 = alunoNotas[i].toFixed(toFixedNumbers);
            break;
          default:
            break;
        }
      } else {
        console.log("Nota excede o limite estabelecido");
        break;
      }

      mediaNotas += alunoNotas[i] / alunoNotas.length;

      if (i === 2) {
        (students[aluno].media = mediaNotas.toFixed(toFixedNumbers)),
          (mediaNotas = 0);

        if (students[aluno].media < mediaEscolar) {
          students[aluno].status = "Recuperação";
        } else {
          students[aluno].status = "Aprovado";
        }
      }
      if (students[aluno].status != undefined) {
        let formResult = `idade: ${students[aluno].idade}\n
        sexo: ${students[aluno].sexo}\n
        anoLetivo: ${students[aluno].anoLetivo}\n
        matricula: ${students[aluno].matricula}\n
        n1: ${students[aluno].n1}\n
        n2: ${students[aluno].n2}\n
        n3: ${students[aluno].n3}\n
        media ${students[aluno].media}\n
        status: ${students[aluno].status}\n
        `;

        if (students[aluno].sexo === "M") {
          console.log(`Dados finais do aluno ${students[aluno].nome}:\n
          ${formResult}
          `);
          console.log(
            "%cA Escola Técnica Estadual do Estado de São Paulo deseja ao aluno boas festas!",
            "background: #000; color: #FF0000"
          );
        } else {
          console.log(`Dados finais da aluna ${students[aluno].nome}:\n
          ${formResult}
          `);
        }
      }
    }
  } else {
    if (students[aluno].sexo === "M") {
      console.log(
        `Matricula inativa.\nNão é possível finalizar o ano letivo do aluno ${students[aluno].nome}`
      );
    } else {
      console.log(
        `Matricula inativa.\nNão é possível finalizar o ano letivo da aluna ${students[aluno].nome}`
      );
    }
  }
}
