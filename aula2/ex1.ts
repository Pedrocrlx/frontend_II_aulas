// Criar um type Player que tenha os atributos name, age e game.
// Criar 4 diferentes tipos de inicializações e um objecto jogador do tipo Player:
// Com Partial<T>;
// Com Readonly<T>;
// Com Pick<T, K>;
// Com Omit<T, K>;

type Player = { name: string; age: number; game: string };

const partial: Partial<Player> = { name: "Pedro" };
const readOnly: Readonly<Player> = { name: "Pedro", age: 21, game: "Elden" };
const pick: Pick<Player, "name" | "age" | "game"> = {
  name: "Pedro",
  age: 21,
  game: "Elden",
};
const omit: Omit<Player, "game"> = { name: "João", age: 21 };
