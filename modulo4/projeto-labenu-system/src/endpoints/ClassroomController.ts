import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";
import { Classroom } from "../models/Classroom";

export class ClassroomController {
    public async getAllClassrooms(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
            const result = await classroomDatabase.getAllClassrooms()

            res.status(200).send({ classrooms: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
    public async createClassroom(req: Request, res: Response) {
        let errorCode = 400
        try {
            const { name, module } = req.body

            const classroom = new Classroom(
                Date.now().toString(),
                name,
                module
            )

            const classroomDatabase = new ClassroomDatabase()
            await classroomDatabase.createClassroom(classroom)

            res.status(201).send({
                message: "Turma criada com sucesso!",
                classroom: classroom
            })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public async buscarClassroom(req: Request, res: Response) {
        let errorCode = 400
        try {
            const classroomDatabase = new ClassroomDatabase()
            const lista = await classroomDatabase.getAllClassrooms()
            const result = lista.filter((item) => {
                return item.module !== "0"
            })
            res.status(200).send({ classroombuscas: result })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }

    }
    public async mudarClass(req: Request, res: Response) {
        let errorCode = 400
        try {
            const id = req.params.id as string
            const module = req.body.module as string
            const classroomDataBase = new ClassroomDatabase()
            const buscarClass = await classroomDataBase.verificationClass(id)
  
            
            if (!buscarClass[0]) {
                errorCode = 404
                throw new Error("Turma não encontrada.");
            }

            await classroomDataBase.mudarClassroom(id, module)

            res.status(200).send({
                mensagem: "Módulo alterado com sucesso!"
            })

        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

} 

    
    
    




