export default {
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            validation: Rule => Rule.required(),
        },
        {
            name: "description",
            type: "richText",
            title: "Description",
            validation: Rule => Rule.required(),
        },
        {
            name: "email",
            type: "string",
            title: "Contact Email",
            validation: Rule => Rule.required(),
        }
    ]
}