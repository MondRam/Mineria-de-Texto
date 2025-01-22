import { modeloE } from "../models/empleado.model.js";

modeloE.create({
    name: "Pepe",
    apepat: "Perez",
    apemat: "Montoya",
    noE: 12345,
    salario: 7054

})

export const test=()=>{
    console.log("llamando al controlador")
}