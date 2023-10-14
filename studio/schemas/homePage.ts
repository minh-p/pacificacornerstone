import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page (Only 1)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'string',
    }),
    defineField({
      name: 'heroMeetingLocation',
      title: 'Hero Meeting Location',
      type: 'string',
    }),
    defineField({
      name: 'clubActivitiesVideoLink',
      title: "Club Activities Video Link",
      type: 'url',
    }),
    defineField({
      name: 'clubActivitiesBody',
      title: 'Club Activities',
      type: 'blockContent'
    })
  ]
})
