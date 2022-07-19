import { Request, Response } from "express"
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";
import { Perfume } from "../models/Perfume";

export const criarPerfumes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
       const name = req.body.name
       const price = req.body.price
       const brand = req.body.brand
       const ml = req.body.ml

        if (!name || !price || !brand || !ml)  {
            errorCode = 422
            throw new Error("Erro: parâmetros ausentes.");
        }

        if (typeof name !== "string" ) {
            errorCode = 422
            throw new Error("Erro: parâmetro 'name' deve ser do tipo string e 'price' do tipo number.");
        }
        if (typeof price !== "number" ) {
            errorCode = 422
            throw new Error("Erro: parâmetro 'price' do tipo number.");
        }
        if (typeof brand !== "string" ) {
            errorCode = 422
            throw new Error("Erro: parâmetro 'brand' do tipo string.");
        }
        if (typeof ml !== "number" ) {
            errorCode = 422
            throw new Error("Erro: parâmetro 'ml' do tipo number.");
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("Erro: parâmetro 'price' deve ser maior que zero");
        }


        const novoPerfume:Perfume = {
            id: Date.now().toString(),
            name: name,
            brand:brand,
            price: price,
            ml:ml
        }

        // await connection.raw(`
        // INSERT INTO ${TABLE_PERFUMES} (id, name, price)
        // VALUES ("${novoPerfume.id}", "${novoPerfume.name}", ${novoPerfume.price});
        // `)
        await connection(TABLE_PERFUMES)
        .insert({
            id: novoPerfume.id,
            name: novoPerfume.name,
            brand: novoPerfume.brand,
            price: novoPerfume.price,
            ml: novoPerfume.ml
        })

        res.status(201).send({ product: novoPerfume, message: "Produto criado com sucesso!" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}  