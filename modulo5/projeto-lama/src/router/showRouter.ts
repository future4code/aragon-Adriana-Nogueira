import { Router } from 'express'
import { ShowBusiness } from '../business/ShowBusiness'
import { ShowController } from '../controller/showController'
import { ShowDatabase } from '../database/showDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const showRouter = Router()

const showController = new ShowController(
    new ShowBusiness(
        new ShowDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

showRouter.post("/", showController.createShow)
showRouter.get("/", showController.getShows)
showRouter.post("/ticket/:id", showController.buyTicket)
showRouter.delete("/ticket/:id", showController.removeShow)
showRouter.post("/ticket", showController.buyTicket)
