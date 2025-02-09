import { Schema,model } from "mongoose";

const patientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  age: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  medicalConditions: {
    type: String,
    required: true
  }
});

const Patient =model('Patient', patientSchema);



export default Patient;
