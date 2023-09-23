import { FunctionComponent } from "react";

const TechContainer:FunctionComponent<{ technique:string }> = ({ technique }) => {
    return (
        <div>
            <button type="button" className="w-32 h-12 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br shadow-lg shadow-cyan-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{ technique }</button>
        </div>
    )
}
export default TechContainer