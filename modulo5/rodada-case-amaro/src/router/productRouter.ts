import { ProductBusiness } from "../business/ProductBusiness"
import { ProductController } from "../controller/ProductController"
import { Router } from 'express'
import { ProductDatabase } from "../database/ProductDatabase"
import { IdGenerator } from "../services/IdGenerator"
import { HashManager } from "../services/HashManager"
import { Authenticator } from "../services/Authenticator"


export const productRouter = Router()
const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

productRouter.get("/", productController.getProducts)
productRouter.post("/", productController.createProduct)
productRouter.get("/tag", productController.getProducts)