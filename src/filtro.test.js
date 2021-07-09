const { TestScheduler } = require('@jest/core');
const filtrarName= require ('./filtro');

Test('buscar por nombre es igual a nombres de pokemon', ()=>{
    expect (filtrarName(personajespok.name)).tobe(personajespok.name);
});