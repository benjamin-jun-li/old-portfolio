import TechStack from "@/components/tech_stack";
import ProjectBoard from "@/components/project_board";

export default function Home() {
  return (
    <main className="bg-amber-50 min-h-screen p-2 md:p-24 flex flex-col justify-between items-center z-[0] w-full">
        <section id='intro' className="pb-10 md:pb-0 md:pt-5 sm:pb-10">
            <h1 className="text-3xl">Hey I&apos;m Benjamin!</h1>
            <p className="pt-3">
                I am an IT student at UNSW, based in Australia.🦘 <br/>
                I love software development. 🔎<br/>
                I enjoy experimenting new stuff in front-end development 🌌<br/>
                I am always eager to learn and grow.🙂
            </p>
        </section>
        <section id="about">
            <TechStack />
        </section>
        <section id="projects" className="w-full">
            <ProjectBoard />
        </section>
    </main>
  )
}
