import axios from "axios";

const regex = /"(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g
function extractPhotos(content) {
  const links = []
  let match
  while (match = regex.exec(content)) {
    links.push(match[1])
  } 
  return links
}
export default class GoogleService {

  static async getAlbum(id) {
    const resp = await axios.get(`https://photos.app.goo.gl/${id}`)
    return extractPhotos(resp.data);
  } 

}