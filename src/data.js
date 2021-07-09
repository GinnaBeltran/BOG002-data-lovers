// estas funciones son de ejemplo

/* const filtrado= {
  filtrarName,
} */

export const filtrarName = (name, pokemones) => {
  return pokemones.filter(pokemon => pokemon.name.includes(name));
}

export const filtrarNum = (num, pokemones) => {
  return pokemones.filter(pokemon => pokemon.num.includes(num));
}

export const filtrarType = (type, pokemones) => {
  return pokemones.filter(pokemon => pokemon.type.includes(type));
}

export const ordenPok =(ordenSelecion, pokemon)=>{
  if (ordenSelecion==0){
    let personajesOrdenadosAz= pokemon.sort((a, b)=> {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
    });
    return personajesOrdenadosAz;
  }

  if (ordenSelecion==1) {
    let personajesOrdenadosZa= pokemon.sort((a, b)=> {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
      return 0;
    });
    return personajesOrdenadosZa;
  }
}

export const ordenNum =(pokemon)=>{
  /* if (ordenSelecion==0){ */
    let personajesOrdenadosAz= pokemon.sort((a, b)=> {
      if (a.num > b.num) return 1;
      if (a.num < b.num) return -1;
      return 0;
    });
    return personajesOrdenadosAz;
  }




