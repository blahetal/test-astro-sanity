import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        defineField({
            name: "productName",
            type: "string",
            title: "Product name",
        }),
        defineField({
            title: 'Has the product been released?',
            name: 'released',
            type: 'boolean'
        }),
        defineField({
            title: 'Launch Scheduled At',
            name: 'launchAt',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today'
            }
        }),
        defineField({
            title: 'Poster',
            name: 'poster',
            type: 'image',
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                }
            ]
        }),
        defineField(
            {
                title: 'Rich text example',
                name: 'myRichTextExample',
                type: 'array',
                of: [{ type: 'block' }]
            }
        ),
        defineField({
            name: "tags",
            type: "array",
            title: "Tags for item",
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        { type: 'string', name: 'label' },
                        { type: 'string', name: 'value' },
                    ]
                })
            ]
        }),
    ],
})