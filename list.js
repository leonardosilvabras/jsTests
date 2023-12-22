let shoppingList = [];
shoppingCartCapacity = 10;

for (let items = 0; items < shoppingCartCapacity; items++) {
  shoppingList[items] = prompt(
    "Digite o nome do item que vai ser colocado na sua compra:"
  );

  if (items === shoppingCartCapacity - 1) {
    alert(`Seu carrinho atingiu o limite de items.\n
    Os items contidos no seu carrinho sao: ${shoppingList.join(",")}`);
  }
}
