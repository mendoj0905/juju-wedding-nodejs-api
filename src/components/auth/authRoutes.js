import { Router } from 'express';
import AuthController from './authController.js';

const router = Router();

router.post('/token', AuthController.token);
router.post('/user/create', AuthController.createUser)

export default router; 