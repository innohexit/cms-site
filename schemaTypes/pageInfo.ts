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
    defineField({
      name: 'whoWeAre',
      title: 'Who We Are?',
      description: 'The description of who we are section',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(120).warning('The description should not cross 120 characters'),
    }),
    defineField({
      name: 'whatWeDoSelected',
      title: 'What We Do?',
      description: 'Select 4 2hat we do.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'whatWeDo',
          },
        },
      ],
      validation: (Rule) => Rule.min(4).max(4).warning("You'll have to select 4 of these"),
    }),
  ],
})
