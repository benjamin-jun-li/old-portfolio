import Image from 'next/image'
import { FileJson2, PocketKnife, UserSquare2 } from 'lucide-react'
import Link from "next/link";

export default function Header() {
    return (
        <div className="navbar flex-row justify-between bg-[#fcf4d2] md:text-3xl fixed top-0 shadow-md !z-30">
            <div className="">
                <label className="swap swap-flip">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />
                    <div className="swap-on w-10"><Image className="rounded-full" src="/profile.jpg" alt="profile" width={500} height={500}/></div>
                    <div className="swap-off w-10"><Image className="rounded-full" src="/profile.jpg" alt="profile" width={500} height={500}/></div>
                </label>
                <Link href={'/'} className="text-sm gap-1 btn btn-ghost">
                    Benjamin Li
                </Link>
            </div>

            <div className="visible md:invisible dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content  bg-amber-100 mr-2 shadow rounded-box w-30">
                    <li className="hover:bg-base-100 rounded-full"><Link className="scroll-smooth" href={"#about"}>ABOUT</Link></li>
                    <li className="hover:bg-base-100 rounded-full"><Link className="scroll-smooth" href={"#projects"}>PROJECTS</Link></li>
                    <li className="hover:bg-base-100 rounded-full"><Link href={"https://drive.google.com/file/d/1Q-8epyxp0d-jNhaL2YjAS6q-sb_0NrUA/view?usp=sharing"}>RESUME/CV</Link></li>
                </ul>
            </div>

            <div className="hidden md:visible md:flex justify-center">
                <Link className='-mt-2 scroll-smooth' href={'#about'}>
                    <button className="btn btn-ghost">
                        <UserSquare2 width={40} height={40}/>
                        ABOUT
                    </button>
                </Link>
                <Link className='-mt-2' href={'#projects'}>
                    <button className="btn btn-ghost">
                        <PocketKnife width={40} height={40}/>
                        PROJECTS
                    </button>
                </Link>
                <Link target="_blank" className='-mt-2' href={'https://drive.google.com/file/d/1Q-8epyxp0d-jNhaL2YjAS6q-sb_0NrUA/view?usp=sharing'}>
                    <button className="btn btn-ghost">
                        <FileJson2 width={40} height={40}/>
                        Resume/CV
                    </button>
                </Link>
            </div>
        </div>
    )
}