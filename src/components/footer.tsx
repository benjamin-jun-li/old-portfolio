import Link from 'next/link'
import Image from 'next/image'
import GithubSVG from 'public/github.svg'
import LinkedinSVG from 'public/linkedin.svg'
import EmailSVG from 'public/email.svg'

export default function Footer() {
    return (
        <footer className="footer footer-center px-10 pt-4 pb-8 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4 -mb-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="flex flex-row items-center justify-around gap-8">
                    <Link href={'https://github.com/benjamin-jun-li'}><Image src={GithubSVG} width={40} height={40} alt={'github icon'}/></Link>
                    <Link href={'https://www.linkedin.com/in/jun-benjamin-li/'}><Image src={LinkedinSVG} width={40} height={40} alt={'linkedin icon'}/></Link>
                    <Link href={'mailto:benjaminli060@gmail.com'}><Image src={EmailSVG} width={40} height={40} alt={'email icon'}/></Link>
                </div>
            </nav>
            <aside className="-mt-4">
                <p>Benjamin Li - Made with 💫 on 🌏</p>
            </aside>
        </footer>
    )
}