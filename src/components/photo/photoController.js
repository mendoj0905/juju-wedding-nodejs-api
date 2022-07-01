import photoDAL from "./photoDAL";

export default class PhotoController {

  static async getAll(req, res) {
    const { wedding } = req.body
    try {
      console.log(`Getting photos for ${wedding}`) 
      const photos = await photoDAL.getAll(wedding)
      res.json(photos)
    } catch(e) {
      res.json({ error: "Uh oh! Something went wrong!"})
    }
  }
}