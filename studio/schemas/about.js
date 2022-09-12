export default {
    name: "about",
    title: "About",
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
            name: "picture",
            type: "image",
            title: "Picture",
            description: "The optimal file size for images on a website is no more than 200 KB",
            validation: Rule => Rule.required(),
        }
    ]
}