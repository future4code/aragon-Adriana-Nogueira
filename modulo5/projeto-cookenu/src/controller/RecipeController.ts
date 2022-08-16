import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { USER_ROLES } from "../models/User";
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
                const recipesDB = await recipeDatabase.buscarRecipe(search, limit, page)

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

    public editarRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.id
            const { title, description } = req.body

            if (!token) {
                errorCode = 422
                throw new Error("Token ausente")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            if (!title && !description) {
                errorCode = 422
                throw new Error("Parâmetros ausentes");
            }


            if (title && typeof title !== "string") {
                errorCode = 422
                throw new Error("'title' deve ser uma string")
            }

            if (description && typeof description !== "string") {
                errorCode = 422
                throw new Error("'description' deve ser uma string")
            }

            if (title && title.length < 3) {
                throw new Error("'title' deve possuir ao menos 3 caracteres")
            }

            if (description && description.length < 10) {
                throw new Error("'description' deve possuir ao menos 10 caracteres")
            }

            const recipeDataBase = new RecipeDatabase()
            const receitaDB = await recipeDataBase.searchId(id)

            if (!receitaDB) {
                errorCode = 404
                throw new Error("Id da receita a ser editada inválida")
            }

            if (payload.role === USER_ROLES.NORMAL) {
                if (payload.id !== receitaDB.creator_id) {
                    errorCode = 403
                    throw new Error("Somente admins podem alterar outras receitas além das prórias")
                }
            }

            const recipe = new Recipe(
                receitaDB.id,
                receitaDB.title,
                receitaDB.description,
                receitaDB.created_at,
                receitaDB.updated_at = new Date(),
                receitaDB.creator_id
            )

            title && recipe.setTitle(title)
            description && recipe.setDescription(description)

            await recipeDataBase.editarRecipe(recipe)

            res.status(201).send({
                message: "Edição realizada com sucesso",
                recipe
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
    public deletarRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.id

            if (!token) {
                errorCode = 422
                throw new Error("Token ausente")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            const recipeDataBase = new RecipeDatabase()
            const receitaDB = await recipeDataBase.searchId(id)

            if (!receitaDB) {
                errorCode = 404
                throw new Error("Id da receita a ser deletada inválida")
            }

            if (payload.role === USER_ROLES.NORMAL) {
                if (payload.id !== receitaDB.creator_id) {
                    errorCode = 403
                    throw new Error("Somente admins podem deletar outras receitas além das prórias")
                }
            }

            await recipeDataBase.deletarRecipe(id)

            res.status(200).send({ message: "Receita deletada com sucesso!" })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
} 
