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

/*   if (ordenSelecion==1) {
    let personajesOrdenadosZa= pokemon.sort((a, b)=> {
      if (a.num > b.num) return -1;
      if (a.num < b.num) return 1;
      return 0;
    });
    return personajesOrdenadosZa;
  } */

/* export const ordenAz= (personajespok)=>{
  let personajesOrdenados= personajespok.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
console.log(personajesOrdenados);
return personajesOrdenados;
}
/* console.log(ordenAz); */

/* export const ordenZa= (personajespok)=>{
  let personajesOrdenados= personajespok.name.sort(function (a, b) {
  if (a.name < b.name) {
    return 1;
  }
  if (a.name > b.name) {
    return -1;
  } */
  // a must be equal to b
  /* return 0;
});
console.log(personajesOrdenados);

return personajesOrdenados;
} */
/* console.log(ordenZa); */
/* console.log(personajespok[0].name); */

/* export const OrdenarDescendente = function (objectPersonajes){   
   let personajesOrdenadosDes = objectPersonajes.sort((a,b) =>{  
       if(a.name.toLocaleLowerCase()<b.name.toLocaleLowerCase()) return 1;   
        if(a.name.toLocaleLowerCase()>b.name.toLocaleLowerCase()) return -1;   
        return 0;    })      
        return personajesOrdenadosDes;
   } */
/* function ordenPok(firstEl, secondEl){
  return secondEl["num"]- firstEl["num"];
}

export const ordenTargetas= (pokemones) =>{
  console.log("ok");
  return pokemones.num.sort(ordenPok);
} */

/* export const anotherExample = () => {
  return 'OMG';
}; */


