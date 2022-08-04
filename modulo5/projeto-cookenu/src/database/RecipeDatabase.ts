import { IRecipeDB, Recipe } from "../models/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "Cookenu_Recipes"

    public getAllRecipes = async () => {
        const recipesDB: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
        
        return recipesDB
    }
    public recipesSearch = async (search: string , limit: number, page: number) => {
        const recipesDB: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where("title", "LIKE", `${search}`)
        
        return recipesDB
    }
    public createRecipe = async (recipe: Recipe) => {
        const recipeDB: IRecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            created_at: recipe.getCreatedAt(),
            updated_at: recipe.getUpdatedAt(),
            creator_id: recipe.getCreatorId()
        }

        await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .insert(recipeDB)
    }
}