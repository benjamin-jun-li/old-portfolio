'use client'
import LangCollection from "@/components/lang_collection";
import FrameCollection from "@/components/frame_collection";
import ToolCollection from "@/components/tool_collection";
import { useState } from 'react'
const TechStack = () => {
    const [display, setDisplay] = useState<string>("lang")
    const selectDisplay = (id:string) => {
        const tabs:NodeListOf<HTMLElement>|null = document.querySelectorAll('.tab')
        tabs.forEach((tab) => {
            tab.classList.remove('tab-active')
        })
        const btn:HTMLElement|null = document.getElementById(id)
        if (btn) {
            btn.classList.add('tab-active')
            // set display status
            setDisplay(id)
        }
    }
    return (
        <div className="pt-2 grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
            <div className="flex flex-col justify-between items-center gap-5 sm:pt-6 md:pt-0">
                <h2 className="font-bold text-xl">My Tech Stack 🦉</h2>
                <div>See my skill set!</div>
                <div className="tabs tabs-boxed flex flex-col items-center md:flex-row md:justify-center">
                    <a className="tab w-30 tab-active" id="lang" onClick={() => {selectDisplay("lang")}}>Languages</a>
                    <a className="tab w-30" id="frame" onClick={() => {selectDisplay("frame")}}>Frameworks</a>
                    <a className="tab w-30 sm:px-8" id="tool" onClick={() => {selectDisplay("tool")}}>Tools</a>
                </div>
            </div>
            {display === "lang" ? <LangCollection /> : <></>}
            {display === "frame" ? <FrameCollection /> : <></>}
            {display === "tool" ? <ToolCollection /> : <></>}
        </div>
    )
}

export default TechStack