import bcrypt from 'bcrypt';
import User from '../user.model';

const saltRounds = 10;

export const getUsers = async () => {
  const users = await User.findAll({ order: [['id', 'ASC']] });
  return users;
};

export const getUserById = async (id: number) => {
  const user = await User.findByPk(id);
  return user; 
};

export const createNewUser = async (
  name: string,
  email: string,
  password: string,
  role: string
): Promise<User> => {
  try {
    const hashed_password = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ name, email, hashed_password, role });

    return user;
  } catch (err: any) {
    console.error('Error creating new user:', err);
    throw err;
  }
};

export const loginWithEmailAndPassword = async (
  email: string,
  plainTextPassword: string
): Promise<User> => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('User not found');
  
  const isValidPassword = await bcrypt.compare(
    plainTextPassword,
    user.hashed_password
  );

  if (!isValidPassword) throw new Error('Invalid password');
  return user;
};

export const updateAUser = async (
  name: string,
  email: string,
  id: number,
  role: string
): Promise<User | null> => {
  console.log("Got here")
  const user = await User.findByPk(id);
  if (!user) return null;

  user.name = name;
  user.email = email;
  user.role = role;

  await user.save();
  return user;
};

export const deleteAUser = async (id: number): Promise<User | null> => {
  const user = await User.findByPk(id);
  if (!user) return null;
  
  await user.destroy();
  return user;
};
