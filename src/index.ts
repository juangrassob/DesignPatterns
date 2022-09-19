interface Pokemon {
  id: string;
  attack: number;
  defense: number;
}

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;
}

class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
  private db: Record<string, T> = {};

  public set(newValue: T): void {
    this.db[newValue.id] = newValue;
  }

  public get(id: string): T {
    return this.db[id];
  }
}

const pokemonDB = new InMemoryDatabase<Pokemon>();

pokemonDB.set({
  id: 'Pikachu',
  attack: 1,
  defense: 1,
});

console.log(pokemonDB.get('Pikachu'));
