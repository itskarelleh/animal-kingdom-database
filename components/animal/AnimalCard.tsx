export default function AnimalCard({ animal } : any) {

    return (
        <>
            <div className="rounded overflow-hidden shadow-lg">
                <img
                    alt="Animal"
                    className="w-full h-56 object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                    }}
                    width="200"
                />
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