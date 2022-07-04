import express, { Request, Response } from 'express';
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.send("Servidor funcionando!")
})

type Pessoas = {
    id: number,
    name: string,
    phone: number,
    email: string
}

let listaPessoas: Pessoas[] = [
    {
        id: 1,
        name: "Adriana Nogueira",
        phone: 19999330714,
        email: "adrianabn@gmail.com"
    },
    {
        id: 2,
        name: "Andrea Borges",
        phone: 3198522030,
        email: "deinha@gmail.com"
    },
    {
        id: 3,
        name: "Aniara Nogueira",
        phone: 19992577655,
        email: "inhanha@gmail.com"
    },
]

    app.get('/pessoas', (req: Request, res: Response) => {
        res.status(200).send(listaPessoas)
    })

    //Exercício 4

    app.get('/pessoas/:id', (req: Request, res: Response) => {
        const id = Number(req.params.id)
        const pessoa = listaPessoas.filter(pessoa => pessoa.id === id)
        res.status(200).send(pessoa)
    })

    //Exercício 5

    app.put('/usuario/:id', (req: Request, res: Response) => {
        const id: number = Number(req.params.id)
        const { phone } = req.body
        let usuarioAlterado: Pessoas[] = []

        listaPessoas.map((pessoa) => {

            if (pessoa.id === id) {
                pessoa.phone = phone
                usuarioAlterado.push(pessoa)
            }
        })

        res.status(200).send(["Usuário alterado com sucesso!", usuarioAlterado])
    })

    //Exercício 6

    app.delete('/usuario/:id', (req: Request, res: Response) => {
        const id: number = Number(req.params.id)
        const index: number = listaPessoas.findIndex(pessoa => pessoa.id === id)
        listaPessoas.splice(index, 1)

        res.status(200).send(listaPessoas)
    })

     app.listen(3003, () => console.log("Servidor rodando na porta 3003!")) 
