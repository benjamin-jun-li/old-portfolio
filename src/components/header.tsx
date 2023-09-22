import Image from 'next/image'
import { FileJson2, PocketKnife, UserSquare2 } from 'lucide-react'
import Link from "next/link";

export default function Header() {
    return (
        <div className="navbar bg-[#fcf4d2] text-5xl fixed top-0 shadow-md z-30">
            <div className="flex-1">
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

            <div className="flex-none">
                <a className='-mt-2 scroll-smooth' href={'#about'}>
                    <button className="btn btn-ghost">
                        <UserSquare2 width={40} height={40}/>
                        ABOUT
                    </button>
                </a>
                <Link className='-mt-2' href={''}>
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