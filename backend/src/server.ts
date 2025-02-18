import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express, { Express } from 'express';

dotenv.config();

// Import routes

const app: Express = express();

app.get('/', (request, response) => {
  response.json({ info: 'Pheonix Meds-- Node.js, Express, and Postgres API' })
})

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

// Use routes

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
