import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'courses',
  title: 'Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'courseName',
      title: 'Course Name',
      description: 'The name of the course',
      type: 'string',
    }),
    defineField({
      name: 'courseId',
      title: 'Course ID',
      description: 'The unique ID of a course',
      type: 'string',
    }),
    defineField({
      name: 'courseDescription',
      title: 'Course Description',
      description: 'The description of the course',
      type: 'string',
      validation: (Rule) =>
        Rule.max(400).warning('The description should not cross 200 characters'),
    }),
    defineField({
      name: 'courseLargeDesciription',
      title: 'Course Large Description',
      description: 'The large description of the course with markdown',
      type: 'markdown',
    }),
    defineField({
      name: 'courseImage',
      title: 'Course Image',
      description: 'Banner for that course',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'courseDuration',
      title: 'Course Duration',
      description: 'The duration of the course (in weeks)',
      type: 'string',
    }),
    defineField({
      name: 'courseStatus',
      title: 'Course Status',
      description: 'The status of the course',
      type: 'string',
      options: {
        list: [
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Completed', value: 'completed'},
        ],
      },
    }),
    defineField({
      name: 'courseStart',
      title: 'Course Start',
      description: 'The start date of the course',
      type: 'date',
    }),
    defineField({
      name: 'courseEnd',
      title: 'Course End',
      description: 'The end date of the course',
      type: 'date',
    }),
    defineField({
      name: 'courseStack',
      title: 'Coruse Stack',
      description: 'The tags of the course',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'demoVideoLink',
      title: 'Demo Video Link',
      description: 'The demo video link of this course',
      type: 'url',
    }),
    defineField({
      name: 'coursePrice',
      title: 'Course Price',
      description: 'The price of the course',
      type: 'string',
    }),
    defineField({
      name: 'courseCrossedPrice',
      title: 'Course Crossed Price',
      description: 'The crossed price of the course',
      type: 'string',
    }),
    defineField({
      name: 'courseFormLink',
      title: "Course's Enrollment  Link",
      description: "Course's Enrollment Form Link",
      type: 'url',
    }),
  ],
})
