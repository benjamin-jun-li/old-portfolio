import { FunctionComponent } from "react";

const TechContainer:FunctionComponent<{ technique:string }> = ({ technique }) => {
    return (
        <div>
            <div className="badge badge-accent gap-2 hover:animate-pulse cursor-default w-full">
                { technique }
            </div>
        </div>
    )
}
export default TechContainer