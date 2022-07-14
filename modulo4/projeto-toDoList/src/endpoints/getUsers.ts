import { Request, Response } from "express"
import connection from "../database/connection"


export const getUsers =  async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const busca = req.query.busca as string
  
      if (busca) {
        const [ resultado ] = await connection.raw(`
        SELECT * FROM Users
        WHERE LOWER(name) LIKE "%${busca.toLowerCase()}%"OR LOWER(nickname) LIKE "%${busca.toLowerCase()}%";
        `)
  
       res.status(200).send({ pessoas: resultado })
      }
  
      const [ resultado ] = await connection.raw(`
      SELECT * FROM Users;
      `)
  
      res.status(200).send({ pessoas: resultado })
    } catch (error) {
      res.status(errorCode).send({ mensagem: error.message })
    }
}
  