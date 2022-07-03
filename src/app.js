import express from 'express'
import BodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import connectToDb from './db/connect.js';

import AuthRoutes from './components/auth/authRoutes.js';
import WebPasswordRoutes from './components/webPassword/webPassRoutes.js';
import GuestRoute from './components/guests/guestRoute.js';
import PhotoRoute from './components/photo/photoRoute.js';

connectToDb()

// TODO: Refactor code to separate file
const uploadLocation = `upload/photos/`
const folders = uploadLocation.split('/')
let currentDir = ''
folders.forEach(folder => {
  currentDir += folder + '/'
  if (currentDir && !fs.existsSync(currentDir)) {
    fs.mkdirSync(currentDir)
  } 
})

const app = express();

app.use(cors())
app.use(BodyParser.json());

app.use('/photos', express.static('./upload/photos'))
// app.use('/upload/photos', express.static('./upload/photos'))

app.use('/api/auth', AuthRoutes);
app.use('/api/password', WebPasswordRoutes);
app.use('/api/guests', GuestRoute);
app.use('/api/photos', PhotoRoute);

export default app;