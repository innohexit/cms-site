import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      description: 'The name of the Project',
      type: 'string',
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      description: 'The description of the Project',
      type: 'string',
      validation: (Rule) =>
        Rule.max(400).warning('The description should not cross 200 characters'),
    }),
    defineField({
      name: 'projectLargeDesciription',
      title: 'Project Large Description',
      description: 'The large description of the Project with markdown',
      type: 'markdown',
    }),
    defineField({
      name: 'projectImages',
      title: 'Project Images',
      description: 'Images/Shots of that Project',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'projectStack',
      title: 'Coruse Stack',
      description: 'The tags of the Project',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'demoVideoLink',
      title: 'Demo Video Link',
      description: 'The demo video link of this Project',
      type: 'url',
    }),
  ],
})
