import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Information',
  description: 'The contact information for the site',
  type: 'document',
  fields: [
    defineField({
      name: 'typeOfContact',
      title: 'Type of Contact',
      description: 'The type of contact information',
      type: 'string',
      options: {
        list: [
          {title: 'Email', value: 'email'},
          {title: 'Phone', value: 'phone'},
          {title: 'Address', value: 'address'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'Pinterest', value: 'pinterest'},
          {title: 'TikTok', value: 'tiktok'},
          {title: 'Snapchat', value: 'snapchat'},
          {title: 'WhatsApp', value: 'whatsapp'},
          {title: 'Telegram', value: 'telegram'},
          {title: 'Signal', value: 'signal'},
          {title: 'Discord', value: 'discord'},
          {title: 'Slack', value: 'slack'},
          {title: 'Messenger', value: 'messenger'},
          {title: 'Skype', value: 'skype'},
          {title: 'Zoom', value: 'zoom'},
          {title: 'Google Meet', value: 'googleMeet'},
          {title: 'Microsoft Teams', value: 'microsoftTeams'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'contactInformation',
      title: 'Contact Information',
      description: 'The contact information',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      description: 'The URL for the contact information',
      type: 'url',
      hidden: ({parent}) => {
        const onlinePlatforms = [
          'facebook',
          'twitter',
          'instagram',
          'linkedin',
          'youtube',
          'pinterest',
          'tiktok',
          'snapchat',
          'whatsapp',
          'telegram',
          'signal',
          'discord',
          'slack',
          'messenger',
          'skype',
          'zoom',
          'googleMeet',
          'microsoftTeams',
        ]
        return !onlinePlatforms.includes(parent?.typeOfContact)
      },
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
  ],
})
