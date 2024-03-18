import { gql } from "graphql-tag"

export const GET_ANIMAL = gql`
    query Animal($name: String!) {
        animal(name: $name) {
            id
            name
            description
            family
            thumbnail
            bio
            classification
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
            thumbnail
            description
        }    
    }
`;

export const GET_CATEGORY = gql`
    query GetAnimalCategories($category: String!) {
        animalCategories(category: $category)
    }
`;


export type AnimalData = {
        id: number;
        name: string;
        description: string;
        conservationStatus: string;
        thumbnail: string;
        bio: string;
        phylum: string;
        subPhylum: string;
        classification: string;
        order: string;
        family: string;
        createdAt: string;
        updatedAt: string;
};

export type Thumbnail = {
    thumbnail: {
        src: string;
        alt: string;
    }
}

export type AnimalVariables = {
    name: string;
};
