// Criar uma classe Veiculo com propriedades marca, modelo e ano.
// Criar uma classe Carro que herda de Veículo e adiciona a propriedade portas.
// Criar um método description() dentro da classe Veículo que retorne uma string com todas as propriedades do veículo.

// Depois, criar dentro da classe Carro um método description() que retorne uma string com a string da classe Veiculo e adicionado “com x portas.”;
// Inicializar o objeto do carro e fazer console.log do método description() do mesmo.

class Veiculo {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  description(): string {
    return `${this.brand}, ${this.model}, ${this.year}`;
  }
}

class Carro extends Veiculo {
  doors: number;

  constructor(brand: string, model: string, year: number, doors: number) {
    super(brand, model, year);
    this.doors = doors;
  }

  description(): string {
    return `${this.brand}, ${this.model}, ${this.year}, ${this.doors}`;
  }
}

const meuCarro = new Carro("BMW", "M3", 2025, 4);

console.log(meuCarro.description());
