import axios from 'axios'

console.log('test')

const regex = /"(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g
function extractPhotos(content) {
  // console.log(content)
  const links = []
  let match
  while (match = regex.exec(content)) {
    links.push(match[1])
  } 
  return links
}

async function getAlbum() {
  const resp = await axios.get(`https://photos.app.goo.gl/1uxac6JSbtV3dMMaA`)
  return extractPhotos(resp.data);
}

async function test() {
  const photos = await getAlbum()
  console.log(photos)
} 

test()