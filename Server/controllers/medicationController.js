
import Medication from "../models/medicationSchema.js";


export const createmedication=async(req,res)=>{
    try {
        const medication=new Medication(req.body);
        await medication.save();
        res.status(201).json(medication);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

export const getmedications=async(req,res)=>{
    try {
        const medications=await Medication.find();
        res.status(200).json(medications);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

