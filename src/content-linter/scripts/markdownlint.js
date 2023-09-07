#!/usr/bin/env node
import { program } from 'commander'
import { extname } from 'path'

program
  .description('Run GitHub Docs Markdownlint rules.')
  .option(
    '-p, --paths [paths...]',
    'Specify filepaths to include. Default: changed and staged files',
  )
  .parse(process.argv)

const {  paths,  summaryByRule } = program.opts()
const ALL_CONTENT_DIR = ['content', 'data']

main()

async function main() {
  // If paths has not been specified, lint all files
  const files = getFilesToLint((summaryByRule && ALL_CONTENT_DIR) || paths || getChangedFiles())
  console.log(files)
}

function getFilesToLint(paths) {
  const fileList = {
    length: 0,
    content: [],
    data: [],
  }

  for (const path of paths) {
    const extension = extname(path)
    const isMdFile = extension === '.md'
    const isDirectory = extension === ''
    if (!isMdFile && !isDirectory) continue

    if (isMdFile) {
      // Add each file to the relevant fileList group
      path.startsWith('data') ? fileList.data.push(path) : fileList.content.push(path)
    }
  }
  // Add a total fileList length property
  fileList.length = fileList.content.length + fileList.data.length

  return fileList
}