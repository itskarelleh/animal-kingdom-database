"use client"

import {useQuery} from "@apollo/client";
import {GET_ANIMALS_BY_NAME} from "@/graphql/queries";
import {Animal} from "@/components/animal/Animal";
import Loader from "@/components/Loader";

const Animals = () => {
    const { data, loading,error } = useQuery(GET_ANIMALS_BY_NAME, {
    });

    const animals : any = data?.animals;

    console.log("Animals: " + animals);

    if(loading) {
        return (
            <Loader />
        )
    }

    return (
        <div>
            {animals && animals.map((animal : any) => {
                <Animal key={animal.id} animal={animal} />
            })}
        </div>
    )
}

export default Animals;