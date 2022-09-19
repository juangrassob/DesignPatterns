"use strict";
class InMemoryDatabase {
    constructor() {
        this.db = {};
    }
    set(newValue) {
        this.db[newValue.id] = newValue;
    }
    get(id) {
        return this.db[id];
    }
}
const pokemonDB = new InMemoryDatabase();
pokemonDB.set({
    id: 'Pikachu',
    attack: 1,
    defense: 1,
});
console.log(pokemonDB);
