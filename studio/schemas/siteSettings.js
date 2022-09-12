export default {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Site Title",
            validation: Rule => Rule.required(),
        }
    ]
}