import {useQuery} from "@apollo/client";
import {gql} from "graphql-tag";
import Loader from "@/components/Loader";
import {AnimalData, GET_CATEGORY} from "@/graphql/queries";
import AnimalCard from "@/components/animal/AnimalCard";


type Props = {
    params: {
        category: string
    }
}

export default function Page({ params: { category } } : Props) {
    const { data, loading, error } = useQuery(GET_CATEGORY, {
        variables: {
            category
        }
    })

    if(loading) {
        return (
            <div className="h-screen">
                <Loader />
            </div>
        )
    }

    if(error) {
        return (
            <div className="h-screen">
                {error.message}
            </div>
        )
    }

    const animals = data?.animalCategories;

    return (
        <section className="w-full min-h-screen">
            {animals.map((animal : AnimalData) => {
                <AnimalCard key={animal.id} animal={animal} />
            })}
        </section>
    )
}