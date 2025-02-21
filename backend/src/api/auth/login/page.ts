import express, { Request, Response } from  'express';
import { loginWithEmailAndPassword } from '../../../models/CRUD/superuser';

const router = express.Router();
  
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await loginWithEmailAndPassword(email, password);

  if (!user) res.status(404).json({ error: 'Nurse not found' });

  res.json(user)
}

router.post('/auth/login', login);

export default router;