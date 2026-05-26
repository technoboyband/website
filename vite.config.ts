import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Parser from 'rss-parser'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-netlify-functions',
      configureServer(server) {
        server.middlewares.use('/server/blogPosts', async (_req, res) => {
          try {
            const parser = new Parser()
            const feed = await parser.parseURL('https://techno.bearblog.dev/feed/?type=rss')
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(feed.items))
          } catch (e) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Failed to fetch blog posts' }))
          }
        })
      },
    },
  ],
})
