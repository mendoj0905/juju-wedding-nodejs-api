import { Router } from 'express';
import { GuestController } from './guestController.js';
import AuthMiddleware from '../../middlewares/authMiddleware.js';

const router = Router();
const guestController = new GuestController();

router.get('/', AuthMiddleware.verifyToken, guestController.getAll);
router.post('/', guestController.add);
router.delete('/', guestController.remove)

export default router;