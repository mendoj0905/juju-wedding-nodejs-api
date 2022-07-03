import Photo from "./photoModel.js";

export default class PhotoDAL {
  
  static async getAll(wedding) {
    try {
      return await Photo.find({ wedding }).sort({ 'filename': 1 })
    } catch (e) {
      console.error(e)
    }
  }

  static async add(photo) {
    try {
      const { filename } = photo
      const photoExist = await Photo.findOne({ filename })
      if(photoExist) {
        const errMessage = `Photo filename already exist - ${filename}`
        throw new Error(errMessage)
      }

      return await Photo.create(photo)
    } catch (e) {
      console.error(e)
    }
  }

  static async update(photo) {
    try {
      console.log(photo)
      const { filename } = photo
      const photoExist = await Photo.findOne({ filename })
      if(photoExist) {
        await Photo.findOneAndUpdate({ filename }, photo)
        return await Photo.findOne({ filename })
      }
    } catch (e) {
      console.error(e)
    }
  }
}