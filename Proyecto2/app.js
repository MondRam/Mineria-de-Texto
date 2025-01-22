import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {test} from "./backend/controllers/empleado.controller.js";
import { test2 } from "./backend/controllers/supervisores.controller.js";

dotenv.config();

mongoose.connect(process.env.url_db, )
.then(() => {
    console.log("funciona la base");
})
.catch((error) => {
    console.log("no funcionó", error);
})

const app = express();
app.use(cors());

app.listen(4000, () => {
  console.log("se escucha el servidor");
})

test();
test2();