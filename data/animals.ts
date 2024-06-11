/**
 * Animal Template:
 * {
 *      name: '',
 *      description: '',
 *      phylum: '',
 *      subPhylum: '',
 *      classification: '',
 *      animalOrder: '',
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
    classification: string
    animalOrder: string
    family: string
    // conservationStatus?
}

export const animals : any = [
    {
        name: 'Cat',
        description: 'A domestic cat',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Mammalia',
        animalOrder: 'Carnivora',
        family: 'Felidae',
        conservationStatus: 'NA'
    },
    {
        name: 'Dog',
        description: 'A domestic dog',
        phylum: 'Chordata',
        subPhylum: 'Verebrata',
        classification: 'Mammalia',
        animalOrder: 'Carnivora',
        family: 'Canidae',
        conservationStatus: 'NA'
    },
    {
        name: 'Gorilla',
        description: 'A powerful and intelligent ape',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Mammalia',
        animalOrder: 'Primates',
        family: 'Hominidae',
        conservationStatus: 'CR',
    },
    {
        name: 'Lion',
        description: 'A majestic big cat',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Mammalia',
        animalOrder: 'Carnivora',
        family: 'Felidae',
        conservationStatus: 'VU',
    },
    {
        name: 'Elephant',
        description: 'A large and intelligent mammal',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Mammalia',
        animalOrder: 'Proboscidea',
        family: 'Elephantidae',
        conservationStatus: 'EN',
    },
    {
        name: 'Eagle',
        description: 'A powerful and majestic bird of prey',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Aves',
        animalOrder: 'Accipitriformes',
        family: 'Accipitridae',
        conservationStatus: 'LC',
    },
    {
        name: 'Parrot',
        description: 'A colorful and intelligent tropical bird',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Aves',
        animalOrder: 'Psittaciformes',
        family: 'Psittacidae',
        conservationStatus: 'LC',
    },
    {
        name: 'Penguin',
        description: 'A flightless bird adapted to life in the water',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Aves',
        animalOrder: 'Sphenisciformes',
        family: 'Spheniscidae',
        conservationStatus: 'VU',
    },
    {
        name: 'Crocodile',
        description: 'A large aquatic reptile with a powerful jaw',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Reptilia',
        animalOrder: 'Crocodylia',
        family: 'Crocodylidae',
        conservationStatus: 'LC',
    },
    {
        name: 'Turtle',
        description: 'A slow-moving reptile with a protective shell',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Reptilia',
        animalOrder: 'Testudines',
        family: 'Testudinidae',
        conservationStatus: 'VU',
    },
    {
        name: 'Snake',
        description: 'A legless reptile known for its slithering movement',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Reptilia',
        animalOrder: 'Serpentes',
        family: 'Colubridae',
        conservationStatus: 'LC',
    },
    {
        name: 'Frog',
        description: 'A small, leaping amphibian with webbed feet',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Amphibia',
        animalOrder: 'Anura',
        family: 'Bufonidae',
        conservationStatus: 'LC',
    },
    {
        name: 'Salamander',
        description: 'A slender, long-tailed amphibian',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Amphibia',
        animalOrder: 'Caudata',
        family: 'Salamandridae',
        conservationStatus: 'LC',
    },
    {
        name: 'Newt',
        description: 'A small, semi-aquatic amphibian with bright colors',
        phylum: 'Chordata',
        subPhylum: 'Vertebrata',
        classification: 'Amphibia',
        animalOrder: 'Caudata',
        family: 'Salamandridae',
        conservationStatus: 'LC',
    },
    {
        name: 'cougar',
        description: 'a large cat native to the Americas',
        thumbnail: 'https://github.com/itskarelleh/animal-kingdom-database/assets/23417952/a113bcbe-eb60-41b2-9d88-f858e3438a5b',
        phylum: 'chordata',
        subPhylum: 'vertebrata',
        classification: 'mammalia',
        animalOrder: 'carnivora',
        family: 'felidae',
        conservationStatus: 'LC',
    },
];