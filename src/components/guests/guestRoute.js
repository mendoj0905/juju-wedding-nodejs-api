import { Router } from 'express';
import GuestController from './guestController.js';
import AuthMiddleware from '../../middlewares/authMiddleware.js';

const router = Router();

router.get('/', AuthMiddleware.verifyToken, GuestController.getAll);
router.post('/', GuestController.add);
router.delete('/', GuestController.remove)

export default router;