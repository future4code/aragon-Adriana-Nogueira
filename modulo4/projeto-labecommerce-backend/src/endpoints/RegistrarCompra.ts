

import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Purchase } from "../models/Purchase"

export const registrarCompra = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { user_id, product_id, quantity } = req.body

    if (!user_id || !product_id || !quantity) {
      errorCode = 422
      throw new Error("Parâmetros ausentes.");
    }

    if (typeof user_id !== "string" || typeof product_id !== "string") {
      errorCode = 422
      throw new Error("Parâmetros  devem ser strings.");
    }

    if (typeof quantity !== "number") {
      errorCode = 422
      throw new Error("Parâmetro  deve ser um number.");
    }

    if (quantity <= 0) {
      errorCode = 422
      throw new Error("Parâmetro  deve ser maior que 0.");
    }
    const usuario = await connection(TABLE_USERS)
      .select()
      .where("id", "=", `${user_id}`)

    if(usuario.length === 0){
      errorCode = 409
      throw new Error("Usuário não encontrado.");
    }

    const produto = await connection(TABLE_PRODUCTS)
      .select()
      .where("id", "=", `${product_id}`)

    if (produto[0]) {
      const novaCompra: Purchase = {
        id: Date.now().toString(),
        user_id: user_id,
        product_id: product_id,
        quantity: quantity,
        total_price: produto[0].price * quantity
      }

      await connection(TABLE_PURCHASES)
        .insert({
          id: novaCompra.id,
          user_id: novaCompra.user_id,
          product_id: novaCompra.product_id,
          quantity: novaCompra.quantity,
          total_price: novaCompra.total_price
        })

      res.status(200).send({
        message: "Compra realizada com sucesso!",
        novaCompra: novaCompra
      })
    } else {
      errorCode = 409
      throw new Error("Produto não encontrado.");
    }

  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}