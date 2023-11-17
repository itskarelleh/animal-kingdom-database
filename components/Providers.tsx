"use client"

import { ReactNode } from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client"


type Props = {}

const Providers = ({ children } : { children: ReactNode }) => {

    const client = new ApolloClient({
        uri: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL}`,
        cache: new InMemoryCache(),
        //
    });

    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL}`);

    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Providers;