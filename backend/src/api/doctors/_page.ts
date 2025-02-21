import express from 'express';
import { 
  getAllDoctors, 
  getDoctor, 
  registerDoctor, 
  updateDoctor, 
  deleteDoctor 
} from './doctor.controller';

const router = express.Router();

router.get('/doctors', getAllDoctors);
router.get('/doctors/:id', getDoctor);
router.post('/doctors', registerDoctor);
router.put('/doctors/:id', updateDoctor);
router.delete('/doctors/:id', deleteDoctor);

export default router;
