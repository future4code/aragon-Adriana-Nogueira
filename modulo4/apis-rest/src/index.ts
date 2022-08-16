

import express, { Request, Response } from 'express'
import cors from 'cors'
import { users, User } from "./data"



//função que inicia um servidor
const app = express()

//midlewares
app.use(cors())
app.use(express.json())


app.listen(3003, () => console.log("Server is working!"))


app.get('/users', (req: Request, res: Response) => {

    try {
        const role = req.query.role
        if (role !== "Admin" && role !== "Normal") {
            res.statusCode = 422
            throw new Error("Choose between admin or normal.")
        }
        if (!role) {
            return res.status(200).send(users)
        }
        const userFilter = users.filter(user =>
            user.role === role
        )
        res.status(200).send({ users: userFilter })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})
app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, email, age, role } = req.body

        if (!name || !email || !age || !role) {
            throw new Error("Product name, email, age or role  must be Admin or Normal")
        }
        if (typeof name !== "string" || typeof email !== "string" || typeof age !== "number"){
        throw new Error("Product name, email, age or role  must be Admin or Normal")
    }
    const novoUser: User = {
        id: Date.now(),
       name: name,
       email: email,
       age: age ,
       role: role
    }
    const confirmaEmail: any = users.findIndex(user => user.email === email)
    if (confirmaEmail < 0){
        users.push(novoUser)
    }
        else {
        return("email already exist")
        }
        res.status(201).send({
            message: "user created successfully!",
            users:users
        })
    } catch (error: any) {

    }
    

    })
  
    
 



