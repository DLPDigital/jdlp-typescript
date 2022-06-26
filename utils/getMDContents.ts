import { promises as fs } from 'fs'
import path from 'path'

const getMDContents = async (folderName: string) => {
  const fileToGetPath = path.join(process.cwd(), `data/${folderName}`)
  const filenames = await fs.readdir(fileToGetPath)
  const fileContents = filenames.map(async (filename) => {
    const filePath = path.join(fileToGetPath, filename)
    const fileContent = await fs.readFile(filePath, 'utf8')
    return {
      filename,
      content: fileContent,
    }
  })

  const result = await Promise.all(fileContents)

  return result
}

export default getMDContents