import { Schema, model } from "mongoose"; //se ponen engre llaves porque son de una libreria

const EsquemaReprobados = new Schema({
    name :String,
    apepat :String,
    apemat :String,
    edad:Number
}) 

export const modeloReprobados = new model("tabla de alumnos reprobados", EsquemaReprobados)//crea un esquema //pide el nombre de la conexion y el esquema que va a estar construyendo



