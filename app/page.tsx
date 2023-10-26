import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-blue-500 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-6xl font-bold text-left text-white">
            Your Animal Kingdom Project
          </h1>
          <p className="text-xl text-left text-white mt-4">
            Explore the fascinating world of animals!
          </p>
        </div>
      </div>
    </main>
  )
}
