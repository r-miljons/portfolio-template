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
        },
        {
            name: "messageSentTitle",
            type: "string",
            title: "Message sent title",
            description: "This will appear as a confirmation message to the user when the contact form was submitted successfully"
        },
        {
            name: "messageSent",
            type: "richText",
            title: "Message sent",
            description: "This will appear as a confirmation message to the user when the contact form was submitted successfully"
        }
    ]
}