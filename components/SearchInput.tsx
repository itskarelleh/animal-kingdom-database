import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import {Input} from "@/components/ui/input";
import { Search } from "lucide-react";
import {AnimalData} from "@/graphql/queries";
import Link from "next/link";
import {DialogClose} from "@/components/ui/dialog";

const SEARCH_ANIMALS_QUERY = gql`
    query SearchAnimals($term: String!) {
        animalsByNames(names: [$term]) {
            id
            name
        }
    }
`;

export default function SearchInput({ isDialogClose } : { isDialogClose?: boolean}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    const [searchResults, setSearchResults] = useState([]);
    const [searchAnimals, { data }] = useLazyQuery(SEARCH_ANIMALS_QUERY);

    // Debounce search term
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500); // 500ms debounce time

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    // Fetch data when debounced term changes
    useEffect(() => {
        if (debouncedTerm) {
            searchAnimals({ variables: { term: debouncedTerm } });
        }
    }, [debouncedTerm, searchAnimals]);

    // Update search results
    useEffect(() => {
        if (data) {
            setSearchResults(data.animalsByNames);
        }
    }, [data]);

    return (
        <div className="w-full border-b border-b-slate-400 flex flex-row items-center">
            <Search />
            <div className="flex flex-col w-full h-full relative">
                <Input
                    className="border-none rounded-none bg-transparent w-full"
                    type="text"
                    placeholder="cat, dog, elephant ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Display search results */}
                {searchResults.length > 0 && (
                    <ul className="absolute z-10 top-full w-full mt-1 bg-white dark:bg-slate-800 shadow-md">
                        {searchResults.map((animal : AnimalData) => {
                            return (
                                <>
                                    {isDialogClose ? (<DialogClose asChild>
                                            <Link className="w-full" key={animal.id} href={`/animal/${animal.name}`}>
                                                <li className="capitalize p-2 bg-white hover:slate-200 dark:bg-slate-800 dark:hover:bg-slate-900/50 w-full transition-all ease-linear">{animal.name}</li>
                                            </Link>
                                        </DialogClose>) :
                                        <Link className="w-full" key={animal.id} href={`/animal/${animal.name}`}>
                                            <li className="capitalize p-2 bg-white hover:slate-200 dark:bg-slate-800 dark:hover:bg-slate-900/50 w-full transition-all ease-linear">{animal.name}</li>
                                        </Link>
                                    }
                                </>
                            )
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}
