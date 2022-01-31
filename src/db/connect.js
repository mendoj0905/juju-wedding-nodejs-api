import mongoose from 'mongoose';
import { config } from 'dotenv';

import PasswordUtil from '../util/PasswordUtil.js';
config();

export default async function connectToDb() {
  try {
    const username = process.env.DB_USERNAME;
    const password = PasswordUtil.encodePassword(process.env.DB_PASSWORD)
    const mongo_url = process.env.DB_URL;
    
    const uri = `mongodb+srv://${username}:${password}@${mongo_url}/juju-wedding?retryWrites=true&w=majority`;

    await mongoose.connect(uri);
    console.log("Connected to db.")
  } catch (e) {
    console.error(e);
  }
}