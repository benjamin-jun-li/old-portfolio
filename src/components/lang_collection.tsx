import TechIcon from "@/components/tech_icon";
import JavaScriptIcon from 'public/javascript.svg'
import GccIcon from 'public/gcc.svg'
import CppIcon from 'public/c++.svg'
import PythonIcon from 'public/python.svg'
import HtmlIcon from 'public/html.svg'
import CssIcon from 'public/css.svg'
import TypeScriptIcon from 'public/typescript.svg'
import PgsqlIcon from 'public/postgresql.svg'
import BashIcon from 'public/bash.png'
import RIcon from 'public/r.svg'
const LangCollection = () => {
    return (
        <div>
            <div className="avatar flex flex-row pl-7 -mb-2">
                <TechIcon source={JavaScriptIcon} style={"bg-amber-300"}/>
                <TechIcon source={TypeScriptIcon} style={""}/>
                <TechIcon source={BashIcon} style={"bg-slate-200"}/>
            </div>
            <div className="avatar flex flex-row -mb-2">
                <TechIcon source={HtmlIcon} style={"bg-slate-200"}/>
                <TechIcon source={CssIcon} style={"bg-slate-200"}/>
                <TechIcon source={GccIcon} style={""}/>
                <TechIcon source={CppIcon} style={""}/>
            </div>
            <div className="avatar flex flex-row pl-7">
                <TechIcon source={PgsqlIcon} style={"bg-slate-200"}/>
                <TechIcon source={PythonIcon} style={"bg-slate-200"}/>
                <TechIcon source={RIcon} style={"bg-slate-200"}/>
            </div>
        </div>
    )
}
export default LangCollection