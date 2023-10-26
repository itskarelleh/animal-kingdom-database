"use client"

import { ApolloSandbox } from '@apollo/sandbox/react';

export default function EmbeddedSandbox() {
    return (
        <ApolloSandbox className="h-screen"
            initialEndpoint='http://localhost:3000'
        />
    );
}
