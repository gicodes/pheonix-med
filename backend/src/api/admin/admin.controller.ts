import { Request, Response } from 'express';
import { getUserById, getUsers, createNewUser } from '../../models/resources/admin_crud';

// (Admin Only)
export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await getUserById(Number(req.params.id));
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email, role } = req.body;

    if (!name || !email) {
      res.status(400).json({ error: 'Missing fields' });
      return;
    }

    const newUser = await createNewUser(name, email, role);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
