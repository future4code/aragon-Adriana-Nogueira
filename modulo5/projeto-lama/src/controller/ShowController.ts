import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseDatabase } from "../database/BaseDatabase";
import { ShowDatabase } from "../database/ShowDatabase";
import { BaseError } from "../errors/BaseError";
import { ICreateShowInputDTO, IGetShowInputDTO, Show } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}



    public createShow = async (req: Request, res: Response) => {
        try {
            const input: ICreateShowInputDTO = {
                token: req.headers.authorization,
                band: req.body.band,
                startAt: req.body.startAt
            }

            const response = await this.showBusiness.createShow(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao criar post" })
        }
    }
    public getShow = async (req: Request, res: Response) => {
        try {
            const input: IGetShowInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.showBusiness.getShow(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar posts" })
        }
    }


}
