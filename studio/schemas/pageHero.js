export default {
    name: "pageHero",
    title: "Page Hero",
    type: "document",
    fields: [
        {
            name: "landingText",
            type: "string",
            title: "Landing text",
            validation: Rule => Rule.required().max(120),
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