while (true) {
  var option = Number(
    prompt(`
      Digite a opção desejada:
      1 - Soma,
      2 - Subtração,
      3 - Multiplicação,
      4 - Divisão,
      5 - Resto da divisão,
      6 - Sair.
    `)
  );
  if (option != 1 && option != 2 && option != 3 && option != 4 && option != 5)
    break;

  let number1 = Number(prompt("Digite o primeiro numero")),
    number2 = Number(prompt("Digite o segundo numero")),
    result,
    par = false,
    iguals = false;

  resultAndIfParAndIguals = () => {
    if (number1 % 2 === 0 && number2 % 2 === 0) par = true;
    if (number1 === number2) iguals = true;
    return alert(`
    O resultado da operacao é: ${result}
    Os dois numeros sao pares? ${par},
    Os numeros sao iguais? ${iguals}
  `);
  };

  switch (option) {
    case 1:
      result = number1 + number2;
      resultAndIfParAndIguals();
      break;
    case 2:
      result = number1 - number2;
      resultAndIfParAndIguals();
      break;
    case 3:
      result = number1 * number2;
      resultAndIfParAndIguals();
      break;
    case 4:
      result = number1 / number2;
      resultAndIfParAndIguals();
      break;
    case 5:
      result = number1 % number2;
      resultAndIfParAndIguals();
      break;
    default:
      alert("opção invalida");
      break;
  }
}

if (option != 6) alert("Opção invalida");
