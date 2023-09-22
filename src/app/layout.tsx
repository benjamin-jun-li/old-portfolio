import '../styles/globals.css'
import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Benjamin Li",
  description: 'I am a postgraduate IT student at UNSW who enjoys front-end development, I always love exploring fun stuff in software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  )
}
