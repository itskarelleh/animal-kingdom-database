"use client"
import React from "react";
import {useQuery} from "@apollo/client";
import {AnimalData, GET_ANIMAL} from '@/graphql/queries';
import {rawMarkup} from "@/utils/markdownParser";
import AnimalThumbnail from "@/components/animal/AnimalThumbnail";
import {useAuth} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";

type Props = {
    params: {
        name: string;
    };
};


enum ConservationStatus {
    EX = 'Extinct',
    EW = 'Extinct in the Wild',
    CR = 'Critically Endangered',
    EN = 'Endangered',
    VU = 'Vulnerable',
    NT = 'Near Threatened',
    LC = 'Least Concern',
    DD = 'Data Deficient',
    NE = 'Not Evaluated',
    NA = 'Not Applicable'
}

const conservationStatusLabels: { [key in keyof typeof ConservationStatus]: string } = {
    EX: 'Extinct',
    EW: 'Extinct in the Wild',
    CR: 'Critically Endangered',
    EN: 'Endangered',
    VU: 'Vulnerable',
    NT: 'Near Threatened',
    LC: 'Least Concern',
    DD: 'Data Deficient',
    NE: 'Not Evaluated',
    NA: 'Not Applicable'
};

const getConservationStatusLabel = (statusCode: string): string => {
    // @ts-ignore
    return conservationStatusLabels[statusCode] || 'Unknown Status';
}

export default function Page({ params: { name } } : Props) {

    const { data, loading, error} = useQuery(GET_ANIMAL, {
        variables: { name }
    });

    const { isSignedIn } = useAuth();

    if(loading) {
        return <p className="flex flex-col h-screen w-full items-center justify-center">Fetching {name}</p>
    }

    if(error) {
        return <p className="flex flex-col h-screen w-full items-center justify-center">Error getting {name}</p>
    }

    const animal : AnimalData = data?.animal;

    return (
        <div className="grid grid-cols-12 gap-4 p-8">
            <div className="col-span-12 md:col-span-4">
                <header className="border-none flex flex-col justify-center md:justify-normal items-center md:items-normal sticky top-24">
                    <div className="px-8 w-full flex flex-col items-center justify-center h-full flex-shrink-0">
                        <AnimalThumbnail thumbnail={animal.thumbnail} alt={animal.name} />
                    </div>
                    <div className="w-full space-y-2 p-8">
                        <h1 className="capitalize mb-4">
                            {animal.name}
                        </h1>
                        <KeyValueField keyName="order" value={animal.order} />
                        <KeyValueField keyName="class" value={animal.class} />
                        <KeyValueField keyName="family" value={animal.family} />
                        <KeyValueField keyName="phylum" value={animal.phylum} />
                        <KeyValueField keyName="subphylum" value={animal.subPhylum} />
                        {animal.conservationStatus != 'NA' && <KeyValueField keyName="conservation"
                            value={getConservationStatusLabel(animal.conservationStatus)} /> }
                    </div>
                </header>
            </div>
            <div className="col-span-12 md:col-span-8">
                {isSignedIn && (<div className="w-full flex flex-row justify-end">
                        <Button><a href={`/contribute/edit/${name}`}>Edit</a></Button>
                    </div>
                    )}
                {animal.bio.length <= 0 ? (<div className="text-center">No bio for {animal.name} yet. Coming soon </div> )
                    :
                    (
                        <div role="main" className={"[&>p]:mb-8"} dangerouslySetInnerHTML={{ __html: rawMarkup(animal.bio) }}>
                        </div>
                    )}
            </div>
        </div>
    )
}

//The Key does not have to match
// the key from the database
const KeyValueField = ({ keyName, value } : { keyName: any, value: any }) => (
    <div className="grid grid-cols-12 w-full">
        <span className="text-sm col-span-6 text-slate-500">{keyName}</span>
        <span className="text-sm col-span-6">{value}</span>
        <span className="text-sm sr-only">{keyName} : {value}</span>
    </div>
)