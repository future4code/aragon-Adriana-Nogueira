import { Request, Response } from "express"
import connection from "../database/connection"
import { User } from "../types"

export const alteraTarefa = async (req: Request, res: Response) => {

    let errorCode = 400
    try {
        const taskId = req.params.taskId
        const status = req.body.status as string

        if (!status) {
            errorCode = 422
            throw new Error(" parâmetro ausente.");
        }

        if (status !== "TO_DO" && status !== "DOING" && status !== "DONE") {
            errorCode = 422
            throw new Error("parâmetro deve conter um dos seguintes valores: TO_DO, DOING ou DONE.");
        }

        const [verificaTask] = await connection.raw(`
            SELECT * FROM Tasks
            WHERE id = ${taskId};
            `)
        const idTask = verificaTask[0]

        if (!idTask) {
            errorCode = 422
            throw new Error("Erro: tarefa não encontrada.");
        }

        await connection.raw(`
            UPDATE Tasks
            SET status = "${status}"
            WHERE id = ${taskId}
            `)

        res.status(200).send({ mensagem: "Status alterado com sucesso!" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
} 