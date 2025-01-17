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
      name: 'projectId',
      title: 'Project ID',
      description: 'The unique ID of a Project',
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
      name: 'projectImage',
      title: 'Project Image',
      description: 'Banner for that Project',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectStatus',
      title: 'Project Status',
      description: 'The status of the Project',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Completed', value: 'completed'},
        ],
      },
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
    defineField({
      name: 'projectPrice',
      title: 'Project Price',
      description: 'The price of the Project',
      type: 'string',
    }),
    defineField({
      name: 'projectCrossedPrice',
      title: 'Project Crossed Price',
      description: 'The crossed price of the Project',
      type: 'string',
    }),
    defineField({
      name: 'ProjectInquiryLink',
      title: "Project's Inquiry Link",
      description: "Project's Inquiry Form Link",
      type: 'url',
    }),
  ],
})
