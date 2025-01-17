import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Information',
  description: 'The contact information for the site',
  type: 'document',
  fields: [
    defineField({
      name: 'inuse',
      title: 'Default footer',
      description: 'To use this one ',
      type: 'boolean',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      description: 'Short description of the company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      description: 'Year for copyright',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'facebookUrl',
      title: 'FB Url',
      description: 'The URL for the facebook home page',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'InstagramUrl',
      title: 'Instagram Url',
      description: 'The URL for the instagram home page',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'githubUrl',
      title: 'Github Url',
      description: 'The URL for the github home page',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'twitterUrl',
      title: 'X-twitter Url',
      description: 'The URL for the X twitter home page',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'linkedInUrl',
      title: 'LinkedIn Url',
      description: 'The URL for the linkedin home page',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Url',
      description: 'The URL for the YouTube home page',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'ph1',
      title: 'Phone Number 1',
      description: 'First Phone number',
      type: 'number',
    }),
    defineField({
      name: 'ph2',
      title: 'Phone Number 2',
      description: 'Second Phone number',
      type: 'number',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      description: "Email for client's to contact",
      type: 'email',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      description: 'Address to show',
      type: 'text',
    }),
  ],
})
