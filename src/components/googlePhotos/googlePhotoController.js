import GoogleService from "./googlePhotoService.js";

export default class GoogleController {

  static async getAlbum(req, res) {
    const { id } = req.body;
    if(id) {
      const photos = await GoogleService.getAlbum(id);
      res.json({ photos });
    } else {
      res.json({ error: "Uh oh! Something went wrong!"})
    }
    
  }
}