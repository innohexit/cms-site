import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'The main heading for the page',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      description: 'The sub heading for the page',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      description: 'The image that appears at the top of the page',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
