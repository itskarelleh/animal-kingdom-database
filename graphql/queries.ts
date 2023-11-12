import { gql } from "graphql-tag"

export const GET_ANIMAL = gql`
    query Animal($name: String!) {
        animal(name: $name) {
            id
            name
            description
            family
            class
            order
            phylum
            subPhylum
            conservationStatus
        }
    }
`;

export const GET_ANIMALS = gql`
    query Animals {
        animals {
            id
            name
            family
            order
            conservationStatus
        }
    }
`;

export const GET_ANIMALS_BY_NAME = gql`
    query GetAnimalsByNames($names: [String]) {
        animalsByNames(names: $names) {
            id
            name
            family
            thumbnail
            order
            conservationStatus
        }    
    }
`;

export type AnimalData = {
    animal: {
        id: number;
        name: string;
        description: string;
        conservationStatus: string;
        phylum: string;
        subPhylum: string;
        class: string;
        order: string;
        family: string;
        createdAt: string;
        updatedAt: string;
    };
};

export type AnimalVariables = {
    name: string;
};
