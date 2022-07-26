import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { criarPerfumes } from "./endpoints/AdicionarPerfumes";
import {buscarPerfumes} from "./endpoints/buscarPerfumes"
import { getPerfumes } from "./endpoints/getPerfumes";
import { editarPerfumes } from "./endpoints/editarPerfumes";
import { deletaPerfumes } from "./endpoints/deletaPerfumes";
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Implemente seus endpoints abaixo

app.post("/perfumes", criarPerfumes)

app.get("/perfumes", buscarPerfumes)

app.get("/perfumes", getPerfumes)

app.put("/perfumes/:id", editarPerfumes)

app.delete("/perfumes/:id", deletaPerfumes)
