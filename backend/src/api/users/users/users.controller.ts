import express, { Request, Response } from 'express';
import { getUserById, createNewUser, updateAUser, deleteAUser } from '../../models/resources/admin_crud';

const router = express.Router();

// Base User Functions (unused)
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, role } = req.body;
    const newUser = await createNewUser(name, email, role);
    
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

export const retrieveUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserById(Number(id));

    if (!user) res.status(404).json({ error: 'User not found' });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = await updateAUser(name, email, Number(id));
    if (!updatedUser) res.status(404).json({ error: 'User not found' });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteAUser(Number(id));

    if (!deletedUser) res.status(404).json({ error: 'User not found' });

    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};


router.post('/users', createUser);
router.get('/users/:id', retrieveUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;