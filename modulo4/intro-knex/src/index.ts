import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import {Pessoa} from "./types"


const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

//Exercicio 1 
app.get ("/produtos", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const busca = req.query.busca as string

    if (busca) {
      const [ resultado ] = await connection.raw(`
      SELECT * FROM Pessoas
      WHERE LOWER(nome) LIKE "%${busca.toLowerCase()}%";
      `)

     res.status(200).send({ pessoas: resultado })
    }

    const [ resultado ] = await connection.raw(`
    SELECT * FROM Pessoas;
    `)

    res.status(200).send({ pessoas: resultado })
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }

})

//
app.post("/pessoas", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { nome, email } = req.body

    if (!nome || !email) {
      errorCode = 422
      throw new Error("Erro: parâmetros ausentes.");
    }

    if (typeof nome !== "string" || typeof email !== "string") {
      errorCode = 422
      throw new Error("Erro: parâmetros devem ser do tipo string.");
    }

    if (!email.includes("@")) {
      errorCode = 422
      throw new Error("Erro: email inválido.");
    }

    const [pessoas] = await connection.raw(`
    SELECT * FROM Pessoas
    WHERE LOWER(email) = "${email.toLowerCase()}";
    `)

    const procurarPessoa = pessoas[0]

    if (procurarPessoa !== undefined) {
      errorCode = 409
      throw new Error("Erro: email já cadastrado.");
    }

    if (nome.length < 4) {
      errorCode = 422
      throw new Error("Erro: nome do(a) Usuario(a) deve conter pelo menos 4 caracteres.");
    }

    const cadastroPessoas: Pessoa = {
      id: Date.now(),
      nome: nome,
      email: email
    }

    await connection.raw(`
    INSERT INTO Pessoas(id, nome, email)
    VALUES ("${cadastroPessoas.id}", "${cadastroPessoas.nome}", "${cadastroPessoas.email}");
    `)

    res.status(201).send({ mensagem: "Usuario(a) cadastrado(a) com sucesso!", pessoas: cadastroPessoas })

  } catch (error) {
    res.status(errorCode).send({ erro: error.message })
  }
})
 // exercicio editar email


 app.put("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    const email = req.body.email as string

    if (!email) {
      errorCode = 422
      throw new Error("Erro: parâmetro ausente.");
    }

    if (typeof email !== "string") {
      errorCode = 422
      throw new Error("Erro: parâmetro email deve ser do tipo string.");
    }

    if (!email.includes("@")) {
      errorCode = 422
      throw new Error("Erro: email inválido.");
    }

    const [funcionariosId] = await connection.raw(`
    SELECT * FROM Pessoas
    WHERE id = "${id}";
    `)
    const funcionarioEncontradoId = funcionariosId[0]

    if (!funcionarioEncontradoId) {
      errorCode = 404
      throw new Error("Erro: id do(a) funcionário(a) não encontrado.");
    }

    const [pessoas] = await connection.raw(`
    SELECT * FROM Pessoas
    WHERE email = "${email}";
    `)
    const funcionarioEncontrado = pessoas[0]

    if (funcionarioEncontrado) {
      errorCode = 409
      throw new Error("Erro: email já cadastrado.");
    }
    

    await connection.raw(` 
    UPDATE Pessoas
    SET email = "${email}"
    WHERE id = "${id}";
    `)

    res.status(200).send({ mensagem: "Email atualizado com sucesso!" })

  } catch (error) {
    res.status(errorCode).send({ erro: error.message })
  }
})
