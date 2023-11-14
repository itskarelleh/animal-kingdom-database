import {gql} from "graphql-tag";

export const typeDefs = gql`
    type Query {
        animal(name: String!): Animal
        animals: [Animal]
        animalsByNames(names: [String]): [Animal]
        animalsByFamily(family: String): [Animal]
        animalCategories(category: String): [String]
    }
    
    type Animal {
      id: Int
      name: String
      description: String
      bio: String
      thumbnail: String
      conservationStatus: ConservationStatus
      phylum: String
      subPhylum: String
      class: String
      order: String
      family: String
      createdAt: DateTime
      updatedAt: DateTime
    }

    enum ConservationStatus {
      EX
      EW
      CR
      EN
      VU
      NT
      LC
      DD
      NE
      NA
    }
    
    type Mutation {
        addAnimal(input: AnimalInput!): Animal
        updateAnimal(input: AnimalInput!): Animal
        deleteAnimal(id: String): Animal
    }
    
    input AnimalInput {
      name: String!
      description: String!
      family: String!
      bio: String!
      class: String!
      order: String!
      phylum: String!
      subPhylum: String
      conservationStatus: String
      thumbnail: Upload
    }
    
    scalar DateTime
    
    scalar Upload

`