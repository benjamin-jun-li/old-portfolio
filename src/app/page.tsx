import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-amber-50 p-24 flex flex-col justify-center items-center">
      <div id='intro'>Hey I&apos;m Benjamin!</div>
      <div id='about'>tech stack</div>
      <div id="projects">my projects</div>
    </main>
  )
}
