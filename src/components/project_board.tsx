import Image from "next/image"
import Showcase from "@/components/showcase";
import DevelopingSVG from "/public/developing.svg"
import GlobalPayShot from "/public/gp_screenshot.png"
const ProjectBoard = () => {
    const projects_data = [
        {
            title: "Global Pay",
            img: GlobalPayShot,
            detail: "A NextJS Front-End Project Developed during an internship at AwardGlobal",
            tech: ["NextJS", "Tailwind CSS", "Ant-Design"]
        },
        {
            title: "Bigbrain",
            img: DevelopingSVG,
            detail: "A React quiz platform inspired by Kahoot during COMP6080(Web Front-End Programming)",
            tech: ["React", "MaterialUI", "Cypress"]
        },
        {
            title: "LurkForWork",
            img: DevelopingSVG,
            detail: "A job sharing website during COMP6080(Web Front-End Programming)",
            tech: ["VanillaJS", "Bootstrap"]
        }
    ]
    return (
        <section className="mt-4 md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <h2 className="text-xl font-bold">Projects</h2>
                <Image src={DevelopingSVG} alt={"developing"} width={120} height={120}/>
            </div>
            <div className="mt-3">
                {projects_data.map((project, index) => (
                    <Showcase key={index} title={project.title} source={project.img} detail={project.detail} tech={project.tech}/>
                ))}
            </div>
        </section>
    )
}

export default ProjectBoard