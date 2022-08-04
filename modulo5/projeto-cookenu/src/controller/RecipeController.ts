import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";



export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const search = req.query.search as string
            const limit = Number(req.query.limit) || 5
            const page = Number(req.query.page) || 1

            if (!token) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            if (search) {
                const recipeDatabase = new RecipeDatabase()
                const recipesDB = await recipeDatabase.recipesSearch(search, limit, page)

                const recipes = recipesDB.map((recipeDB) => {
                    return new Recipe(
                        recipeDB.id,
                        recipeDB.title,
                        recipeDB.description,
                        recipeDB.created_at,
                        recipeDB.updated_at,
                        recipeDB.creator_id
                    )
                })

                res.status(200).send({ recipes })
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getAllRecipes()

            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            })

            res.status(200).send({ recipes })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public createRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const { title, description } = req.body

            if (!token) {
                errorCode = 401
                throw new Error("Token ausente")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            if (!title || !description) {
                errorCode = 422
                throw new Error("Parâmetros ausentes");

            }

            if (typeof title !== "string" || typeof description !== "string") {
                errorCode = 422
                throw new Error("Parâmetros devem ser do tipo string");
            }

            if (title.length < 3) {
                errorCode = 422
                throw new Error("Parâmetro 'title' deve possuir ao menos 3 caracteres");
            }

            if (description.length < 10) {
                errorCode = 422
                throw new Error("Parâmetro 'description' deve possuir ao menos 10 caracteres");
            }


            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const recipe = new Recipe(
                id,
                title,
                description,
                new Date(),
                new Date(),
                payload.id
            )

            const recipeDataBase = new RecipeDatabase()
            await recipeDataBase.createRecipe(recipe)

            res.status(201).send({
                message: "Receita adicionada com sucesso!",
                recipe
            })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

}