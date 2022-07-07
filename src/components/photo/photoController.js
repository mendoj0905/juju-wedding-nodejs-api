import photoDAL from "./photoDAL.js";
export default class PhotoController {

  static async getAll(req, res) {
    const wedding = req.params.wedding
    try {
      console.log(`Getting photos for ${wedding}`) 
      const photos = await photoDAL.getAll(wedding)
      res.json(photos)
    } catch(e) {
      res.json({ error: "Uh oh! Something went wrong!"})
    }
  }

  static async uploadPhoto(req, res, next) {

    const srcUrl = req.protocol + '://' + req.get('host') + '/photos/';
    const file = req.file

    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }

    const { originalname } = file
    const src = srcUrl + originalname
    const photo = await photoDAL.add({ filename: originalname, wedding: req.params.wedding, src })

    res.json(photo)
  }

  static async uploadPhotosBulk(req, res) {
    console.log(req.files)
    res.send("test")
  }

  static async updatePhoto(req, res) {
    const photo = await photoDAL.update(req.body)
    res.json(photo)
  }
}