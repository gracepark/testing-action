#!/usr/bin/env node
import { program, Option } from 'commander'

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