import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const deletaPerfumes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        // const [ productExists ] = await connection
        // .raw(`SELECT * FROM ${TABLE_PRODUCTS}
        // WHERE id = "${id}";`)


        // await connection.raw(`
        // DELETE FROM ${TABLE_PRODUCTS}
        // WHERE id = "${id}";`)

        await connection(TABLE_PERFUMES)
            .delete()
            .where({ id })
      
        res.status(200).send({ message: "Produto deletado com sucesso." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}