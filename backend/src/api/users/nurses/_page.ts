import express from 'express';
import { 
  getAllNurses, 
  getNurse, 
  registerNurse, 
  updateNurse, 
  deleteNurse 
} from './nurse.controller';

const router = express.Router();

router.get('/nurses', getAllNurses);
router.get('/nurses/:id', getNurse);
router.post('/nurses', registerNurse);
router.put('/nurses/:id', updateNurse);
router.delete('/nurses/:id', deleteNurse);

export default router;