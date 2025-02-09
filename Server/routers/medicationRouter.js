
import {Router} from 'express'
import { createmedication,getmedications } from '../controllers/medicationController.js'

const medicationRouter=Router()

medicationRouter.post('/medication', createmedication)

medicationRouter.get('/medico', getmedications)




export default medicationRouter