# Animal Kingdom Database

A web app allows users to search about animals and learn more about their classifications such as phylum, class, order, and more. 

## Stack
- Next.js
- TypeScript
- Tailwind.css
- Shadcn
- GraphQL
- PostgreSQL
- Prisma
- Docker 

## Setting Up Locally

Before running the project, make sure you have the following installed:
- Node.js 18
- Docker

1. Fork this repository 
2. Clone the forked repository to your local machine
3. Open the project using your favorite code editor
4. Use Docker to set up the Postgresql database:
```bash
  docker run -d -p 5432:5432 akdb #initialize a new image
  docker run -d -p 5432:5432 --name akdb-test akbd #initializes a new container from the image
```
5. Make an .env.local file from the .env.example file and fill in the variables in the new .env.local file
```bash
  cp .env.example .env.local # for Unix-based systems
  ## copy .env.example .env.local # for Windows 
```
6. Now, run this command to install dependencies and start the projects
```bash
  npm install && npm run dev
  or
  pnpm install && pnpm run dev
```

[//]: # (To seed database:)
[//]: # (npx ts-node ./prisma/seed.ts)

