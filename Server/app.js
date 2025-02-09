import env from 'dotenv';
env.config()
import express from 'express'
import {connect} from 'mongoose'
import UserRouter from './routers/UserRouter.js'
import medicationRouter from './routers/medicationRouter.js';
import patientRouter from './routers/patientRouter.js';
import callRouter from './routers/callRouter.js';



const app = express()

app.use(express.json())

app.use('/', UserRouter)
app.use('/',patientRouter)
app.use('/',medicationRouter)
app.use('/',callRouter)

app.use('/paciente', patientRouter)

app.use('/medico', medicationRouter)




app.listen(5000,async()=>{
    try{
        await connect("mongodb://localhost:27017/Medico")
        console.log("Connected to MongoDB")
        console.log(`Server listening on http://localhost:5000`)
    }catch(e){
        console.error(e)
        process.exit(1)
    }
})

