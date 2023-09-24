import { FunctionComponent } from "react";
import {StaticImageData} from 'next/image'
import TechContainer from "@/components/tech_container";
import LaptopWrapper from "@/components/laptop_wrapper";
interface ShowcaseProps {
    source: StaticImageData,
    title: string,
    detail: string,
    tech: string[]
}

const Showcase:FunctionComponent<ShowcaseProps> = ({source, title, detail, tech}) => {
    return (
        <section>
            <article className="mt-2 flex flex-col md:flex-row justify-center items-center">
                <LaptopWrapper source={source}/>
                <div className="w-full flex flex-col justify-center items-center sm:pl-2 md:pl-4">
                    <h3 className="text-3xl">{title}</h3>
                    <p className="text-gray-800/75">{detail}</p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {tech.map((te, index) => (
                            <TechContainer key={index} technique={te}/>
                        ))}
                    </div>
                </div>
            </article>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        </section>

    )
}

export default Showcase