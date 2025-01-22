import { Schema, model } from "mongoose";

export const Esquema = new Schema({ 
    name :String,
    apepat :String,
    apemat :String,
    noE : Number,
    salario : Number,
});

//La const modeloE es la que crea la colleción en mongoose, al añadir el export, permite exportar el esquema
export const modeloE = new model("tabla de empleados", Esquema); //dentro del parentesis pide el nombre y el esquema