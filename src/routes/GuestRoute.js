import { Router } from 'express';
import { GuestController } from '../controllers/GuestController.js';

const router = Router();
const guestController = new GuestController();

router.get('/', guestController.getAll);
router.post('/', guestController.add);
router.delete('/', guestController.remove)

export default router;