import { ApolloLink } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        // Handle GraphQL errors
    }

    if (networkError) {
        // Handle network errors
    }
});

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_SERVER_GRAPHQL
});

// @ts-ignore
const link = ApolloLink.from([errorLink, httpLink]);

export default {
    link,
};
