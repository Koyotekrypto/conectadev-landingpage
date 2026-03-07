import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
        }),
        defineField({
            name: 'icon',
            title: 'Icon (lucide-react name)',
            type: 'string',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
})
