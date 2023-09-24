import Image from "next/image"
import Showcase from "@/components/showcase";
import DevelopingSVG from "/public/developing.svg"
const ProjectBoard = () => {
    const projects_data = [
        {
            title: "Bigbrain",
            img: DevelopingSVG,
            detail: "A react quiz platform",
            tech: ["react", "Ant-Design"]
        },
        {
            title: "Global Pay",
            img: DevelopingSVG,
            detail: "A NextJS website",
            tech: ["NextJS", "Ant-Design"]
        },
        {
            title: "Global Pay",
            img: DevelopingSVG,
            detail: "A NextJS website",
            tech: ["NextJS", "Ant-Design"]
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