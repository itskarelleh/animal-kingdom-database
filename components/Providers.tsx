"use client"

import { ReactNode } from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client"
import { ClerkProvider } from "@clerk/nextjs";


type Props = {}

const Providers = ({ children } : { children: ReactNode }) => {

    const client = new ApolloClient({
        uri: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL}`,
        cache: new InMemoryCache(),
        //
    });

    return <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
}

export default Providers;