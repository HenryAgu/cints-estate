import {defineField, defineType} from 'sanity'

export const houseType = defineType({
  name: 'house',
  title: 'House Type',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
  ],
})
