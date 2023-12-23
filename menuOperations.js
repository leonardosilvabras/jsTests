let alternative,
  ShoppingList = [];

while (alternative != 3) {
  alternative = Number(
    prompt(`
        Digite a opção desejada:
          1. Cadastrar um item na lista.
          2. Mostrar itens cadastrados.
          3. Sair do programa.
          `)
  );

  switch (alternative) {
    case 1:
      ShoppingList.push(prompt("Digite o item a ser cadastrado:"));
      break;
    case 2:
      if (ShoppingList.length != 0) alert(ShoppingList);
      else alert("Não existem itens cadastrados.");
      break;
    default:
      if (alternative!=3) alert("Opção invalida");
  }
}
