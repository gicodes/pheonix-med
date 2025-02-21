import { Request, Response } from 'express';
import { 
  getUsersByRole, 
  getUserByIdAndRole, 
  createNurseProfile, 
  updateNursesProfile,
  deleteUserByRole 
} from '../../models/CRUD/by_roles';
import { createNewUser } from '../../models/CRUD/superuser';

const role = 'nurse';

export const registerNurse = async (req: Request, res: Response) => {
  try {    
    const { 
      firstName,
      lastName,
      password,
      email, 
      dob, 
      nursesLicense, 
      termsAccepted, 
    } = req.body;
  
    const name = firstName + " " + lastName;  
    const fullName = firstName + ", " + lastName; 
    const userProfile = { // create user profile: Nurse specific
      dob, 
      fullName,
      termsAccepted,
      nursesLicense: nursesLicense || null,
    }
    
    const user = await createNewUser(name, email, password, role);
    const nurse = await createNurseProfile(user.id, userProfile);
    console.log(nurse);
    res.status(201).json(nurse);
  } catch (error) {
    res.status(500).json({ error: 'Error creating nurse' });
  }
};

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

export const updateNurse = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, email, userProfile, review, location } = req.body;
    
    const nurse = await updateNursesProfile(id, name, email, userProfile, review, location);
    if (!nurse) res.status(404).json({ error: 'Nurse not found' });

    res.json(nurse);
  } catch (error) {
    res.status(500).json({ error: 'Error updating nurse' });
  }
};

export const deleteNurse = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const nurse = await deleteUserByRole(id, role);

    if (!nurse) res.status(404).json({ error: 'Nurse not found' });

    res.json({ message: 'Nurse deleted successfully', nurse });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting nurse' });
  }
};