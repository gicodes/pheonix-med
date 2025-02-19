import pool from './pg_admin';

export const getUsers = async () => {
  const { rows } = await pool.query(
    'SELECT * FROM users ORDER BY id ASC');
  return rows;
};

export const getUserById = async (id: number) => {
  const { rows } = await pool.query(
    'SELECT * FROM users WHERE id = $1', [id]);
  return rows[0] || null;
};

export const createNewUser = async (name: string, email: string, role: string) => {
  const { rows } = await pool.query(
    'INSERT INTO users (name, email, role) VALUES ($1, $2, $3) RETURNING *',
    [name, email, role]
  );
  return rows[0];
};

export const updateAUser = async (name: string, email: string, id: number) => {
  const { rows } = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id]
  );
  return rows[0] || null;
};

export const deleteAUser = async (id: number) => {
  const { rows } = await pool.query(
    'DELETE FROM users WHERE id = $1 RETURNING *', [id]);
  return rows[0] || null; 
};
