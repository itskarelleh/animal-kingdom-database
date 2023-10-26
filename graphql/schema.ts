import {gql} from "graphql-tag";

export const typeDefs = gql`
    type Animal {
        id: ID!
        name: String!
        phylum: String!
        subPhylum: String
        class: String!
        Order: String!
        Family: String!
    }
    
    type Query {
        animals: [Animal!]!
        animalsByFamily(family: String): [Animal!]!
        animalById(id: ID!): Animal!
    }
`