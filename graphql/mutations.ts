import { gql } from "graphql-tag";

export const ADD_ANIMAL = gql`
mutation ADDAnimal($input: AnimalInput!) {
  addAnimal(input: $input) {
    name
    description
    family
    class
    order
    phylum
    subPhylum
    conservationStatus
    thumbnail
  }
}`;

export const UPDATE_ANIMAL = gql`
    mutation UpdateAnimal($id: ID!, $input: AnimalInput!) {
      updateAnimal(id: $id, input: $input) {
        id
        name
        description
        family
        class
        order
        phylum
        subPhylum
        conservationStatus
        thumbnail
      }
}`;

export const DELETE_ANIMAL = gql`
    mutation DeleteAnimal($id: ID!) {
      deleteAnimal(id: $id) {
        id
        name
      }
    }
`;