import {  ILikeDB, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

  
    public createPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
           
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(postDB)
    }

    public getPosts = async () => {
      
        const postDB: IPostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
            .select()    
        
        return postDB
    }

    public deletePost = async (id: string) => {

        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .delete()
            .where("post_id", "=", `${id}`)

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .delete()
            .where({ id })

    }

    public findById = async (id: string) => {
        const postDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where({ id })

        return postDB[0]
    }

    public postLike = async (input: ILikeDB) => {
        const newLikeDB: ILikeDB = {
            id: input.id,
            post_id: input.post_id,
            user_id: input.user_id
        }

        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .update(newLikeDB)
            .where({id:newLikeDB.post_id})
            .insert(newLikeDB)
    }

    public findLikePost = async (id: string, userId: string) => {
        const postLikeDB: ILikeDB[] = await BaseDatabase
            .connection("Labook_Likes")
            .select()
            .where("user_id", "=", `${userId}`)
            .andWhere("post_id", "=", `${id}`)

        return postLikeDB[0]
    }

    public dislikePost = async (id: string) => {
        await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .delete()
        .where("post_id", "=", `${id}`)
    }
} 

