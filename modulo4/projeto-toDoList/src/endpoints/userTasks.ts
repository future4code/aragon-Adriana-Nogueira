import { Request, Response } from "express"
import connection from "../database/connection"

export const userTasks = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
      const taskId = req.params.taskId as string

      const [novoTask] = await connection.raw(`
      SELECT * FROM Tasks
      WHERE id = "${taskId}";
      `)

      const encontrarId = novoTask[0]

      if (!encontrarId) {
          errorCode = 422
          throw new Error("Erro: tarefa não encontrada.");
      }

      const [resultado] = await connection.raw(`
      SELECT 
      Users.id,
      Users.nickname
      FROM Responsibles
      JOIN Users
      ON Responsibles.userId = Users.id
      WHERE taskId = "${taskId}";
      `)

      if(!resultado[0]){
          res.status(200).send({mensagem: "Tarefa ainda não tem responsável."})
      } else {
          res.status(200).send({users: resultado})
      }

  } catch (error) {
      res.status(errorCode).send({ message: error.message })
  }
} 
