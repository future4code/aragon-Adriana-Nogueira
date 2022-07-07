import express, { application, Request, Response } from "express"
import cors from "cors"
import axios from "axios"
import { produtos, Produtos } from "./data"

// EXERCICIO 1
const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/test", (req: Request, res: Response) => {
    try {
        res.status(200).send({ mensagem: "Pong!" })
    } catch (error) {
        res.status(500).send({ mensagem: error.message })
    }
})
// EXERCICIO 3 
app.get("/produtos", (req: Request, res: Response) => {
    try {

        res.status(200).send({ mensagem: "Sucesso", produtos: produtos })
    } catch (error) {
        res.send({ mensagem: error.message })
    }
})
// EXERCICIO 4 
app.post("/produtos", (req: Request, res: Response) => {

    try {
        const { name, price } = req.body
        const adicionarProduto:Produtos = {
            id: Date.now().toString(),
            name:name,
            price:price
        }

        if (name === "" || price === null) {
            res.statusCode = 422
            throw new Error("Erro: tipo inválido de 'id', deve ser uma string.");
        }

        if (typeof name !== "string") {
            res.statusCode = 422
            throw new Error("Erro: tipo inválido, name  deve ser diferente de uma string.");
        }

        if (typeof price !== "number") {
            res.statusCode = 422
            throw new Error("Erro: tipo inválido, price  deve ser diferente de um number.");
        }

        if ( price <= 0) {
            res.statusCode = 422
            throw new Error("Erro: price deve ser maior que 0.");
        }

        produtos.push(adicionarProduto)

        res.status(201).send
        ({ mensagem: "produto adicionado com sucesso!", produtos: adicionarProduto})

    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

// exercicio 4 
app.put("/editarProduto/:id",(req: Request, res: Response) => {
try {
    
    const {price} = req.body
    const {id} = req.params
    const resultado = produtos.map((produto)=>{
        if(produto.id === id){
            produto.price = price
        }
        return produto
    })
    if(price <= 0){
        res.statusCode = 404
        throw new Error("valor do price deve ser maior que 0")
    }
    if (id === ""){
        res.statusCode = 404
        throw new Error("informar valor do id")
    }
    res.status(200).send({message:"Novo valor adicionado", resultado:resultado})
}
 catch (error) {
    res.send({ mensagem: error.message })
}

})