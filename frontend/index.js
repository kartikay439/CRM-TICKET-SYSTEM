import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './backend/models/db.js';
import cors from 'cors';
import AuthRouter from './backend/routes/AuthRouter.js';
const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
// take request from anyone
app.use('/auth',AuthRouter);

