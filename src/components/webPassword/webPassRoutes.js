import { Router } from 'express';
import WebPassController from './webPassController.js';

const router = Router();
router.post('/', WebPassController.verifyPassword);

export default router; 