for (i = 0; i < Infinity; i++) {
  let random = Math.floor(Math.random() * 5),
    kick = Number(prompt("Adivinhe o numero sorteado no intervalo de 0 a 4:"));

  if (kick === random) {
    alert("Número correto");
    break;
  } else {
    alert(`Número incorreto, o correto era ${random}`);
  }
}

