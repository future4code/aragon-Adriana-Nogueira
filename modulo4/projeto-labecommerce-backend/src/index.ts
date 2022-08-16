import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ping } from './endpoints/ping'
import { cadastraUsuario } from "./endpoints/Cadastro"
import { buscarUsers } from './endpoints/buscarUsers'
import { buscarProdutos } from './endpoints/buscarProdutos'
import { cadastraProdutos } from './endpoints/cadastrarProdutos'
import { registrarCompra } from './endpoints/RegistrarCompra'
import { buscarCompra } from './endpoints/buscarCompra'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)

app.post("/user", cadastraUsuario)

app.get("/user", buscarUsers)

app.get("/products", buscarProdutos)

app.post("/products", cadastraProdutos)

app.post("/purchases", registrarCompra)

app.get("/users/:user_id/purchases", buscarCompra) 