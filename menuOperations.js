let alternative = Number(
    prompt(
      "Digite a opção desejada:\n\t1. Cadastrar um item na lista.\n\t2. Mostrar itens cadastrados.\n\t3. Sair do programa."
    )
  ),
  ShoppingList = [];

switch (alternative) {
  case 1:
    ShoppingList.push(prompt("Digite o item a ser cadastrado:"));
    break;
  case 2:
    if (ShoppingList.length != 0) alert(ShoppingList);
    else alert("Não existem itens cadastrados.");
    break;
  case 3:
    break;
  default:
    alert("Opção invalida");
}
