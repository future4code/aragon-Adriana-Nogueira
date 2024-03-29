import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostDTO, IDeletePostInputDTO, IDislikeInputDTO, IEditInputDTO, IGetPostsInputDTO, ILikePostInputDTO } from "../models/Post";
import {Response, Request} from "express"
export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}
    public getPosts = async(req:Request , res: Response) =>{
        try {
            const input: IGetPostsInputDTO = {
                token: req.headers.authorization,
             
            }
            const response = await this.postBusiness.getPosts(input)
            res.status(200).send(response)
        }catch(error){
            res.status(400).send({message:error.message})
        }
    }
    public createPost = async (req: Request, res: Response) => {
        try {

            const input: ICreatePostDTO = {
                token: req.headers.authorization,
                content: req.body.content
            }

            const response = await this.postBusiness.createPost(input)

            res.status(200).send(response)

        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
    public deletePost = async (req: Request, res: Response) => {
        try {

            const input: IDeletePostInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const response = await this.postBusiness.deletePost(input)

            res.status(200).send(response)

        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public postLike = async (req: Request, res: Response) => {
        try {
            const input: ILikePostInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const response = await this.postBusiness.postLike(input)

            res.status(200).send(response)

        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
    public dislikePost = async (req: Request, res: Response) => {
        try {

            const input: IDislikeInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const response = await this.postBusiness.dislikePost(input)

            res.status(200).send(response)

        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public editPost = async (req: Request, res: Response) => {
        try {

            const input: IEditInputDTO = {
                token: req.headers.authorization,
                id: req.params.id,
                content: req.body.content
            }

            const response = await this.postBusiness.editPost(input)

            res.status(200).send(response)

        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
} 
    

    

