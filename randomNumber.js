let random = Math.floor(Math.random() * 5),
  kick = prompt("Adivinhe o numero sorteado no intervalo de 0 a 4:"),
  kicks = 1;

while (Number(kick) != random) {
  kick = prompt("Número incorreto, tente novamente:");
  kicks++;
}

alert(`Número correto.\nVoce realizou ${kicks} tentativa(s).`);
