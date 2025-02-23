import { Request, Response } from 'express';
import { getUserById, getUsers, createNewUser, updateAUser, deleteAUser } from '../../models/CRUD/superuser';

// (Admin Only)
export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error: any) {
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
  } catch (error: any) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email) {
      res.status(400).json({ error: 'Missing fields' });
      return;
    }

    const newUser = await createNewUser(name, email, password, role);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ error: 'Server error' });
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, email, id } = req.body;

    const updatedUser = await updateAUser(name, email, id);
    if (!updatedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ error: 'Server error' });
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const user = await deleteAUser(id);
    if (!user) {
      return;
    }
  } catch(error: any) {
    res.status(500).json({ error: 'Server error' });
  }
};
