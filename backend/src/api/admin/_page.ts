import express from 'express';
import { addUser, getSingleUser, getAllUsers } from './admin.controller';

const router = express.Router();

router.get('/admin/:id', getSingleUser);
router.get('/admin', getAllUsers);
router.post('/admin', addUser);

export default router;
