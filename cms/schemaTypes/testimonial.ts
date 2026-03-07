import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'role',
            title: 'Role/Position',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule) => Rule.required().min(1).max(5),
        }),
        defineField({
            name: 'image',
            title: 'Author Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
