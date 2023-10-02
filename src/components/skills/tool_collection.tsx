import TechIcon from "@/components/skills/tech_icon";
import GitIcon from 'public/git.svg'
import JiraIcon from 'public/jira.svg'
import FigmaIcon from 'public/figma.svg'
import AwsIcon from 'public/aws.svg'
const ToolCollection = () => {
    return (
        <div>
            <div className="avatar flex flex-row pl-6 md:pl-8 -mb-2">
                <TechIcon source={FigmaIcon} style={"invisible"}/>
                <TechIcon source={GitIcon} style={"bg-slate-200"}/>
                <TechIcon source={FigmaIcon} style={"invisible"}/>
            </div>
            <div className="avatar flex flex-row -mb-2">
                <TechIcon source={FigmaIcon} style={"invisible"}/>
                <TechIcon source={AwsIcon} style={"bg-slate-200"}/>
                <TechIcon source={FigmaIcon} style={"bg-slate-200"}/>
                <TechIcon source={FigmaIcon} style={"invisible"}/>
            </div>
            <div className="avatar flex flex-row pl-6 md:pl-8">
                <TechIcon source={FigmaIcon} style={"invisible"}/>
                <TechIcon source={JiraIcon} style={"bg-slate-200"}/>
                <TechIcon source={FigmaIcon} style={"invisible"}/>
            </div>
        </div>
    )
}
export default ToolCollection