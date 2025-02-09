
import {Schema,model} from 'mongoose'

const medicationSchema=new Schema({
    name: {type: String},
    disease: {type: String},
    description:{type: String},
    image:{type: String}
})

const Medication = model('medication',medicationSchema)

export default Medication
