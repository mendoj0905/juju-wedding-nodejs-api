import fs from 'fs';
import path from 'path'

const ogDir = '../original_photos'
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
    console.log(fileName, `${index+10}-photo${ext}`)
    const newFileName = `${index+10}-photo${ext}`
    fs.copyFileSync(srcFile, `${moveDir}/${newFileName}`)
  })
}

renameFiles()

