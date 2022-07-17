import { Request, Response } from "express"
import connection from "../database/connection"
import { User } from "../types"

export const adicionaUsuario = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const taskId = req.params.taskId
        const userId = req.body.userId

        const [verificarTask] = await connection.raw(`
      SELECT * FROM Tasks
      WHERE id = ${taskId};
      `)
        const encontrarTaskId = verificarTask[0]

        if(!encontrarTaskId){
            errorCode = 404 
            throw new Error("Tarefa Não encontrada");
            
        }
        const [verifcarUser] = await connection.raw(`
        SELECT * FROM Users
        WHERE id = ${userId};
        `)
        const encontrarId = verifcarUser[0]
        if(!encontrarId){
            errorCode = 404 
            throw new Error("Usuario Não encontrado"); 
        }
        const [verificationToDo] = await connection.raw(`
        SELECT * FROM Responsibles
        WHERE taskId = ${taskId};
        `)
        const toDoFound = verificationToDo[0]

        if (toDoFound) {
            errorCode = 409
            throw new Error("Erro: usuário(a) já atribuido(a) à essa tarefa.");

        } else {
            const newToDo = {
                userId: userId,
                taskId: taskId
            }

            await connection.raw(`
            INSERT INTO Responsibles (userId, taskId)
            VALUES ("${newToDo.userId}", "${newToDo.taskId}");
            `)

            res.status(201).send({ mensagem: "Usuário(a) atribuido(a) à tarefa com sucesso!"})
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
} 