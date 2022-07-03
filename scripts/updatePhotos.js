import axios from 'axios';
import fs from 'fs';
import csv from 'fast-csv';

// const baseWeddingApiUrl = 'https://api.wedding.justinmendoza.net';
const baseWeddingApiUrl = 'http://localhost:4000';
const photoApi = '/api/photos';
const wedding = 'juju-wedding';
const photoDir = '../photos'
const defaultHeight = 4

fs.createReadStream('photoList.csv')
  .pipe(csv.parse())
  .on('error', e => console.log(e))
  .on('data', async (row) => {
    
    let photo = {
      filename: row[0],
      width: row[1],
      height: defaultHeight,
      subheader: row[2]
    }
    console.log(photo)
    // console.log(fs.statSync(`${photoDir}/${photo.filename}`))

    const response = await axios.patch(`${baseWeddingApiUrl}${photoApi}`, photo)
    console.log(response.data)

  })

