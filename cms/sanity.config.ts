import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'conectadev-cms',

    projectId: 's2g38qvd',
    dataset: 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
