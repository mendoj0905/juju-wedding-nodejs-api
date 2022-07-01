import express from 'express'
import BodyParser from 'body-parser';
import cors from 'cors';
import connectToDb from './db/connect.js';

import AuthRoutes from './components/auth/authRoutes.js';
import WebPasswordRoutes from './components/webPassword/webPassRoutes.js';
import GuestRoute from './components/guests/guestRoute.js';

connectToDb()

const app = express();

app.use(cors())
app.use(BodyParser.json());

app.use('/photos', express.static('./photos'))

app.use('/api/auth', AuthRoutes);
app.use('/api/password', WebPasswordRoutes);
app.use('/api/guests', GuestRoute);

export default app;