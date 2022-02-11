import { Router } from 'express';
import WebPassController from './webPassController.js';

const router = Router();
router.post('/', WebPassController.verifyPassword);
router.post('/create', WebPassController.createPassword);

export default router; 