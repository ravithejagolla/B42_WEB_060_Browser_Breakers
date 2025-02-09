
import {Router} from 'express'
import { addcall } from '../controllers/callController.js'

const callRouter=Router()

callRouter.post('/addcall', addcall)



export default callRouter