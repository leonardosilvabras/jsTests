let list = [];
list.length = 10;

for (items = 0; items < list.length; items++) {
  list[items] = prompt(
    "Digite o nome do item que vai ser colocado na sua compra:"
  );

  if (items === (list.length-1)) {
    console.log(list.join(","));
  }
}
