import { Request, Response } from 'express';
import { 
  getUsersByRole, 
  getUserByIdAndRole, 
  createNewUserByRole, 
  updateAUserByRole, 
  deleteAUserByRole 
} from '../../../models/resources/user_roles';

const role = 'doctor';

export const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const doctors = await getUsersByRole(role);

    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching doctors' });
  }
};

export const getDoctor = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const doctor = await getUserByIdAndRole(id, role);

    if (!doctor) res.status(404).json({ error: 'Doctor not found' });

    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching doctor' });
  }
};

export const createDoctor = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const doctor = await createNewUserByRole(name, email, role);

    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Error creating doctor' });
  }
};

export const updateDoctor = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    const doctor = await updateAUserByRole(name, email, id, role);
    if (!doctor) res.status(404).json({ error: 'Doctor not found' });

    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Error updating doctor' });
  }
};

export const deleteDoctor = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const doctor = await deleteAUserByRole(id, role);

    if (!doctor) res.status(404).json({ error: 'Doctor not found' });

    res.json({ message: 'Doctor deleted successfully', doctor });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting doctor' });
  }
};