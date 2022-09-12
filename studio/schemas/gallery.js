export default {
	name: "gallery",
	type: "document",
	title: "Gallery pictures",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			name: "image",
			type: "image",
            title: "Image",
			description: "The optimal file size for images on a website is no more than 200 KB",
            validation: Rule => Rule.required(),
		},
		{
			name: "description",
			type: "string",
			title: "Description",
			description: "Optional picture description",
		}
	],
};
