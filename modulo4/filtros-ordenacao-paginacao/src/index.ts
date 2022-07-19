import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getProdutos } from "./endpoints/getProdutos";
import { criarProdutos} from "./endpoints/criarProdutos";
import {getUsers} from "./endpoints/getUsers";
import { alterarPodutos } from "./endpoints/alterarProdutos";
import { deleteProduto } from "./endpoints/deleteProduto";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

app.get("/users", getUsers)


app.get("/products", getProdutos)


app.post("/products", criarProdutos)

app.put("/products/:id", alterarPodutos)

app.delete("/products/:id", deleteProduto)