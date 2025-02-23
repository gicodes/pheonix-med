import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express, { Express } from 'express';
import AdminRouter from './api/admin/_page';
import AuthRouter from './api/auth/login/page';
import NurseUserRouter from './api/nurses/_page';
import DoctorUserRouter from './api/doctors/_page';

dotenv.config();

const app: Express = express();

const allowedOrigins = ['http://localhost:3000', 'https://pheonixmeds.com.ng'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(bodyParser.json()) // replacing express.json() ?
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/api', AuthRouter)
app.use('/api', AdminRouter)
app.use('/api', NurseUserRouter)
app.use('/api', DoctorUserRouter)
// upload a document route
// phamacy route

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
