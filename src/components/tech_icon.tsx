import Image, { StaticImageData } from 'next/image'
import { FunctionComponent } from "react";
const TechIcon:FunctionComponent<{ source:StaticImageData, style:string }> = ({ source, style }) => {
    return (
        <div className="w-14 mask mask-hexagon">
            <Image className={style} src={source} alt={'test'} width={60} height={60}/>
        </div>
    )
}

export default TechIcon