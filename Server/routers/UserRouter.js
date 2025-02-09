
import {Router} from 'express'
import { register,login } from '../controllers/UserController.js'

const UserRouter=Router()

UserRouter.post('/register', register)

UserRouter.post('/login', login)





export default UserRouter