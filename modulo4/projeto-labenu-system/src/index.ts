import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { StudentsController } from './endpoints/StudentsController'
import { PingController } from './endpoints/PingController'
import { ClassroomController } from './endpoints/ClassroomController'
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classroomController = new ClassroomController()
const studentsController = new StudentsController()
app.get("/ping", pingController.ping)
app.get("/classrooms", classroomController.getAllClassrooms)
app.post("/classrooms", classroomController.createClassroom)
app.get("/classrooms/ativo", classroomController.buscarClassroom)
app.put("/classrooms/:id", classroomController.mudarClass)
app.get("/classrooms/ativo", classroomController.buscarClassroom)
app.get("/students", studentsController.getAllStudents)
app.post("/students", studentsController.criarStudents)