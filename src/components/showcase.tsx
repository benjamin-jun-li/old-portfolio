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
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 place-content-stretch">
            <LaptopWrapper source={source}/>
            <div className="w-full flex flex-col justify-center items-center sm:pl-2">
                <h3>{title}</h3>
                <div>{detail}</div>
                <div className="grid md:grid-cols-3 justify-center md:justify-between items-center gap-4">
                    {tech.map((te, index) => (
                        <TechContainer key={index} technique={te}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Showcase