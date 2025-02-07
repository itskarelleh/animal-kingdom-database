import AnimalThumbnail from "@/components/animal/AnimalThumbnail";
import { AnimalData } from "@/graphql/queries";

export default function AnimalCard({ animal } : { animal : AnimalData }) {

    return (
        <>
            <div className="relative rounded overflow-hidden shadow-lg dark:bg-zinc-800 dark:hover:bg-zinc-800/50 transition-all ease-linear">
                <div className="flex-shrink-0">
                    <AnimalThumbnail thumbnail={animal.thumbnail} alt={animal.name} />
                </div>
                <div className="px-6 h-28">
                    <h2 className="font-bold text-xl capitalize mt-2">{animal.name}</h2>
                    <p className="text-zinc-700 dark:text-zinc-200 text-sm md:text-base mt-0">{animal.description}</p>
                </div>
            </div>
        </>
    )
}