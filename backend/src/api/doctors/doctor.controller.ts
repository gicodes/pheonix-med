import { Request, Response } from 'express';
import { 
  getUsersByRole, 
  getUserByIdAndRole, 
  createDoctorProfile, 
  updateDoctorProfile, 
  deleteUserByRole 
} from '../../models/CRUD/by_roles';
import { createNewUser } from '../../models/CRUD/superuser';

const role = 'doctor';

export const registerDoctor = async (req: Request, res: Response) => {
  try {
    const { 
      firstName, 
      lastName,
      password, 
      email, 
      dob, 
      doctorsLicense, 
      termsAccepted, 
    } = req.body;

    const name = firstName + " " + lastName;
    const fullName = firstName + ", " + lastName;

    const userProfile = {
      dob, 
      fullName,
      termsAccepted,
      doctorsLicense: doctorsLicense || null,
    }

    const user = await createNewUser(name, email, password, role);
    const doctor = await createDoctorProfile(user.id, userProfile);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Error creating doctor' });
  }
};

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

export const updateDoctor = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, email, userProfile, notifications } = req.body;

    const doctor = await updateDoctorProfile(id, name, email, userProfile, notifications);
    if (!doctor) res.status(404).json({ error: 'Doctor not found' });

    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Error updating doctor' });
  }
};

export const deleteDoctor = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const doctor = await deleteUserByRole(id, role);

    if (!doctor) res.status(404).json({ error: 'Doctor not found' });

    res.json({ message: 'Doctor deleted successfully', doctor });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting doctor' });
  }
};