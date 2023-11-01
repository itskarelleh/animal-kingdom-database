import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// @ts-ignore
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: `${process.env.BASE_URL}/graphql`
        })
    })
})