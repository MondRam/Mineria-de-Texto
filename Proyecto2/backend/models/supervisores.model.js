import {model} from "mongoose";
import {Esquema} from "./empleado.model.js";

export const modeloS = new model("tabla de supervisores", Esquema); //dentro del parentesis pide el nombre y el esquema