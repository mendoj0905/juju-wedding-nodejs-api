import axios from 'axios';
import fs from 'fs/promises';
import FormData from 'form-data'

// const baseWeddingApiUrl = 'https://api.wedding.justinmendoza.net';
const baseWeddingApiUrl = 'http://localhost:4000';
const photoApi = '/api/photos';
const wedding = 'juju-wedding';
const photoDir = '../new_photos'

const uploadFile = async (imageFile, filename) => {
  const file = await fs.readFile(imageFile)
  console.log(file)

  let formData = new FormData();
  formData.append("photos", file, `${filename}`)

  const resp = await axios.post(`${baseWeddingApiUrl}${photoApi}/upload/${wedding}`, formData, {
    headers: {
      ...formData.getHeaders()
    }
  })
  console.log(resp.data)
}

const batchUpload = async () => {
  const files = await fs.readdir(photoDir)
  files.forEach(image => uploadFile(`${photoDir}/${image}`, image))
}

batchUpload()
