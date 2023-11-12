"use client"
import {useQuery} from "@apollo/client";
import {GET_ANIMAL} from "@/graphql/queries";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type Props = {
    params: {
        name: string;
    };
};

export default function Page({ params: { name } } : Props) {

    const { data, loading, error} = useQuery(GET_ANIMAL, {
        variables: { name }
    });

    if(loading) {
        return <p className="flex flex-col h-screen w-full items-center justify-center">Fetching {name}</p>
    }

    if(error) {
        console.log("Error: ", error);
        return <p className="flex flex-col h-screen w-full items-center justify-center">Error getting {name}</p>
    }

    const animal = data?.animal;

    console.log(animal);

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4">

            </div>
            <div className="col-span-12 md:col-span-8">
                {animal.name}
                {animal.subPhylum}
                {animal.phylum}

            </div>
        </div>
    )
}