import dotenv from 'dotenv';
dotenv.config();  // This will load the variables from the .env file

const mongo_url = process.env.mongo_conn;

if (!mongo_url) {
  console.error("Mongo URI is undefined. Please check the .env file.");
  process.exit(1);  // Exit the process if mongo_url is undefined
}

import mongoose from "mongoose";

mongoose.connect(mongo_url)
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.log('Database connection error:', err);
  });

const db = {};
export default db;
