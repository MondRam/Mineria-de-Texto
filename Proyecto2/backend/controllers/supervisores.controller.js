import {modeloS} from '../models/supervisores.model.js';

modeloS.create({
    name: "Juan",
    apepat: "Juarez",
    apemat: "Jimenez",
    noE : 54321,
    salario: 20000,
});

export const test2=()=>{    
    console.log("llamando al controlador de supervisores")}