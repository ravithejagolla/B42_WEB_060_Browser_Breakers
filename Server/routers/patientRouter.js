
import {Router} from 'express';
import { getbyid,patient,updatedatails } from '../controllers/patientContoller.js';

const patientRouter=Router()

patientRouter.get('/:id', getbyid);

patientRouter.post('/', patient);

patientRouter.put('/:id', updatedatails);






export default patientRouter