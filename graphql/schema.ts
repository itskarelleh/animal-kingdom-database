import {gql} from "graphql-tag";

export const typeDefs = gql`
    type Query {
        hello: String
        animal: Animal
        animals: [Animal]
        animalByName(name: String) : Animal
        animalsByNames(names: [String]): [Animal]
        animalsByFamily(family: String): [Animal]
    }
    
    type Animal {
      id: Int
      name: String
      description: String
      conservationStatus: ConservationStatus
      phylum: String
      subPhylum: String
      class: String
      order: String
      family: String
      createdAt: DateTime
      updatedAt: DateTime
    }

# Define the enum type for ConservationStatus
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
    
    scalar DateTime

`