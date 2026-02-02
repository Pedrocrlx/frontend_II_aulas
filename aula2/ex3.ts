// Criar uma classe ListHandler  com T genérico que permita adicionar e remover elementos de um array. A classe deve conter o método add(), remove(), e getAll().
//Inicializar o ListHandler e utilizar todos os métodos, e no final fazer console.log do getAll().

class ListHandler<generic> {
  private contents: generic[] = [];

  add(item: generic) {
    this.contents.push(item);
  }

  getAll(): generic[] {
    return this.contents;
  }

  remove(item: generic) {
    const index = this.contents.indexOf(item);
    if (index !== -1) {
      this.contents.splice(index, 1);
      console.log(this.getAll());
    }
    console.log(`${item} not exist`);
  }
}
