import { Request, Response } from "express";
import { StudentDatabase } from "../database/StudentDatabase";
import { Student } from "../models/Student";


export class StudentsController {
    public async getAllStudents(req: Request, res: Response){
        let errorCode = 400
try{
    const search = req.query.search as string

      if (search) {
        const studentDatabase = new StudentDatabase()
        const result = await studentDatabase.getStudentsName(search)

        res.status(200).send({
          students: result
        })

      } else {
    
        const studentDatabase = new StudentDatabase ()
        const result = await studentDatabase.getAllStudents()

        res.status(200).send({ students: result })
      }
      
      } catch(error){
          res.status(errorCode).send({message:error.message})
      }

}  
public async criarStudents(req: Request, res: Response) {
    let errorCode = 400
    try {
        const { name, email, birthdate, classroom_id } = req.body

        const student = new Student(
          Date.now().toString(),
          name,
          email,
          birthdate,
          classroom_id
        )

        const studentDatabase = new StudentDatabase()
        await studentDatabase.criarStudents(student)

        res.status(201).send({
            message: "Turma criada com sucesso!",
            student: student
        })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
public async mudarStudent(req: Request, res: Response) {
  let errorCode = 400
  try {
      const id = req.params.id as string
      const classroom_id = req.body.classroom_id as string
      const studentDatabase = new StudentDatabase()
      const buscarStudent = await studentDatabase.verificationClass(id)

      
      if (!buscarStudent[0]) {
          errorCode = 404
          throw new Error("Estudante não encontrado.");
      }

      await studentDatabase.mudarStudents(id, classroom_id)

      res.status(200).send({
          mensagem: " alterado com sucesso!"
      })

  } catch (error) {
      res.status(errorCode).send({ message: error.message })
  }
}


}
  




