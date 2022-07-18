import connection from "../database/connection"
import { Request, Response } from "express"


export const getTasks =  async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const busca = req.query.busca as string
  
      if (busca) {
        const [ resultado ] = await connection.raw(`
        SELECT * FROM Tasks
        WHERE LOWER(description) LIKE "%${busca.toLowerCase()}%";
        `)
  
       res.status(200).send({ pessoas: resultado })
      }
  
      const [ resultado ] = await connection.raw(`
      SELECT * FROM Tasks;
      `)
  
      res.status(200).send({ pessoas: resultado })
    } catch (error) {
      res.status(errorCode).send({ mensagem: error.message })
    }
  
}