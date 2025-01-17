import mongoose from "mongoose";
import cors from "cors"; //da seguridad a un servidor que creamos
import dotenv from "dotenv"; //me permite usar las variables de entorno
import express from "express"; //servidor local
import {test} from './backend/controllers/reprobados.controller.js'; //importa la funcion test del archivo reprobados.controller.js

dotenv.config(); //configura las variables de entorno

mongoose.connect(process.env.url_DB) //busca el archivo.env y busca la variable "url_DB" y se conecta al local host
.then(() => {
    console.log("Conectado a la base de datos")
})
.catch((error) => {
    console.log("no funciona la conexión a la base", error)
})

const app = express(); //crea el servidor
app.use(cors()); //usa cors para dar seguridad
 //un servidor se dice que escucha

app.listen(4000, ()=>{
    console.log("Si se escucha el servidor")
 })

 test(); //llama a la funcion test del archivo reprobados.controller.js