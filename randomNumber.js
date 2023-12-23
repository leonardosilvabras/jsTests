let random = Math.floor(Math.random() * 5),
  kick,
  kicks = 0;

while (kick != random) {
  kick = Number(prompt("Adivinhe o numero sorteado no intervalo de 0 a 4:"));
  if (kick != random) alert("Número incorreto, tente novamente");
  kicks++;
}

alert(`Número correto.\nVoce realizou ${kicks} tentativas.`);
