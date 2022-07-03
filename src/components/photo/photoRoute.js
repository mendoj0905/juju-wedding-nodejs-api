import { Router } from 'express';
import multer from 'multer';

import PhotoController from './photoController.js';

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadLocation = `upload/photos/`
    cb(null, uploadLocation)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

// const uploader = multer({ dest: 'upload/' })
const uploader = multer({ storage })

router.get('/:wedding', PhotoController.getAll)
router.post('/upload/:wedding', uploader.single('photos'), PhotoController.uploadPhoto)
router.post('/upload/bulk/:wedding', uploader.array('photos'), PhotoController.uploadPhotosBulk)
router.patch('/', PhotoController.updatePhoto)

export default router;