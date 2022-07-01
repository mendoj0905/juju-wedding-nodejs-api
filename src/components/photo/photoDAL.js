import Photo from "./photoModel";

export default class PhotoDAL {
  
  static async getAll(wedding) {
    try {
      return await Photo.find({ wedding })
    } catch (e) {
      console.error(e)
    }
  }

  static async addPhoto(photo) {
    try {
      const { fileName } = photo
      const photoExist = await Photo.find({ fileName })
      if(photoExist) {
        const errMessage = `Photo filename already exist - ${fileName}`
        throw new Error(errMessage)
      }

      return await Photo.create(photo)
    } catch (e) {
      console.error(e)
    }
  }
}