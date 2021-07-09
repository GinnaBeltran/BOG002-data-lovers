const filtrarName = (name, pokemones) => {
    return pokemones.filter(pokemon => pokemon.name.includes(name));
  }
  module.exports = filtrarName;