import express from 'express';
import { 
  getAllDoctors, 
  getDoctor, 
  createDoctor, 
  updateDoctor, 
  deleteDoctor 
} from './doctors.controller';

const router = express.Router();

router.get('/doctors', getAllDoctors);
router.get('/doctors/:id', getDoctor);
router.post('/doctors', createDoctor);
router.put('/doctors/:id', updateDoctor);
router.delete('/doctors/:id', deleteDoctor);

export default router;
