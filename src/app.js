import express from 'express'
import BodyParser from 'body-parser';
import connectToDb from './db/connect.js';

import AuthRoutes from './components/auth/authRoutes.js';
import PasswordRoutes from './components/otherFeature/PasswordRoutes.js';
import GuestRoute from './components/guests/guestRoute.js';

connectToDb()

const app = express();

app.use(BodyParser.json());

app.use('/api/auth', AuthRoutes);
app.use('/api/password', PasswordRoutes);
app.use('/api/guests', GuestRoute);

export default app;