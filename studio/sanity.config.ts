import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

export default defineConfig({
  name: 'default',
  title: 'testproject',

  projectId: '1nwn5mls',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        { id: 'en', title: 'English' },
        { id: 'cz', title: 'Čeština' }
      ],
      defaultLanguages: ['cz'],
      fieldTypes: ['string'],
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
