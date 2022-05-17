import { Router } from 'express';
import GoogleController from './googlePhotoController.js';

const router = Router();
router.post('/', GoogleController.getAlbum);

export default router;