import { Router } from 'express';
import { PasswordController } from '../controllers/PasswordController.js';

const router = Router();
const passwordController = new PasswordController();

router.post('/', passwordController.verifyPassword);

export default router; 