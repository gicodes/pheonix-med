import * as dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pgDb = process.env.pg_db;
const pgHost = process.env.pg_host;
const pgPort = process.env.pg_port as unknown as number;
const pgPass = process.env.pg_user_pass;
const pgUser = process.env.pg_user;

const pool = new Pool({
  user: pgUser,
  host: pgHost,
  database: pgDb,
  password: pgPass,
  port: pgPort,
})

pool.connect()
  .then(()=> console.log("Connected to PostgresSQL ✅ "))
  .catch((err: any) => console.log('Connection Error ❌ ', err));

export default pool;
