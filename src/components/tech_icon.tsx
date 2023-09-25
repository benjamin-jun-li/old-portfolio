import Image, { StaticImageData } from 'next/image'
import { FunctionComponent } from "react";
const TechIcon:FunctionComponent<{ source:StaticImageData, style:string }> = ({ source, style }) => {
    return (
        <div className="w-12 sm:w-16 md:w-18 xl:w-22 mask mask-hexagon">
            <Image className={style} src={source} alt={'test'} width={80} height={80}/>
        </div>
    )
}
export default TechIcon