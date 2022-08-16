import express, { Request, Response } from 'express'
import cors from 'cors'


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})


app.get("/ping", (req: Request, res: Response) => {
    res.send({ mensagem: "Pong!" })
})

type Pessoas = {
    userId: number,
    id: number,
    title: string,
    concluido: boolean
}
const usuarios: Pessoas[] =
[
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      concluido: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      concluido: false
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      concluido: false
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      concluido: true
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      concluido: false
    },
   
]
app.get("/pessoas/:userId", (req: Request, res: Response) => {
    const userId = Number(req.params.userId)

    const resultado = usuarios.filter((usuario) => {
       return usuario.userId === userId
    })

    res.send({
        usuarios: resultado
    })
})

app.post("/produtos", (req: Request, res: Response) => {
    const { id, title } = req.body

    const utlimoafazer = usuarios[usuarios.length - 1]

    const novoAfazer: Pessoas = {
        userId: utlimoafazer.userId + 1,
        id:id,
        title: title,
        concluido: true
    }

    usuarios.push(novoAfazer)

    res.send({ 
        mensagem: "Produto criado com sucesso",
        afazer: novoAfazer
     })
})

app.put("/afazer/:id", (req: Request, res: Response) => {
const id = Number(req.params.id)
const {concluido} = req.body
const modoConcluido = usuarios.map(usuario => {
    if(usuario.id === id){
    usuario.concluido = concluido
}
return  usuario
})
res.send({
    mensagem: "usuario alterado com sucesso", usuarios: modoConcluido
})
})

app.delete("/afazer/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const index = usuarios.findIndex((usuario) => {
        return usuario.id === id
    })

    if (index === -1) {
        return res.send({
            mensagem: "Produto não encontrado",
            id: id
        })
    }

    usuarios.splice(index, 1)

    res.send({
        mensagem: "Produto deletado com sucesso",
        produtos: usuarios
    })
})