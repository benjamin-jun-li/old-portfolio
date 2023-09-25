import TechIcon from "@/components/tech_icon";
import NextIcon from 'public/next.svg'
import TailwindIcon from 'public/tailwind.svg'
import ReactIcon from 'public/react.svg'
import NodeIcon from 'public/nodejs.svg'
import MuiIcon from 'public/mui.svg'
import CyIcon from 'public/cypress.jpeg'
import RestIcon from 'public/restapi.png'
import WpIcon from 'public/wordpress.svg'
const FrameCollection = () => {
    return (
        <div>
            <div className="avatar flex flex-row pl-6 md:pl-8 -mb-2">
                <TechIcon source={NextIcon} style={"bg-slate-200"}/>
                <TechIcon source={TailwindIcon} style={"bg-slate-200"}/>
                <TechIcon source={ReactIcon} style={"bg-slate-200"}/>
            </div>
            <div className="avatar flex flex-row -mb-2">
                <TechIcon source={TailwindIcon} style={"bg-slate-200 invisible"}/>
                <TechIcon source={NodeIcon} style={"bg-slate-200"}/>
                <TechIcon source={CyIcon} style={"bg-slate-200"}/>
                <TechIcon source={TailwindIcon} style={"bg-slate-200 invisible"}/>
            </div>
            <div className="avatar flex flex-row pl-6 md:pl-8">
                <TechIcon source={WpIcon} style={"bg-slate-200"}/>
                <TechIcon source={RestIcon} style={"bg-slate-200"}/>
                <TechIcon source={MuiIcon} style={"bg-slate-200"}/>
            </div>
        </div>
    )
}
export default FrameCollection