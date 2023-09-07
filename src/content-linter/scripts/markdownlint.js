#!/usr/bin/env node
import { program, Option } from 'commander'
import markdownlint from 'markdownlint'
import { applyFixes } from 'markdownlint-rule-helpers'
import { readFile, writeFile } from 'fs/promises'
import ora from 'ora'
import { extname } from 'path'
import { execSync } from 'child_process'

import walkFiles from '../../../script/helpers/walk-files.js'
import { allConfig, allRules, customRules } from '../lib/helpers/get-rules.js'

program
  .description('Run GitHub Docs Markdownlint rules.')
  .option(
    '-p, --paths [paths...]',
    'Specify filepaths to include. Default: changed and staged files',
  )
  .addOption(
    new Option(
      '--errors-only',
      'Only report rules that have the severity of error, not warning.',
    ).conflicts('rules'),
  )
  .option('--fix', 'Automatically fix errors that can be fixed.')
  .addOption(
    new Option(
      '--summary-by-rule',
      'Summarize the number of errors for each rule, leaving out error details.',
    ).conflicts(['error', 'paths', 'rules', 'fix']),
  )
  .option('--verbose', 'Output additional error detail.')
  .addOption(
    new Option(
      '-r, --rules [rules...]',
      `Specify rules to run. For example, by short name MD001 or long name heading-increment \n${listRules()}\n\n`,
    ).conflicts('error'),
  )
  .parse(process.argv)

const { fix, paths, errorsOnly, rules, summaryByRule, verbose } = program.opts()
const ALL_CONTENT_DIR = ['content', 'data']

main()

async function main() {
  // If paths has not been specified, lint all files
  const files = getFilesToLint((summaryByRule && ALL_CONTENT_DIR) || paths || getChangedFiles())
  console.log(files)
}