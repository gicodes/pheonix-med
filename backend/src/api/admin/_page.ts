import express from 'express';
import { 
  addUser, 
  getSingleUser, 
  getAllUsers, 
  updateUser, 
  deleteUser,
} from './admin.controller';

const router = express.Router();

router.get('/admin/:id', getSingleUser);
router.get('/admin', getAllUsers);
router.post('/admin', addUser);
router.put('/admin/:id', updateUser);
router.delete('/admin/:id', deleteUser);

export default router;
