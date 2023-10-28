/**
 * Animal Template:
 * {
 *      name: '',
 *      description: '',
 *      phylum: '',
 *      subPhylum: '',
 *      class: '',
 *      order: '',
 *      family: '',
 *      conservationStatus: ''
 *  };
 *
 * Note about conservationStatus:
 *
 * the value for the conservationStatus is a two -  three character long string
 * if an animal is extinct, than us EX
 * Values for conservationStatus
 *
 *   EX = extinct
 *   EW = extinct in the wild
 *   CR = critically endangered
 *   EN = endangered
 *   VU = vulnerable
 *   NT = near threatened
 *   LC = Least concern
 *   DD = Data deficient
 *   NE = Not Evaluated
 *   NA = N/A(Not applicable) ex: cats are not on the conservation list so they would get this value
 *
 *   if an animal does not have a conservationStatus, just omit that field
 *
 */

type AnimalCreateManyInput = {
    name: string
    description: string
    phylum: string
    subPhylum: string
    class: string
    order: string
    family: string
    // conservationStatus?
}

export const animals : any = [
    {
        name: 'Cat',
        description: 'A domestic cat',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        conservationStatus: 'NA'
    },
    {
        name: 'Dog',
        description: 'A domestic dog',
        phylum: 'Chordata',
        subPhylum: 'Verebrata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Canidae',
        conservationStatus: 'NA'
    },
    {
        name: 'Gorilla',
        description: 'A powerful and intelligent ape',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Mammalia',
        order: 'Primates',
        family: 'Hominidae',
        conservationStatus: 'CR',
    },
    {
        name: 'Lion',
        description: 'A majestic big cat',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        conservationStatus: 'VU',
    },
    {
        name: 'Elephant',
        description: 'A large and intelligent mammal',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Mammalia',
        order: 'Proboscidea',
        family: 'Elephantidae',
        conservationStatus: 'EN',
    },
    {
        name: 'Eagle',
        description: 'A powerful and majestic bird of prey',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Aves',
        order: 'Accipitriformes',
        family: 'Accipitridae',
        conservationStatus: 'LC',
    },
    {
        name: 'Parrot',
        description: 'A colorful and intelligent tropical bird',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Aves',
        order: 'Psittaciformes',
        family: 'Psittacidae',
        conservationStatus: 'LC',
    },
    {
        name: 'Penguin',
        description: 'A flightless bird adapted to life in the water',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Aves',
        order: 'Sphenisciformes',
        family: 'Spheniscidae',
        conservationStatus: 'VU',
    },
    {
        name: 'Crocodile',
        description: 'A large aquatic reptile with a powerful jaw',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Reptilia',
        order: 'Crocodylia',
        family: 'Crocodylidae',
        conservationStatus: 'LC',
    },
    {
        name: 'Turtle',
        description: 'A slow-moving reptile with a protective shell',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Reptilia',
        order: 'Testudines',
        family: 'Testudinidae',
        conservationStatus: 'VU',
    },
    {
        name: 'Snake',
        description: 'A legless reptile known for its slithering movement',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Reptilia',
        order: 'Serpentes',
        family: 'Colubridae',
        conservationStatus: 'LC',
    },
    {
        name: 'Frog',
        description: 'A small, leaping amphibian with webbed feet',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Amphibia',
        order: 'Anura',
        family: 'Bufonidae',
        conservationStatus: 'LC',
    },
    {
        name: 'Salamander',
        description: 'A slender, long-tailed amphibian',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Amphibia',
        order: 'Caudata',
        family: 'Salamandridae',
        conservationStatus: 'LC',
    },
    {
        name: 'Newt',
        description: 'A small, semi-aquatic amphibian with bright colors',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        class: 'Amphibia',
        order: 'Caudata',
        family: 'Salamandridae',
        conservationStatus: 'LC',
    },
];