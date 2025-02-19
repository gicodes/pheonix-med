import { Request, Response } from 'express';
import { 
  getUsersByRole, 
  getUserByIdAndRole, 
  createNewUserByRole, 
  updateAUserByRole, 
  deleteAUserByRole 
} from '../../../models/resources/user_roles';

const role = 'nurse';

export const getAllNurses = async (req: Request, res: Response) => {
  try {
    const nurses = await getUsersByRole(role);
    res.json(nurses);
    
  } catch (error) {
    res.status(500).json({ error: 'Error fetching nurses' });
  }
};

export const getNurse = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const nurse = await getUserByIdAndRole(id, role);

    if (!nurse) res.status(404).json({ error: 'Nurse not found' });

    res.json(nurse);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching nurse' });
  }
};

export const createNurse = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const nurse = await createNewUserByRole(name, email, role);

    res.status(201).json(nurse);
  } catch (error) {
    res.status(500).json({ error: 'Error creating nurse' });
  }
};

export const updateNurse = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, email } = req.body;
    
    const nurse = await updateAUserByRole(name, email, id, role);
    if (!nurse) res.status(404).json({ error: 'Nurse not found' });

    res.json(nurse);
  } catch (error) {
    res.status(500).json({ error: 'Error updating nurse' });
  }
};

export const deleteNurse = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const nurse = await deleteAUserByRole(id, role);

    if (!nurse) res.status(404).json({ error: 'Nurse not found' });

    res.json({ message: 'Nurse deleted successfully', nurse });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting nurse' });
  }
};