import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'whoWeArePoints',
  title: 'Who We Are Points',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Highlight',
      description: 'The highlight part of the point',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'The description of the point',
      type: 'text',
    }),
  ],
})
