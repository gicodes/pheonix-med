import User from '../user.model';
import Nurse from '../nurse.model';
import Doctor from '../doctor.model';
import { Transaction } from 'sequelize';
import pool from '../resources/sql_admin';

interface DoctorProfile {
  name: string,
  dob: string | Date;
  termsAccepted: boolean;
  doctorsLicense?: string;
}
interface Notifications {}

interface NurseProfile {
  name: string;
  dob: Date | string;
  termsAccepted: boolean;
  license?: string;
}
interface Reviews {}

export const getUsersByRole = async (role: string) => {
  const users = await User.findAll({ where: { role }, order: [['id', 'ASC']] });
  return users;
};

export const getUserByIdAndRole = async (id: number, role: string) => {
  const user = await User.findOne({ where: { id, role } });
  return user;
};

export const createDoctorProfile = async (
  user_id: number,
  user_profile: object
) => {
  try {
    const notifications: object = {};
    const doctorProfile = await Doctor.create({
      user_id,
      user_profile,
      notifications,
    });
    return doctorProfile;
  } catch (err: any) {
    console.error("Error registering doctor:", err);
    throw err;
  }
};

export const createNurseProfile = async (
  userId: number,
  userProfile: object
) => {
  try {
    const reviews: object = {};
    const location: string = "";
    const nurseProfile = await Nurse.create({
      user_id: userId,
      user_profile: userProfile,
      reviews,
      location,
    });
    return nurseProfile;
  } catch (err: any) {
    console.error("Error registering nurse:", err);
    throw err;
  }
};

export const updateDoctorProfile = async (
  id: number, 
  name: string,
  email: string,
  userProfile: DoctorProfile, 
  notifications: Notifications
) => {
  const transaction: Transaction = await pool.transaction();
  try {
    const user = await User.findOne({ where: { id, role: 'doctor' }, transaction });
    if (!user) throw new Error('User not found');

    user.name = name;
    user.email = email;
    await user.save({ transaction });

    const doctorProfile = await Doctor.findOne({ where: { user_id: id }, transaction });
    if (!doctorProfile) throw new Error('Doctor profile not found');

    doctorProfile.user_profile = userProfile;
    doctorProfile.notifications = notifications;
    await doctorProfile.save({ transaction });

    await transaction.commit();

    return {
      user,
      doctorProfile,
    };
  } catch (error) {
    await transaction.rollback();
    console.error('Error updating doctor:', error);
    throw error;
  }
};

export const updateNursesProfile = async (
  id: number, 
  name: string,
  email: string,
  userProfile: NurseProfile, 
  reviews: Reviews,     
  location: string
) => {
  const transaction: Transaction = await pool.transaction();
  try {
    const user = await User.findOne({ where: { id, role: 'nurse' }, transaction });
    if (!user) throw new Error('User not found');

    user.name = name;
    user.email = email;
    await user.save({ transaction });

    const nurseProfile = await Nurse.findOne({ where: { user_id: id }, transaction });
    if (!nurseProfile) throw new Error('Nurse profile not found');

    nurseProfile.user_profile = userProfile;
    nurseProfile.reviews = reviews;
    nurseProfile.location = location;
    await nurseProfile.save({ transaction });

    await transaction.commit();

    return {
      user,
      nurseProfile,
    };
  } catch (error) {
    await transaction.rollback();
    console.error('Error updating nurse:', error);
    throw error;
  }
};

export const deleteUserByRole = async (id: number, role: string) => {
  const user = await User.findOne({ where: { id, role } });
  if (!user) return null;
  await user.destroy();
  return user;
};