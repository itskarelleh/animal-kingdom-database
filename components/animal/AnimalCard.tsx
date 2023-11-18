import AnimalThumbnail from "@/components/animal/AnimalThumbnail";
import {AnimalData} from "@/graphql/queries";
export default function AnimalCard({ animal } : { animal : AnimalData }) {

    return (
        <>
            <div className="relative rounded overflow-hidden shadow-lg dark:bg-slate-800 dark:hover:bg-slate-800/50 transition-all ease-linear">
                <div className="flex-shrink-0">
                    <AnimalThumbnail thumbnail={animal.thumbnail} alt={animal.name} />
                </div>
                <div className="px-6 py-4">
                    <div className="">
                        <h2 className="font-bold text-xl mb-2 capitalize">{animal.name}</h2>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 text-base">{animal.description}</p>
                    <p className="text-gray-700 dark:text-gray-200 text-base">{animal.description}</p>
                </div>
            </div>
        </>
    )
}