import { defineField, defineType } from 'sanity'

/** Posts agregados pelo pipeline automático (notícias de software/tecnologia) ou editoriais manuais */
export const blogPostType = defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Resumo / Description',
            type: 'text',
        }),
        defineField({
            name: 'content',
            title: 'Conteúdo (opcional; agregados podem deixar vazio e usar sourceUrl)',
            type: 'text',
        }),
        defineField({
            name: 'date',
            title: 'Data de publicação',
            type: 'datetime',
        }),
        defineField({
            name: 'category',
            title: 'Categoria',
            type: 'string',
            options: {
                list: [
                    { title: 'Inovação', value: 'Inovação' },
                    { title: 'Engenharia de Software', value: 'Engenharia de Software' },
                    { title: 'Tendências', value: 'Tendências' },
                    { title: 'IA & Machine Learning', value: 'IA & Machine Learning' },
                    { title: 'Negócios & Tech', value: 'Negócios & Tech' },
                    { title: 'Outro', value: 'Outro' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Imagem de capa',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'author',
            title: 'Autor (ou fonte)',
            type: 'string',
        }),
        defineField({
            name: 'sourceUrl',
            title: 'URL da fonte (notícia original)',
            type: 'url',
            description: 'Para posts agregados: link para ler a notícia completa.',
        }),
        defineField({
            name: 'sourceName',
            title: 'Nome da fonte (ex.: TechCrunch, HN)',
            type: 'string',
        }),
        defineField({
            name: 'isAggregated',
            title: 'Post agregado (pipeline automático)',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    orderings: [
        { title: 'Data (mais recente)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
        { title: 'Data (mais antiga)', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] },
    ],
})
