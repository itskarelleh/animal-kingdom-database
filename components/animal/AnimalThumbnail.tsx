import Image from "next/image";
import React from "react";

export default function AnimalThumbnail({ thumbnail, alt } : { thumbnail : string, alt : string }) {

    return (
        <figure className="w-full aspect-square rounded-md overflow-hidden relative">
            <Image
                src={thumbnail}
                alt={alt}
                layout="fill"
                objectFit="cover"
            />
        </figure>
    )
}