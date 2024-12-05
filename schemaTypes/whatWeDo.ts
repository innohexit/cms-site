import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'whatWeDo',
  title: 'What We Do?',
  description: '4 list of what we do section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      description: 'The title of what we do section',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(40).warning('The heading should not cross 50 characters'),
    }),
    defineField({
      name: 'pt1',
      title: 'Point 1 Title',
      description: 'The title of what we do section',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(30).warning('The title should not cross 30 characters'),
    }),
    defineField({
      name: 'pt1Desc',
      title: 'Point 1 Description',
      description: 'The description of what we do section',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(60).warning('The description should not cross 60 characters'),
    }),
    defineField({
      name: 'pt2',
      title: 'Point 2 Title',
      description: 'The title of what we do section',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(30).warning('The title should not cross 30 characters'),
    }),
    defineField({
      name: 'pt2Desc',
      title: 'Point 2 Description',
      description: 'The description of what we do section',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(60).warning('The description should not cross 60 characters'),
    }),
    defineField({
      name: 'pt3',
      title: 'Point 3',
      description: 'The title of what we do section',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(30).warning('The title should not cross 30 characters'),
    }),
    defineField({
      name: 'pt3Desc',
      title: 'Point 3 Description',
      description: 'The description of what we do section',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(60).warning('The description should not cross 60 characters'),
    }),
  ],
})
