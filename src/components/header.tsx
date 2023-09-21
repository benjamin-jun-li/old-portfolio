import Image from 'next/image'
import { FileJson2, PocketKnife } from 'lucide-react'
import Link from "next/link";

export default function Header() {
    return (
        <div className="navbar bg-base-100 text-5xl">
            <div className="navbar-start">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Image src="/profile.jpg" alt="profile" width={500} height={500}/>
                    </div>
                </label>
            </div>
            <div className="navbar-center">
                <div className="btn btn-ghost normal-case text-xl">Benjamin Li</div>
            </div>
            <div className="navbar-end">
                <Link target = "_blank" className='-mt-2' href={'public/CV.pdf'} rel="noreferrer">
                    <button className="btn btn-ghost">
                        <FileJson2 width={40} height={40}/>
                        Resume/CV
                    </button>
                </Link>
                <Link className='-mt-2' href={''}>
                    <button className="btn btn-ghost">
                        <PocketKnife width={40} height={40}/>
                        Projects
                    </button>
                </Link>
            </div>
        </div>
    )
}