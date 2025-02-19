import pool from './pg_admin';

export const getUsersByRole = async (role: string) => {
  const { rows } = await pool.query(
    'SELECT * FROM users WHERE role = $1 ORDER BY id ASC',
    [role]
  );
  return rows;
};

export const getUserByIdAndRole = async (id: number, role: string) => {
  const { rows } = await pool.query(
    'SELECT * FROM users WHERE id = $1 AND role = $2',
    [id, role]
  );
  return rows[0] || null;
};

export const createNewUserByRole = async (name: string, email: string, role: string) => {
  const { rows } = await pool.query(
    'INSERT INTO users (name, email, role) VALUES ($1, $2, $3) RETURNING *',
    [name, email, role]
  );
  return rows[0];
};

export const updateAUserByRole = async (name: string, email: string, id: number, role: string) => {
  const { rows } = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 AND role = $4 RETURNING *',
    [name, email, id, role]
  );
  return rows[0] || null;
};

export const deleteAUserByRole = async (id: number, role: string) => {
  const { rows } = await pool.query(
    'DELETE FROM users WHERE id = $1 AND role = $2 RETURNING *',
    [id, role]
  );
  return rows[0] || null;
};
