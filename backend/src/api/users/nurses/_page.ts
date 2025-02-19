import express from 'express';
import { 
  getAllNurses, 
  getNurse, 
  createNurse, 
  updateNurse, 
  deleteNurse 
} from './nurses.controller';

const router = express.Router();

router.get('/nurses', getAllNurses);
router.get('/nurses/:id', getNurse);
router.post('/nurses', createNurse);
router.put('/nurses/:id', updateNurse);
router.delete('/nurses/:id', deleteNurse);


export default router;