import fs from 'fs';
import path from 'path'

// const ogDir = '../original_photos'
const ogDir = '../../../../Downloads/weddingPics'
const moveDir = '../new_photos'


const getSortedFiles = async (dir) => {
  const files = await fs.promises.readdir(dir)

  return files.map(fileName => ({
    name: fileName,
    createDate: fs.statSync(`${dir}/${fileName}`).birthtime.getTime(),
  }))
  .sort((a,b) => a.createDate - b.createDate)
  .map(file => file.name)
}

const renameFiles = async () => {
  const sortedFiles = await getSortedFiles(ogDir)
  sortedFiles.forEach((fileName, index) => {
    const srcFile = `${ogDir}/${fileName}`
    const ext = path.extname(fileName)
    let pos = 0
    if (index > 99) {
      pos = index
    } else if (index <= 99 && index >= 10) {
      pos = `0${index}`
    } else {
      pos = `00${index}`
    }
    console.log(`${pos}-photo${ext}`)
    const newFileName = `${pos}-photo${ext}`
    fs.copyFileSync(srcFile, `${moveDir}/${newFileName}`)
  })
}

renameFiles()

