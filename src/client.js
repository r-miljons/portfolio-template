import sanityClient from "@sanity/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const PROJECT_ID = "bg4x2hkd";
const DATASET = "production";

export default sanityClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
});

export const apolloClient = new ApolloClient({
    uri: `https://${PROJECT_ID}.api.sanity.io/v1/graphql/${DATASET}/default`,
    cache: new InMemoryCache(),
});

