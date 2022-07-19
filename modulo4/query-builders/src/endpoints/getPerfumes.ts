import { TABLE_PERFUMES } from './../database/tableNames';
import { Request, Response } from "express"
import connection from "../database/connection"


export const getPerfumes = async (req:Request, res:Response)=>{
    let errorCode = 400 

    try {
        const search = req.query.s

        if(!search){
            const allPerfumes = await connection(TABLE_PERFUMES)
            .select()

            return res.status(200).send({
                message: "Sucess!",
                perfumes: allPerfumes
            })
        }


        const selectPerfumes =await connection(TABLE_PERFUMES)
        .select()
        .where("name", "LIKE", `${search}`)
        .orWhere("brand", "LIKE", `${search}`)

        res.status(200).send({message: "perfume list", perfumes: selectPerfumes})

    } catch (error: any) {
        if(error.statusCode === 200){
            res.status(500).end()
        }else{
            res.status(errorCode).send({message: error.message})
        }        
    }
}