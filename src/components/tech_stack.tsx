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
        <section className="pt-2 flex flex-col lg:flex-row gap-x-[15%] justify-center items-center">
            <div className="gap-5 pb-5 sm:pt-6 md:pb-2 xl:pb-0 md:pt-0 grid grid-cols-1">
                <h2 className="font-bold text-2xl text-center">My Tech Stack 🦉</h2>
                <h4 className="text-xl text-center">See my skill set!</h4>
                <ul className="w-full md:w-35 tabs tabs-boxed flex flex-col items-center md:flex-row md:justify-center bg-gray-700">
                    <li><a className="tab w-30 tab-active" id="lang" onClick={() => {selectDisplay("lang")}}>Languages</a></li>
                    <li><a className="tab w-30" id="frame" onClick={() => {selectDisplay("frame")}}>Frameworks</a></li>
                    <li><a className="tab w-30 sm:px-8" id="tool" onClick={() => {selectDisplay("tool")}}>Tools</a></li>
                </ul>
            </div>
            {display === "lang" ? <LangCollection /> : <></>}
            {display === "frame" ? <FrameCollection /> : <></>}
            {display === "tool" ? <ToolCollection /> : <></>}
        </section>
    )
}

export default TechStack