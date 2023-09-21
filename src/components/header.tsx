import Image from 'next/image'
import { FileJson2, PocketKnife, UserSquare2 } from 'lucide-react'
import Link from "next/link";

export default function Header() {
    return (
        <div className="navbar bg-[#fcf4d2] text-5xl shadow-md">
            <Link href={'/'} className="flex-1 text-sm gap-1">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Image src="/profile.jpg" alt="profile" width={500} height={500}/>
                    </div>
                </label>
                Benjamin Li
            </Link>
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