export default {
    name: "slideshow",
    type: "document",
    title: "Slideshow pictures",
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
        },
        {
            name: "image",
            type: "image",
            title: "Image",
            description: "The optimal file size for images on a website is no more than 200 KB",
            validation: Rule => Rule.required(),
        }
    ]
}