import React from 'react';
import { GET_ANIMAL } from "@/graphql/queries";
import {useQuery} from "@apollo/client";

export const Animal = ({ name } : any) => {
    const { data, loading, error } = useQuery(GET_ANIMAL, {
        variables: { name },
    });

    console.log(data);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const animal = data?.animalByName;

    if (!animal) {
        return <p>Animal not found.</p>;
    }

    return (
        <div>
            <h1>{animal.name}</h1>
            <p>{animal.description}</p>
            {/* Display other animal details here */}
        </div>
    );
}