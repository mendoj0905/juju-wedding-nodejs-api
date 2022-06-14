import { Router } from 'express';
import GuestController from './guestController.js';
import AuthMiddleware from '../../middlewares/authMiddleware.js';

const router = Router();

router.get('/all', AuthMiddleware.verifyToken, GuestController.getAll);
router.post('/', GuestController.add);
router.delete('/', GuestController.remove);
router.post('/search', GuestController.searchRsvp);
router.patch('/rsvp', GuestController.updateRsvp);
router.patch('/name', GuestController.updateRsvp);
router.post('/v2/search', GuestController.searchGuest);

export default router;