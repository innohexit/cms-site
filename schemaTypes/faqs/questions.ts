import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'General Inquiries', value: 'general'},
          {title: 'Internships & Training', value: 'internships'},
          {title: 'Courses & Certifications', value: 'courses'},
          {title: 'Project Development', value: 'projects'},
          {title: 'IT Services', value: 'it_services'},
          {title: 'Support & Assistance', value: 'support'},
          {title: 'Pricing & Payments', value: 'pricing'},
          {title: 'Privacy & Security', value: 'privacy'},
          {title: 'Career & Jobs', value: 'career'},
        ],
      },
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
            }),
          ],
        },
      ],
    }),
  ],
})
