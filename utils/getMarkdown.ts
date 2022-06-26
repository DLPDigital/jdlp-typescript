import matter from 'gray-matter';

// type FileProps = {
//   content: string
//   data: any
//   excerpt: string
//   filename: string
//   isEmpty: boolean
//   language: string
//   matter: string
// }

const getMarkdown = (filesToUse: any[]) => {
  const markdownContent = filesToUse.map((fileToUse) => {
    const { data, content } = matter(fileToUse)
    return {
      data: data,
      content: content,
    }
  })
  return markdownContent
}

export default getMarkdown
