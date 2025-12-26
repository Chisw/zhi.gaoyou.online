import { algoliasearch } from 'algoliasearch'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import crypto from 'node:crypto'
import { config } from 'dotenv'
import { remark } from 'remark'
import html from 'remark-html'

config({ path: '.env.local' })

const {
  PUBLIC_ALGOLIA_APP_ID,
  PUBLIC_ALGOLIA_INDEX: indexName,
  ALGOLIA_ADMIN_KEY,
} = process.env

const client = algoliasearch(PUBLIC_ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY)

const getAllMarkdown = (dir) => {
  return fs.readdirSync(dir).flatMap(file => {
    const full = path.join(dir, file)
    if (fs.statSync(full).isDirectory()) {
      return getAllMarkdown(full)
    }
    return full.endsWith('.md') ? [full] : []
  })
}

const files = getAllMarkdown('src/pages')

const objects = []

for (const filePath of files) {
  const res = fs.readFileSync(filePath, 'utf-8')

  const {
    data: { title, date: description },
    content: markdownContent,
  } = matter(res)

  const htmlContent = await remark()
    .use(html)
    .process(markdownContent)

  const objectID = crypto
    .createHash('sha256')
    .update(filePath)
    .digest('hex')

  const url = filePath.replace('src/pages', '').replace('.md', '')
  const content = htmlContent.toString().slice(0, 3200)

  objects.push({
    objectID,
    url,
    title,
    description,
    content,
    hierarchy: {
      lvl0: title,
    },
  })
}

await client.clearObjects({ indexName })

await client.saveObjects({ indexName, objects })

console.log('Algolia indexed:', objects.length)
