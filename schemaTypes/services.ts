import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services We Provide',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceName',
      title: 'Service Name',
      description: 'The name of the service',
      type: 'string',
    }),
    defineField({
      name: 'serviceCategory',
      title: 'Service Category',
      description: 'What is the name of the service category',
      type: 'string',
    }),
    defineField({
      name: 'serviceDescription',
      title: 'Service Description',
      description: 'A brief description of the service',
      type: 'text',
    }),
    defineField({
      name: 'serviceImage',
      title: 'Service Image',
      description: 'An image that represents the service',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
