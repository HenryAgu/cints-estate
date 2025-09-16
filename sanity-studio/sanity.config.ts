import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'cints estate',

  projectId: '1n1l1uph',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema.types,
  },
  vite: {
    css: {
      postcss: './postcss.config.js',
    },
  },
})
