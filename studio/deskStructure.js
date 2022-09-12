import S from "@sanity/desk-tool/structure-builder";

export default () => 
    S.list()
        .title('Content')
        .items(
            [
                S.listItem()
                .title("Site Settings")
                .child(
                    S.editor()
                        .id("siteSettings")
                        .schemaType("siteSettings")
                        .documentId("site-settings")
                ),
                S.listItem()
                    .title("Page Hero")
                    .child(
                        S.editor()
                            .id("pageHero")
                            .schemaType("pageHero")
                            .documentId("page-hero")
                    ),
                S.listItem()
                .title("About")
                .child(
                    S.editor()
                        .id("about")
                        .schemaType("about")
                        .documentId("single-about")
                    ),
                S.listItem()
                .title("Contact")
                .child(
                    S.editor()
                        .id("contact")
                        .schemaType("contact")
                        .documentId("single-contact")
                ),
                S.divider(),
                ...S.documentTypeListItems().filter(item => !['pageHero', "about", "contact", "siteSettings"].includes(item.getId())),
            ]
        )