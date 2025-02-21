import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const pgHost = process.env.pg_host;
const pgDb = process.env.pg_db as string;
const pgUser = process.env.pg_user as string;
const pgPort = Number(process.env.pg_port) || 5431;
const pgPass = process.env.pg_user_pass as string;

const pool = new Sequelize(`postgres://${pgUser}:${pgPass}@${pgHost}:${pgPort}/${pgDb}`, {
  logging: false,
});

async function initializeDatabase() {
  try {
    await pool.authenticate();
    console.log('Connected to PostgreSQL ✅');
    await pool.sync({ alter: true }); 
    console.log('Database & tables Sync ␖');
  } catch (error) {
    console.error('Database initialization failed ❌:', error);
    process.exit(1);
  }
}

initializeDatabase();

export default pool;