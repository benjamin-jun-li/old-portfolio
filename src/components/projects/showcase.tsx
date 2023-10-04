import { FunctionComponent } from "react";
import { StaticImageData } from 'next/image';
import TechContainer from "@/components/projects/tech_container";
import LaptopWrapper from "@/components/projects/laptop_wrapper";
import Link from "next/link";

interface ShowcaseProps {
    source: StaticImageData,
    title: string,
    detail: string,
    tech: string[],
    siteUrl: string
}

const Showcase:FunctionComponent<ShowcaseProps> = ({source, title, detail, tech, siteUrl}) => {
    return (
        <section>
            <article className="mt-2 flex flex-col md:flex-row justify-center items-center">
                <LaptopWrapper source={source}/>
                <div className="w-full flex flex-col justify-center items-center px-2 md:px-0">
                    {siteUrl !== "" ?
                        (<Link className="text-2xl" href={siteUrl}>{title}</Link>) :
                        (<h3 className="text-2xl">{title}</h3>)}
                    <p className="text-gray-800/75 max-w-[80%]">{detail}</p>
                    <div className="flex flex-wrap justify-center items-center gap-4 mt-1">
                        {tech.map((te, index) => (
                            <TechContainer key={index} technique={te}/>
                        ))}
                    </div>
                </div>
            </article>
            <hr className="max-w-[20rem] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </section>

    )
}

export default Showcase