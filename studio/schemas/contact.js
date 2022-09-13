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
            description: "Emails will be sent to this address when a user sends the contact form. Send a test email by filling out the form to activate it and to make sure everything works as expected!",
            validation: Rule => Rule.required(),
        }
    ]
}